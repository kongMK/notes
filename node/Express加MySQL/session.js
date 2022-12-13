const express = require('express');
const session = require('express-session');
const app = express();

// 注册 Session 中间件
app.use(session({
  secret: '$$$', // 任意字符串
  resave: false, // 固定写法
  saveUninitialized: true // 固定写法
}))

// 托管静态资源
app.use(express.static('./page'));

// 解析 POST 提交过来的数据
app.use(express.urlencoded({extended: false}));

// 登录的API接口
app.post('/api/login', (req, res) => {
  if(req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({status: 1, msg: '登陆失败'})
  }

  // 将登录成功的用户信息，保存到 Session 中
 req.session.user = req.body;
 // 保存登录状态
 req.session.islogin = true;

  res.send({status: 0, msg: '登录成功'})
})

// 获取用户昵称接口
app.get('/api/username', (req, res) => {
  // 查询 Session.islogin , 判断用户是否登录
  if(!req.session.islogin) {
    return res.send({status: 1, msg: 'fail'});
  }

  res.send({
    status: 0,
    msg: 'succeess',
    username: req.session.user.username
  })
})

// 退出登录
app.post('/api/logout', (req, res) =>  {
  // 清空 Session
  req.session.destroy();
  res.send({
    status: 0,
    msg: '退出登录成功'
  })
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1:80')
})