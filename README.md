
## Run echoServer.js
### serverとclientの起動
```
node /js/echoServer.js
node /js/echoClient.js
```
### echoClient.jsにメッセージを送信
```
sample text
```
### echoServer.jsでメッセージが表示される
```
sample text
```

## Run webServer.js
### curlコマンドとwebServer.jsの起動
curlコマンドでhttpレスポンスが返ってくるか確認
```
node js/webServer.js
curl http://localhost:3000
```
