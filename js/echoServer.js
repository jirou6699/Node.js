const net = require('net');
const PORT = 3000;

net
  // 接続されたら何をするか設定する
  .createServer((socket) => {
    // まずは接続されたことを表示する
    console.log('Client connected');

    // データを受け取ったら何をするか設定する
    socket.on('data', (data) => {
      // 受け取ったデータをそのままクライアントに送り返す
      console.log(`received:${data}`);
      socket.write(data);
    });

    // 接続が閉じたら何をするか設定する
    socket.on('close', () => {
      console.log('connection closed');
    });
  })
  // ポートを指定していてサーバーを起動する
  .listen(PORT, '127.0.0.1');

console.log(`Server started on port ${PORT}`);
