[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/kaito01234/dashboard-frontend)

curl https://asb5qinpfl.execute-api.ap-northeast-1.amazonaws.com/prod

curl -X POST -H "Content-Type: application/json" -d '{
"id": "test0001",
"name": "テスト 0001",
"branch": "main",
"url": "main"
}' https://asb5qinpfl.execute-api.ap-northeast-1.amazonaws.com/prod/create

curl -X POST -H "Content-Type: application/json" -d '{
"id": "test0001",
"url": "main"
}' https://asb5qinpfl.execute-api.ap-northeast-1.amazonaws.com/prod/delete
