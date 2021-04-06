import * as cdk from '@aws-cdk/core';

export class CdkconditionStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // contextパラメーターはcdk.jsonなどに書くことができる
    // ここで指定しているのは便宜的なもの
    this.node.setContext('stage', 'dev')

    const stage = this.node.tryGetContext('stage');

    const condition = new cdk.CfnCondition(this, "condition", {
      expression: cdk.Fn.conditionEquals(stage, "dev")
    })

    const conditval = cdk.Fn.conditionIf(
    	condition.logicalId, "stage is dev", "stage is not dev")

    new cdk.CfnOutput(this, 'output', {value: conditval.toString()})
  }
}
