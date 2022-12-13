const express = require('express');
const app = express();
// 定义中间件
const mw = function(req, res, next) {
  const time = Date.now();
  req.startTime = time;
  // 把流转关系转交个下一个中间件或路由
  next();
}
// 注册全局中间件
app.use(mw)
// 局部中间件 app.get('/', mw1, mw2 (req, res) => {}); 或者 app.get('/', [mw1, mw2], (req, res) => {});

app.get('/', (req, res) => {
  res.send('Home page' + req.startTime);
})

app.post('/user', (req, res) => {
  res.send('User page'  + req.startTime)
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})