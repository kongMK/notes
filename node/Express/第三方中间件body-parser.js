const express = require('express');
// 导入body-parser
const parser = require('body-parser');
const app = express();

// 注册全局中间件
app.use(parser.urlencoded({extended: false}));

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log('Express rerver running at http://127.0.0.1');
})