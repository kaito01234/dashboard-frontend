[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/kaito01234/frontend-study)

aws dynamodb create-table \
 --table-name TemporaryEnvironment \
 --key-schema AttributeName=id,KeyType=HASH \
 --attribute-definitions AttributeName=id,AttributeType=S \
 --billing-mode PAY_PER_REQUEST \
 --endpoint-url=http://host.docker.internal:4566

aws dynamodb list-tables --endpoint-url=http://host.docker.internal:4566

aws dynamodb delete-table \
 --table-name TemporaryEnvironment \
 --endpoint-url=http://host.docker.internal:4566

npx cdklocal bootstrap --endpoint-url=http://host.docker.internal:4566
