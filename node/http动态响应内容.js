const http = require('http');
// 创建服务器
const server = http.createServer();
// 实例 on 方法, request 事件
server.on('request', function(req, res) {
  const url = req.url;
  let content = '<h1>404 Not found!</h1>'

  if(url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if(url === '/about.html') {
    content = '<h1>关于</h1>'
  }
  // 设置请求头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // 响应内容并结束
  res.end(content);
})
// 启动服务器
server.listen(80, function() {
  console.log('server running at http://127.0.0.1');
})