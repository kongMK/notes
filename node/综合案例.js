// 导入需要的模块
const fs = require('fs');
const path = require('path');
const http = require('http');
// 创建服务器
const server = http.createServer();
// 实例 on 方法，绑定 request 事件
server.on('request', (req, res) => {
  const url = req.url;
  // const filePath = path.join(__dirname, url);
  let filePath = '';
  if(url === '/') {
    filePath = path.join(__dirname, './index/index.html');
  } else {
    filePath = path.join(__dirname, './index', url);
  }
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err) return res.end('<h1>404 Not fount.</h1>');

    res.end(data);
  })
});
// 启动服务器
server.listen(80, () => console.log('server running at 127.0.0.1'))