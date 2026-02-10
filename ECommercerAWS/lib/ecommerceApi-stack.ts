import * as cdk from "aws-cdk-lib";
import * as lambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cwlogs from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

interface EcommerceApiStackProps extends cdk.StackProps {
    productsFatchHandler: lambdaNodeJS.NodejsFunction;
}

export class EcommerceApiStack extends cdk.Stack {

    constructor(scope: Construct, id: string, props?: EcommerceApiStackProps) {
        super(scope, id, props);

        const logGroup = new cwlogs.LogGroup(this, "EcommerceApiLogGroup");
        const api = new apigateway.RestApi(this, "EcommerceApi", {
            restApiName: "Ecommerce Api",
            description: "Api para o ecommerce",
            deployOptions: {
                // Inclui o log de acesso para cada requisição feita à API Gateway, enviando os logs para o Log Group criado
                accessLogDestination: new apigateway.LogGroupLogDestination(logGroup),
                accessLogFormat: apigateway.AccessLogFormat.jsonWithStandardFields({
                    httpMethod: true,
                    ip: true,
                    protocol: true,
                    requestTime: true,
                    resourcePath: true,
                    responseLength: true,
                    status: true,
                    caller: true,
                    user: true
                })
            }
        })

        const productsFetchIntegration = new apigateway.LambdaIntegration(props!.productsFatchHandler);
        const productsResource = api.root.addResource("products");
        productsResource.addMethod("GET", productsFetchIntegration);
    }
}
