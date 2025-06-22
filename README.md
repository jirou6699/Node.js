# Description
Node.jsを使用した簡易的なwebServerを構築。
基本的なwebに関する知識の再確認
- [x] IPアドレス
- [x] ポート番号
- [x] SSH
- [x] HTTPレスポンス

## Run localhost
### ページの表示
```
http://localhost:8080/
```

## Run echoServer.js
### serverとclientの起動
```
node js/echoServer.js
node js/echoClient.js
```
### echoClient.jsからメッセージを送信
```
sample text
```
### echoServer.jsで送信メッセージの受信
```
sample text
```

## Run webServer.js
### curlコマンドとwebServer.jsの起動
curlコマンドでレスポンスの確認
```
node js/webServer.js
curl http://localhost:3000
```

## Run webServerHttp.js
### curlコマンドとwebServerHttp.jsの起動
```
node js/webServerHttp.js
curl http://localhost:4000
```
