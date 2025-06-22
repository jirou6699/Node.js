const http = require('http');
const fs = require('fs');
const PORT = 4000;

http.createServer((request, response = {}) => {
  const path = request.url;
  console.log(`[request] ${path}`);

  const requestFile = path.endsWith('/') ? path + 'app/' + 'index.html' : path;
  if (!fs.existsSync(`.${requestFile}`)) {
    response.writeHead(404, { 'Content-Length': 0 });
    response.end();
    return;
  }
  const fileContent = fs.readFileSync(`.${requestFile}`);
  response.writeHead(200, { 'Content-Length': fileContent.length });
  response.end(fileContent);

}).listen(PORT, '127.0.0.1');
console.log(`Server started on port ${PORT}`);

