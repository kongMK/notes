const express = require('express');
// 导入路由
const router = require('./apiRouter');
// 导入 cors
const cors = require('cors');
const app = express();
// 配置解析表单数据中间件
app.use(express.urlencoded({extended: false}));

// 配置JSONP接口, 必须配置在 CORS 之前
app.get('/api/jsonp', (req, res) => {
  // 获取客户端发送到服务端的回调函数的名字
  const funcName = req.query.callback;
  // 定义要发送给客户端的数据
  const data = {name: 'zs', age: 18};
  // 把上面获取到的数据拼接成字符串
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;
  // 响应
  res.send(scriptStr);
})

// 注册 CORS
app.use(cors());

// 注册路由
app.use('/api', router)

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1:80')
});