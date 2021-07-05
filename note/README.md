+++
title = "CloudFormationの条件関数"
date = "2021-04-06"
tags = ["CloudFormation"]
+++

[AWS Blogの記事](https://aws.amazon.com/blogs/devops/best-practices-for-developing-cloud-applications-with-aws-cdk/)を読んで、CloudFormationに[条件関数](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html)があることやそれをCDKから使うことができると知って使って試したみた。

ちなみに上のブログの記事では、それを使うことを勧めているわけではないのだが、まあ興味があって使ってみたというだけだ。Fn::Ifという関数を使ってみたのだが、実際のところ利用したいケースは思い浮かばない。

[CDKのコード](https://github.com/suzukiken/cdkcondition)

そもそもCloudFormationの条件関数を使わないとならないケースがあるかどうかはちょっとわからない。
