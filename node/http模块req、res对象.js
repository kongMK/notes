const http = require('http');
// 实例服务器
const server = http.createServer();
// 实例 on 方法，绑定request事件
server.on('request', function(req, res) {
  // req 请求对象 客户端相关的数据和属性
  // req.url 客户端请求的url
  const url = req.url;
  // req.method 客户端的 method 请求类型
  const method = req.method;
  const str = `你请求的地址是 ${url}, 请求方式是${method}`;
  // res 响应对象 服务器相关的数据和属性
  // res.setHeader 设置响应头，防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // res.end 响应内容，并结束请求
  res.end(str)
});
// 启动服务器
server.listen(80, function() {
  console.log('server running at 127.0.0.1')
});