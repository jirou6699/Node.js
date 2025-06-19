const net = require('net');
const SERVER_IP = '127.0.0.1';
const SERVER_PORT = '3000';

// 通信の出入り口を準備
const socket = new net.Socket();

// IPアドレスとポート番号を指定して、接続
// ３つ目の引数は接続が成功したときに呼び出されるコールバック関数
socket.connect(SERVER_PORT, SERVER_IP, () => {
  console.log(`Connected to ${SERVER_IP}:${SERVER_PORT}`)
});

// 標準入力でデータを読み込んだら何をするか指定する
process.stdin.on('data', (data) => {
  // データを読み込んだら、通信の出入り口に書き込む
  // ここでは、標準入力から読み込んだデータをそのままサーバーに送信する
  socket.write(data)
});

socket.on('data', (data) => {
  // サーバーからデータを受け取ったら、標準出力に表示する
  console.log(`Received: ${data}`);
});
