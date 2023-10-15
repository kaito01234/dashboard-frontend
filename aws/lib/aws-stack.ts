import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';

export class AwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.TableV2(this, 'TemporaryEnvironmentTable', {
      tableName: 'TemporaryEnvironment',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Lambda Function
    const lambdaFunction = new nodejs.NodejsFunction(scope, 'Delete', {
      entry: 'lambda/index.ts',
      handler: 'handler',
      depsLockFilePath: 'lambda/package-lock.json',
      bundling: {
        nodeModules: ['aws-lambda', '@types/aws-lambda', '@aws-sdk/client-codebuild', '@aws-sdk/client-ecs'],
      },
      runtime: lambda.Runtime.NODEJS_18_X,
    });

    const stateMachine = new sfn.StateMachine(scope, 'StateMachine', {
      stateMachineName: 'StateMachine',
      definition: new tasks.DynamoPutItem(this, 'PutItem', {
        item: {
          id: tasks.DynamoAttributeValue.fromString('aaa'),
          name: tasks.DynamoAttributeValue.fromString('aaa'),
          branch: tasks.DynamoAttributeValue.fromString('aaa'),
          url: tasks.DynamoAttributeValue.fromString('aaa'),
          status: tasks.DynamoAttributeValue.fromString('aaa'),
          e2e: tasks.DynamoAttributeValue.fromString('aaa'),
          priority: tasks.DynamoAttributeValue.fromString('aaa'),
          createData: tasks.DynamoAttributeValue.fromString('aaa'),
        },
        table: table,
      }).next(
        new tasks.DynamoPutItem(this, 'PutItem', {
          item: {
            id: tasks.DynamoAttributeValue.fromString('aaa'),
            name: tasks.DynamoAttributeValue.fromString('aaa'),
            branch: tasks.DynamoAttributeValue.fromString('aaa'),
            url: tasks.DynamoAttributeValue.fromString('aaa'),
            status: tasks.DynamoAttributeValue.fromString('aaa'),
            e2e: tasks.DynamoAttributeValue.fromString('aaa'),
            priority: tasks.DynamoAttributeValue.fromString('aaa'),
            createData: tasks.DynamoAttributeValue.fromString('aaa'),
          },
          table: table,
        })
      ),
    });
  }
}
