2// express.static() 托管静态资源
const express = require('express');
// 创建 web 服务器
const app = express();
/* 静态资源服务器 
   Express 在指定的静态资源目录查找文件，并对外提供资源的访问路径
   存放资源的目录不会出现在 URL，例如：http://127.0.0.1/index.html
   托管多个静态资源，查找资源会从上到下查找，找到就不再往下查找
*/
app.use(express.static('./index'));
app.use(express.static('./file'));
/* app.use('/file', express.static('./file'))
   挂载路径前缀，访问时要加上路径前缀 http://127.0.0.1/file/index.html
*/

// 启动服务
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
});