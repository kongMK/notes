const http = require('http');
// 创建服务器实例
const server = http.createServer();
// 实例 on 方法，绑定事件处理函数 request
server.on('request', (req, res) => {
  /* 服务器接收到请求，就会触发request事件
     req:请求对象 存储与客户端相关的数据和属性 
     req.url 客户端请求的URL地址
     req.method 客户端的 method 请求类型 
  */
  console.log('Someone visit our web server');

})
// 启动服务器
server.listen(80, function() {
  console.log('server runing at http://127.0.0.1')
})