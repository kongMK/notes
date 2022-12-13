// 导入express
const express = require('express');
// 导入路由
const router = require('./router.js');
// 创建 web 服务
const app = express();
/* 注册路由 
  app.use() 注册全局中间件
  app.use('/api', router); 添加访问前缀，访问时要加上前缀 http://127.0.0.1/api/...
*/
app.use('/api', router);

// 启动服务
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
});