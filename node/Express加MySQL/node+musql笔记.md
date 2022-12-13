在 nodejs 操作数据库, 需要安装 mysql 模块。  
mysql 模块是托管在npm的第三方模块，它提供了在Node.js项目中连接和操作MySQL数据库的能力。

# 安装  
`npm install mysql -save`
```js
// 导入
const mysql = require('mysql');
// 与数据建立连接，port：指定端口号，默认3306
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的ip
  user: 'root', // 登录数据库的账号
  password: 'admin123', // 登录数据库的密码
  database: 'my_db_01' // 指定要操作的数据库名字
})
```

## Web 开发模式
* 服务端渲染
> 服务器发送给客户端的html页面是在服务端通过字符串拼接，动态生成的。因此可客户端不需要使用Ajax这样的技术额外请求页面数据。

> 优点1：前端耗时少。因为服务器负责生成HTML内容，浏览器只需要直接渲染页面即可。客户端更省电
> 优点2：有利于SEO。因为服务端响应的是完整的HTML页面内容，所有爬虫更容易爬数据。

> 缺点1：占用服务端资源。请求较多的时候，会对服务器造成压力。  
> 缺点2：不利于前后端分离，开发效率低。

* 前后端分离
> 依赖**Ajax**技术的广泛应用。后端只负责提供**API接口**，前端使用**Ajax**调用接口

> 优点1：开发体验好。前端专注UI页面开发，后端专注api开发，且前端有更多的选择性。  
> 优点2：用户体验好。**Ajax**技术，可以轻松实现页面的局部刷新。  
> 优点3：减低服务器端压力

> 缺点: 不利与SEO。利用Vue，React等前端框架的SSR(server side render)技术能很好的解决SEO问题

## 身份认证
> 通过一定手段来完成对用户的确认。

* 不同开发模式下的身份认证  
> 服务端渲染，推荐使用**Session**认证机制  
> 前后端分离，推荐使用**JWT**认证机制

### Session
* HTTP 协议无状态性  
客户端发起的每一次请求都是独立的，多个请求之间是**没有直接关系**的，服务器**不会主动**保留每次HTTP请求的状态  

* 如何突破HTTP的无状态限制  
登录成功后，服务器给客户端分发一个**Cookie**。客户端每次请求带上 Cookie 到服务端进行身份认证。

* Sesstion认证机制需要配合 Cookie 才能实现。Cookie 默认不支持跨域访问，但涉及到前端跨域请求后端接口时，需要做很多额外的配置，才能实现跨域 Session 认证  

> Cookie 是存储在用户浏览器中一段不超过4KB的字符串。由一个**名称**(Name)、值(Value) 和其他几个用于控制Cookie 有效期、安全性、使用范围的可选属性组成  
> 不同域名的 Cookie 各自独立，每当客户端发起请求，会**自动**把当前域名所有**未过期**的 Cookie 通过**请求头**的方式一同发送到服务器。  
> Cookie 不具有安全性，不建议把重要的数据通过 Cookie 发送给浏览器

* Session 实现原理  
客户端提交账号、密码登录成功后，服务器将登录成功的用户信息存储在内存中，同时生成一个与之对应的 Cookie 字符串下发给浏览器  
浏览器自动将 Cookie 存储到当前域名下，当客户端再次发起请求时，通过请求头自动将当前域名下所有可用的 Cookie 发送给服务器  
服务器根据请求头携带的 Cookie信息到内存中寻找对应的用户信息，用户身份认证成功后，服务器针对当前用户响应特定的响应内容

* 安装  
`npm install express-sesion -save`  
```js
// 导入
const session = require('express-session');
// 注册
app.use(session({
  secret: 'keyboard cat', // 任意字符串
  resave: false, // 固定写法
  saveUninitialized: true // 固定写法
}))
```

### JWT(jsonwebtoken)
* JWT原理：客户端登录成功后，服务器将用户的信息加密生成一个**token**字符串下发给客户端  
浏览器将**token**存到LocaStorage 或 SessionStorage, 客户端再次发起请求时，通过请求头的 **Authorization** 字段，将token发送给服务器  
`Authorization: Bearer <token>`
服务器把 token 字段还原成用的信息对象，用户信息认证成功后，响应客户端特定的内容  

* JWT 通常由**Header**(头部)、**Payload**(有效荷载)、**Signature**(签名) 三部分组成，使用英文的点号分隔 `header.Payload.Signature`  
Payload保存了用户信息经过加密后的字符串，Header 和 Signature 是安全性相关的部分

* 安装
`npm install jsonwebtoken express-jwt -save`  
jsonwebtoken: 生成JWT字符串  
express-jwt: 将JWT字符串解析还原成JSON对象  
```js
// 导入 
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt')
```
