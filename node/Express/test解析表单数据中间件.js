const express = require('express');
// 导入 自定义中间件
const custmBodyParser = require('./模块化解析表单数据中间件.js');
const app = express();

// 注册全局中间件
app.use(custmBodyParser);

app.post('/user', (req, res) => {
  res.send(req.body);
})

app.listen(80, () => {
  console.log('Experss server running at http://127.0.0.1:80');
})