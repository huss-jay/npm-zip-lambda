import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { NpmLambda } from '../src';

test('Simple test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new NpmLambda(stack, 'LambdaConstruct', { name: 'npm-lambda', description: 'npm-lambda' });

  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 2);
});
