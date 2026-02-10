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

        const api = new apigateway.RestApi(this, "EcommerceApi", {
            restApiName: "Ecommerce Api",
            description: "Api para o ecommerce"
        })

        const productsFetchIntegration = new apigateway.LambdaIntegration(props!.productsFatchHandler);
        const productsResource = api.root.addResource("products");
        productsResource.addMethod("GET", productsFetchIntegration);
    }
}
