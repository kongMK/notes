const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer();

server.on('request',(req, res) => {
  const url = req.url;
  const method = req.method;
  let filePath = '';
  if(url === '/') {
    filePath = path.join(__dirname, '/index/index.html');
  } else {
    filePath = path.join(__dirname, '/index', url);
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      res.setHeader('Content-Type', 'text/html; charset=utf8');
      res.end('<h1>访问的页面不存在！</h1>');
      return;
    }
    res.end(data);
  });
})

server.listen(8080, () => {
  console.log('server running at http://127.0.0.1:8080');
})