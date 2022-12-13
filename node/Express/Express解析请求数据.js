const express = require('express');
const app = express();
// 解析json格式请求体数据中间件
app.use(express.json());
// 解析URL-encoded格式请求体数据中间件
app.use(express.urlencoded({extended: false}));

app.post('/user', (req, res) => {
  /* req.body 接受客户端发送过来的请求体数据 
     如果不配置解析表单数据的中间件，req.body 默认等于 undefined
  */
  console.log(req.body);
  res.send('ok')
})

app.post('/book', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})