const express = require('express');
const app = express();
// 中间件一
app.use(function(req, res, next) {
  console.log('经过中间件1')
  next();
})
// 中间件二
app.use(function(req, res, next) {
  console.log('经过中间件2');
  next();
})
// 路由
app.get('/', (req, res) => {
  res.send('User page');
})
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})