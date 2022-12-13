## Express 
  * Express 是npm的一个第三方包，[中文官网](http://www.expressjs.com.cn/)
  * Express 是基于 **Node.js** 平台开发的，快速、开放、极简的**Web开发框架**
  * 与node.js内置**http**模块功能类似，专门用于创建**Web服务器**
  * Express 是封装了 **http** 模块的框架，可以快速开发**web服务器、api接口服务器**

## 安装
`npm install express -save`

## 路由
  * Express中，路由指的是**客户端的请求**与**服务器处理函数**之间的**映射关系** 
  * Express中，路由**请求的类型**、**请求的URL地址**、**处理函数**这三分部组成
  >`app.METHOD(PATH, HANDLER)`
  ```js
    // 匹配 GTE 请求，URL为 / 
    app.get('/', function(req, res) {
      res.send('Hello word!')
    })
    // 匹配 POST 请求，URL为 / 
    app.post('/', function(req, res) {
      res.send('Hello word!')
    })
  ```

## 中间件
  * Express的**中间件**本质上是个处理函数，中间件函数形参列表必须包含**next**参数  
  `app.get('/', function(req, res, next) {})`
  * next() 函数的作用
    >next() 是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个**中间件**或**路由**
  * 多个中间件之间是**共享**req, res。基于这样的特性，我们可以在上游的中间件中，统一为req 、res 对象添加自定义的属性和方法，供下游使用
  
  * # 注意
  > 中间件要在路由之前注册
  > 中间件处理完成需要调用**next()**把流转关系移交到下游
  > 在调用**next()**后，不要再其后面写额外的代码，避免代码逻辑混乱
  
  * # 分类
  > 1. 应用级别中间件
  >> 通过 **app.use()、app.get()、app.post()** 绑定到app实例上的中间件
  
  > 2. 路由级别中间件
  >> 绑定在 **express.Router()** 实例上的中间件
  
  > 3. 错误级别中间件
  >> * 作用：专门用来捕获项目中发生的异常和错误，防止项目异常崩溃
  >> * 格式：必须有四个形参，(err, req, res, next);
  >> * 必须注册在所有路由之后
  
  > 4. Express 内置中间件
  >> **express.static()** 快速托管静态资源。  
  >> `app.use('/file', express.static('./file'))`

  >> **express.json()** 解析JSON格式的请求体数据 ( **4.16.0+** 版本可用)  
  >> `app.use(express.json())`
  
  >> **express.urlencoded** 解析URL-encoded格式的请求体数据 ( **4.16.0+** 版本可用)  
  >> `app.use(express.urlencoded({extended: false}))`
  
  > 5. 第三方中间件 body-parser
  >> 安装  
  >> `npm install body-parser`
  >>```js
  >>  // 导入
  >>  const parser = require('body-parser');
  >>  // 注册全局中间件
  >>  app.use(parser.urlencoded({extended: false}));
  >>```

## 跨域  
  > 协议、域名、端口号有一项不同就是跨域  
    浏览器的**同源安全策略**默认会阻止网页跨域获取资源。

  > 解决方案
  > 1. CORS (主流)
    >> CORS (cross-Orign Resource sharing, 跨域资源共享) 由一系列**HTTP响应头**组成，这些HTTP响应决定浏览器是否阻止前端代码跨域获取资源  
    >> 只有支持 XMLHttpRequest Level2 的浏览器，才能正常访问开启了CORS的服务端接口。  
    只需要在服务端配置，客户端不需要额外配置。

  > 2. JSONP (只支持GET请求)
    >> 浏览器通过`<script>`的`src`属性, 请求服务器的数据，同时服务器返回一个函数的调用。
    >> * JSONP 不属于正真的ajax请求，因为它没有使用 **XMLHttpRequest** 对象。  
    >> * JSONP 只支持 GET 请求。


  > ## CORS 响应头部
  >> * CORS 响应头部: Access-Control-Allow-Origin  
  >> 如果指定了**Access-Control-Allow-Origin** 字段的值为通配符*, 表示允许任何域的请求  
  >> `res.setHeader('Acess-Control-Allow-Origin', '*');`

  >> * CORS 响应头部: Access-Control-Allow-Headers  
    默认情况下，cors 仅支持客户端发送9个请求头： 
    Accpet、Accpet-Language、Content-Language、DRP、Downlink、save-Data、Viewport-Width、Width、Conten-Type  
    Conten-Type的值仅限其中之一：text/plain、multipart/form-dat、application/x-www-form-urlencoded)  
  >> 客户端需要发送额外的请求头信息，需要在服务端，通过 **Access-Control-Allow-Headers** 对额外的请求头进行说明，否则请求失败：  
  `res.setHeader('Access-Control-Allow-Origin', 'Conten-Type, X-Custom-Header');`  

  >> * CORS 响应头部：Access-Control-Allow-Methods
      默认情况下，cors 仅支持客户端发起 GET、POST、HEAD 请求。
      在服务端，通过 **Access-Control-Allow-Methods** 指明实际请求的所许使用的HTTP方法
  >> ```js
  >>  // 只允许 GET、POST、DELETE、HEAD 请求方法
  >>  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, HEAD');
  >>  // 允许所有 HTTP 请求方法
  >>  res.setHeader('Access-Control-Allow-Methods', '*');
  >>  ```

  >## CORS 请求分类
  >> 客户端在请求 CORS 接口时，根据**请求方式**和**请求头**的不同，可以将CORS的请求分为两大类
  >> * 简单请求
  >> 1. 请求方式是： GET、POST、HEAD
  >> 2. HTTP 头部信息不超过以下的几种字段:  
  >>> Accpet、Accpet-Language、Content-Language、DRP、Downlink、save-Data、Viewport-Width、Width、Conten-Type  
  >>> Conten-Type: 值仅限其中之一：text/plain、multipart/form-dat、application/x-www-form-urlencoded)  

  >> * 预检请求  
       在浏览器与服务器正式通信之前，浏览器会发送OPTION请求进行预检，以获知服务器是否允许改实际请求。
  >>> 服务器响应预检请求(OPTION)后，才发送真正携带数据的请求
  >>> 1. 请求方式是： GET、POST、HEAD之外的请求 Method 类型
  >>> 2. 请求头中包含自定义头部字段
  >>> 3. 向服务器发送了 application/json 格式的数据


  >## JSONP 
  >> 如果项目配置了CORS, 必须配置在CORS中间件之前。  
     配置在cors之后的jsonp接口会被处理成cors接口
  >> ```js
  >> // 优先创建JSONP接口
  >> app.get('/api/jsonp', (req, res) => {});
  >> // 再配置CORS中间件
  >> app.use(cors());
  >> ```

  > ## 安装 cors 中间件  
  > `npm install cors -save`  
  > ```js
  > // 导入  
  > const cors = require('cors');
  > // 注册  
  > app.sue(cors());
  > ```

## nodemon
  * nodemon 监听项目的变动，自动重启项目，方便调试
  * 脚本被禁止执行可以用下面的方法
  > 1. 被禁止执行脚本, 用这个命令`set-ExecutionPolicy RemoteSigned` 更改**powershell**的脚本执行策略
  > 2. 删除nodemon包里**nodemon.ps1**也可以
  > 3. `npx nodemon 文件.js` 在执行的命令前加上`npx`
  > ```
  > // 安装命令
  > npm install nodemon -g 
  > // 使用方法
  > node 文件.js 命令 换成 nodemon 文件.js 
  > ```