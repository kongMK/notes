// 导入express
const express = require('express');
// 创建 web 服务
const app = express();
// 挂载路由
app.get('/', (req, res) => {
  res.send('Hello Word!');
})

app.post('/', (req, res) => {
  res.send('Post request')
})
// 启动服务
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
});