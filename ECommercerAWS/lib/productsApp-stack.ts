import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodeJS from 'aws-cdk-lib/aws-lambda-nodejs';
// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs.NodejsFunction.html
import * as cdk from 'aws-cdk-lib';
// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_dynamodb.Table.html
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

import { Construct } from 'constructs';
import { Lambda } from 'aws-cdk-lib/aws-ses-actions';

/**
 * A stack that defines the AWS resources for the Products App.
 */
export class ProductsAppStack extends cdk.Stack {

    // productsHandler é uma função Lambda que será usada para lidar com as requisições relacionadas aos produtos
    readonly productsHandler: lambdaNodeJS.NodejsFunction;
    readonly productsAdminHandler: lambdaNodeJS.NodejsFunction;
    readonly productsDdb: dynamodb.Table;

    // pros são propriedades que podem ser passadas para o construtor da stack
    // scope é o escopo onde a stack será definida, geralmente é a própria stack ou um app
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.productsDdb = new dynamodb.Table(this, 'ProductsDdb', {
            tableName: 'products',
            removalPolicy: cdk.RemovalPolicy.DESTROY, // Apaga a tabela quando a stack for destruída (não recomendado para produção)
            partitionKey: {
                name: 'id',
                type: dynamodb.AttributeType.STRING
            },
            billingMode: dynamodb.BillingMode.PROVISIONED,
            readCapacity: 1,
            writeCapacity: 1
        })

        this.productsHandler = new lambdaNodeJS.NodejsFunction(this, 'ProductsHandler', {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 512,
            functionName: 'ProductsFetchFunction',
            entry: 'lambda/products/productsFetchFunction.ts',
            handler: 'handler',
            bundling: {
                minify: true,
                sourceMap: false,
            },
            environment: {
                PRODUCTS_DDB: this.productsDdb.tableName,
            },
            timeout: cdk.Duration.seconds(10),
        })

        this.productsDdb.grantReadData(this.productsHandler);

        this.productsAdminHandler = new lambdaNodeJS.NodejsFunction(this, 'ProductsAdminFunction', {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 512,
            functionName: 'ProductsAdminFunction',
            entry: 'lambda/products/productsAdminFunction.ts',
            handler: 'handler',
            bundling: {
                minify: true,
                sourceMap: false,
            },
            environment: {
                PRODUCTS_DDB: this.productsDdb.tableName,
            },
            timeout: cdk.Duration.seconds(10),
        })
        this.productsDdb.grantReadWriteData(this.productsAdminHandler);
    }
}