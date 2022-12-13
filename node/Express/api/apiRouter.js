const express = require('express');

const router = express.Router();
// 挂载路由
// GET
router.get('/get', (req, res) => {
  // req.query 获取客户端发送的查询字符串数据
  const query = req.query;
  // res.send() 响应处理的结果
  res.send({
    status: 0, // 0: 成功，1：失败
    msg: 'GET 请求成功', // 进一步说明
    data: query // 响应给客户端的数据
  })
});

// POST 
router.post('/post', (req, res) => {
  // req.body 获取客户端发送 url-encoded格式的请求体
  const body = req.body;
  // res.send() 响应处理的结果
  res.send({
    status: 0,
    msg: 'POST 请求成功',
    data: body
  })
});

// DELETE
router.delete('/delete', (req, res) => {
  const body = req.body;
  res.send({
    status: 0,
    msg: 'DELETE 请求成功',
    data: body
  })
})

// 导出路由
module.exports = router;