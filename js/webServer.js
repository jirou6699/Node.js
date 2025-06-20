const net = require('net');
const fs = require('fs');
const PORT = 3000;



net
  // 接続されたら何をするか設定する
  .createServer((socket) => {
    // まずは接続されたことを表示する
    console.log('Client connected');

    // データを受け取ったら何をするか設定する
    socket.on('data', (data) => {
      const httpRequest = data.toString();
      const requestLine = httpRequest.split('\r\n')[0];
      const path = requestLine.split(' ')[1];
      const requestFile = path.endsWith('/') ? path + 'app/' +`index.html` : path;
      const fileContent = fs.readFileSync(`.${requestFile}`);
      const httpResponse = `HTTP/1.1 200 OK content-length: ${fileContent.length}

                            ${fileContent}`
      socket.write(httpResponse);
    });

    // 接続が閉じたら何をするか設定する
    socket.on('close', () => {
      console.log('connection closed');
    });
  })
  // ポートを指定していてサーバーを起動する
  .listen(PORT, '127.0.0.1');

console.log(`Server started on port ${PORT}`);

