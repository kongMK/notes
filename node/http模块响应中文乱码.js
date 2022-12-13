const http = require('http');
// 创建服务器
const server = http.createServer();
// 实例 on 方法，绑定 request 事件
server.on('request', function(req, res) {
  const str = `你请求的地址是${req.url}, 请求方式是${req.method}`;
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf8');

  res.end(str)
})
// 启动服务器
server.listen(80, function() {
  console.log('server running at 127.0.0.1');
})