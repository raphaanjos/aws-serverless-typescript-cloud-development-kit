import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodeJS from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * A stack that defines the AWS resources for the Products App.
 */
export class ProductsAppStack extends cdk.Stack {

    // productsHandler é uma função Lambda que será usada para lidar com as requisições relacionadas aos produtos
    readonly productsHandler: lambdaNodeJS.NodejsFunction;

    // pros são propriedades que podem ser passadas para o construtor da stack
    // scope é o escopo onde a stack será definida, geralmente é a própria stack ou um app
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.productsHandler = new lambdaNodeJS.NodejsFunction(this, 'ProductsHandler', {
            functionName: 'ProductsFetchFunction',
            entry: 'lambda/products/productsFetchFunction.ts',
            handler: 'handler',
            memorySize: 128,
            timeout: cdk.Duration.seconds(5),
            bundling: {
                minify: true,
                sourceMap: false,
            }
        })
    }
}