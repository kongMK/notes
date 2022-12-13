// 路由模块

const express = require('express');
// 创建 router 对象
const router = express.Router();
// 挂载路由
router.get('/user/list', (req, res) => {
  res.send('get user list');
})

router.post('/user/add', (req, res) => {
  res.send('Add new user')
})
// 导出路由对象
module.exports = router;