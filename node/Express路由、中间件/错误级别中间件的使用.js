const express = require('express');
const app = express();
// 定义路由
app.get('/', (req, res) => {
  throw new Error('服务器内部发生错误');
  res.send('Home page')
})
// 定义错误级别中间件，捕获项目的错误，防止项目崩溃
app.use((err, req, res, next) => {
  console.log('Error:' + err.message);
  res.send('Error:' + err.message);
})
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})