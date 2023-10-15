# 環境一覧

## Create

作成画面へ

## Detail

詳細画面へ

## Delete

スタックを削除する

## Reboot

EC2 を削除して再作成する

# 作成画面

## Create

StepFunction 実行

# StepFunction

-create

dynamo status create
codebuild migrate reset
cfn create stack ec2 + pipeline
cfn status check
pipeline status check
dynamo status success

failed
dynamo status failed
cfn delete stack

-delete

success
dynamo status delete
cfn delete stack
dynamo delete

failed
dynamo statu delete failed

-reboot

dynamo reboot
ec2 delete
ec2 status running
dynamo success

-status

lambda dynamo scan
