const express = require('express');
// 导入node内置模块 querystring 用于处理字符串
const qs = require('querystring'); 
const app = express();

// 注册全局中间件 解析表单数据
app.use((req, res, next) => {
  // 监听 req 的 data 事件, 获取客户端发送的数据,数据过大客户端会分批发送数据
  let str = '';
  req.on('data', (chunk) => {
    str += chunk;
  });
  // 监听 req 的 end 事件，data 事件接收完毕后触发
  req.on('end', () => {
    // 调用 qs.parse() 方法，将查询字符串解析为对象
    const body = qs.parse(str)
    // 将 body 挂载到 req.body 供下游访问
    req.body = body;
    next();
  });
})

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1:80');
})