const net = require('net');
const PORT = 3000;
const helloResponse = `HTTP/1.1 200 OK
                      content-length: 300

                      <!DOCTYPE html>
                      <html lang="ja">
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                      </head>
                      <body>
                        <h1>hello world sample</h1>
                      </body>
                      </html>
                      `

net
  // 接続されたら何をするか設定する
  .createServer((socket) => {
    // まずは接続されたことを表示する
    console.log('Client connected');

    // データを受け取ったら何をするか設定する
    socket.on('data', (data) => {
      socket.write(helloResponse);
    });

    // 接続が閉じたら何をするか設定する
    socket.on('close', () => {
      console.log('connection closed');
    });
  })
  // ポートを指定していてサーバーを起動する
  .listen(PORT, '127.0.0.1');

console.log(`Server started on port ${PORT}`);
