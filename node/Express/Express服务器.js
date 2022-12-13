// 导入Express
const express =  require('express');
// 创建web服务器
const app = express();

// 监听客户端 GET、POST 请求
app.get('/user', (req, res) => {
  // res.send() 响应客户端一个 json 对象
  res.send({
    name: '张三',
    age: 18,
    gender: '男'
  })
});

app.post('/user', (req, res) => {
  // res.send() 响应客户端一个 字符串
  res.send('请求成功')
});

app.get('/', (req, res) => {
  // req.query 可以获取到客户端发送过来的参数，默认是一个空对象
  res.send(req.query);
});
// :id 是一个动态参数
app.get('/user/:id', (req, res) => {
  // req.params 是动态匹配到的 URL 参数, 默认是空对象
  // { id: '1'} { 键名：键值} 值由客户端的传递过来的
  console.log(req.params);
  res.send(req.params)
})
// 启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})