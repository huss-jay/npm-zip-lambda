

import { Duration } from 'aws-cdk-lib';
import { Runtime, Function, Code } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';


export interface NpmLambdaProps {
  readonly name: string;
  readonly description: string;
}

/**
 * A CDK construct to create Lambda functions.
 */
export class NpmLambda extends Construct {
  constructor(parent: Construct, name: string, props: NpmLambdaProps) {
    super(parent, name);

    // most simple function with static inline code that prints the event and calls the callback function
    new Function(this, props.name, {
      description: props.description,
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromInline('exports.handler = function (e, ctx, cb) { console.log("Event: ", e); cb(); };'),
      handler: 'index.handler',
      timeout: Duration.seconds(5),
    });

  }
}