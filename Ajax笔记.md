## URL
URL(UniformResourceLocator) **统一资源定位符**，用于识别互联网上的每一个资源的唯一存放位置。  
浏览器通过URL地址，才能正确的访问定位资源的存放位置。  

* URL组成  http://www.baidu.com/index.html
> 客户端和服务器之间的通信协议 **http**  
> 存有该资源的服务器名称 **www.baidu.com**
> 资源在服务器上的具体存放位置 **index.html**  

* XMLHttpRequest (简称 xhr)
> 浏览器提供的 js 成员，通过它可以请求服务器上的资源  
```js
// 创建 xhr 对象
const xhr = new XMLHttpRequest();
// 调用 open 函数,指定 请求方式 、 URL 地址
xhr.open('GET', 'http://www.liulongbin.top:/3006/api/getbooks');
// 调用 send 函数，发起 Ajax 请求
xhr.send();
// 监听 onreadystatechage 事件
xhr.onreadystatechage = function() {
  // 监听 xhr 对象的请求状态 readyState , 服务器响应状态 status
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
}
```
> xhr.readyState 属性用来表示 当前 Ajax 请求所处于的状态  
0   UNSET   ------        XMLHttpResquest 对象已经被创建，未调用 **open** 方法  
1   OPENED  ------        open()方法已调用  
2   HEADERS_RECEIVED ---- send()方法已调用，响应头已被接收    
3   LOADING     -----     数据接收中，**response** 属性以接收部分数据  
4   DONE        -----     Ajax请求完成，数据传输已经彻底 **完成** / **失败**  

* 发起带参数GET请求  
```js
// 创建 xhr 对象
const xhr = new XMLHttpRequest();
// 发起带参数GET请求
xhr.open('GET', 'http://www.liulongbing.top:3006/api/getbooks?id=2');
// 调用 send 函数，发起 Ajax 请求
xhr.send();
// 监听 onreadystatechage 事件
xhr.onreadystatechage = function() {
  // 监听 xhr 对象的请求状态 readyState , 服务器响应状态 status
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
}
```

* 发起 POST 请求  
```js
// 创建 xhr 对象
const xhr = new XMLHttpRequest();
// POST请求
xhr.open('POST', 'http://www.liulongbing.top:3006/api/addbook');
// 设置请求头 Content-Type 属性
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 调用 send 函数将数据以查询字符串的形式发送到服务器
xhr.send('bookname=水浒传&author=施耐庵&publisher=天津图书出版社');
// 监听 onreadystatechage 事件
xhr.onreadystatechage = function() {
  // 监听 xhr 对象的请求状态 readyState , 服务器响应状态 status
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
}
```
## XMLHttpRequest Level2  
旧版XMLHttpRequest,只支持文本数据的传输,无法用来读取和上传文件，传输和接收数据没有进度信息，只能提示有没有完成  

XMLHttpRequest Leve2,可以设置HTTP请求时限，可以使用 FormData 对象管理表单数据，可以上传文件，可以获取数据传输的进度信息  

* 设置请求时限
```js
// 请求超过等待时间，自动停止请求
xhr.tiemout = 3000;
// 回调 callback
xhr.ontiemout = function() {
  console.log('超时了')
}
```

* FormData 对象管理表单数据  
```js
// 实例 FormData 对象
const fd = new FormData();
// 为 FormData 添加表单项
fd.append('uname', 'zd');
fd.append('upwd', '123456');
// 实例 xhr 对象
cosnt xhr = new XMLHttpRequest();
xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook');
xhr.send(fd);
```
```js
const form = document.qeurySelector('#form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  // 自动填充表单数据到 FormData 对象
  const fd = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata');
  xhr.send(fd);
  xhr.onreadystatechange = function() {}
})
```

* 上传文件 上传进度  
```js
// 获取上传按钮
const btnUpload = document.querySelector('#btnUpload');

btnUpload.addEventListener('click', function() {
  let files = document.querySelector('#files').files;
  if(files.length <= 0) return alert('请选择文件');

  const fd = new FormData();
  // 将用户选择的图片添加到 FormData
  fd.append('avatar', files[0]);

  const xhr = new XMLHttpRequest();   
  // 监听文件上传进度 需要在send函数之前调用
  xhr.upload.onprogress = function(e) {
    // 判断 e.lengthComputable 是否具有可计算的长度
    if(e.lengthComputable) {
      /* e.loaded 已传输的字节
         e.total 需要传输的总字节
         (已传输的字节 / 需要传输的总字节) * 100 向上取整得到传输进度的百分比
      */
      let procentComplete = Math.ceil((e.loaded / e.total) * 100 );
      console.log(procentComplete); // 控制台打印进度
    }
  }
  // 上传完成
  xhr.upload.upload = function() {
    
  }

  xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar');
  xhr.send(fd);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let result = JSON.parse(xhr.responseText);

      if(result.status === 200) {
        document.querySelector('#img').src = `http://www.liulongbin.top:3006${result.url}`;
      } else {
        console.log('上传失败' + result.message);
      }
    }
  }
})
```



* URL编码与解码[博客]<https://blog.csdn.net/Lxd_0111/article/details/78028889>  
URL编码原则: 使用安全的字符去表示那些不安全的字符 使用英文符号表示非英文字符
浏览器会自动编码和解码  

```js
// 浏览器提供的API
encodeURI(需要编码的字符);

decodeURI(需要解码的字符);
```


* 请求方式
> get请求 常用于获取服务端资源  
> 例如：根据URL地址，从服务端获取 HTML 文件、css 文件、 js 文件、图片等数据资源

> post请求 常用于向服务器提交数据  
> 例如：登录时向服务器提交的登录信息、注册时像服务器提交的注册信息等 数据提交操作  

* 数据交换格式  
1. XML  
XML(EXtensible markup language) 可扩展标记语言。  
> XML 格式臃肿，和格式无关的代码过多，体积大，传输效率低。  
> 在JavaScript中解析比较麻烦  

2. JSON
JSON(JavaScript Object Notation) JavaScript对象表示法，JSON就是 javaScript 对象和数组的字符串表示法  
> JSON是一种轻量级的文本数据交换格式，比XML更小、更快、更易于解析，成为主流的数据交换格式
> * json作用: 在计算机和网络之间存储和传输数据  
> * json本质: 用字符串来表示 JavaScript 对象数据和数组数据  

> 1. 属性名必须使用双引号包裹  
> 2. 字符串类型的值必须使用双引号包裹  
> 3. JOSN不允许使用单引号表示字符串  
> 4. JOSN中不可以写注释  
> 5. JOSN最外层必须是对象或者数组  
> 6. 不能使用 undefined 或者函数作为 JSON 的值  

```js
// JSON 字符串转换 JS 对象(反序列化)
let json = JSON.parse('{"a": "hello", "b": "world"}');

// JS 对象转换 JSON 字符串(序列化)
let string = JSON.stringfiy({"a": "hello", "b": "world"});
```


## Ajax (Aysnchronous Javascript And XML) 异步的 JavaScript 和 XML
> 在网页中利用 **XMLHttpRequest** 对象和服务器进行数据交互，就是 Ajax


## jQuery 中的 Ajax  
浏览器提供的 XMLHttpRequest 用法较为复杂，所以 jQuery 对其进行封装，减低 Ajax 的使用难度
```js
/* $.get(url, [data], [callback]) []为可选参数
  url: string 请求的url地址
  data: object 请求资源期间携带的参数
  callback: function 请求成功时的回调函数
*/
// 获取数据
$.get()
// 提交数据
$.post()
// 综合
$.ajax({
  type: '',  // 请求的方式, 大小写不敏感
  url: '',  // 请求的 url 地址
  data: {}, // 请求携带的数据
  success: function(res) {} // 请求成功的回调
})
```
```js
// 监听表单提交事件的方式
$('#form1').submit(function(e) {
  e.preventDefault(); // 阻止表单默认行为
})

$('#form2').on('submit', function(e) {
  e.preventDefault(); // 阻止表单默认行为
})

// 快速获取表单的数据 没有name属性的不会获取到
$('#form').serialize();
```
```js
// jQuery 实现文件上传
$(function() {
  // 监听到Ajax请求时触发
  $(document).ajaxStart(function() {
    console.log('监听到请求');
  })
  // 监听到Ajax完成时触发
  $(document).ajaxStop(function() {
    console.log('监听到请求完成')
  })

  $('#btnUpload').on('click', function() {
    const files = $('#file1')[0].files;
    if(files.length <= 0) return alert('请选择文件!');

    const fd = new FormData();
    fd.append('avatar', files[0]);

    $.ajax({
      type: 'post',
      url: 'http://www.liulongbin.top:3006/api/upload/avatar',
      data: fd,
      contentType: false, // 不修改 请求头的 Content-Type 属性，使用 FromData 的默认值
      processData: false, // 不对 FormData 中的数据进行 url 编码
      success: (res) => console.log(res),
      xhr: function() {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function(e) {
          if(e.lengthComputable) {
            const procentComplete = Math.floor((e.loaded / e.total) * 100) + '%';
            $('.progress').css('width', procentComplete).children('span').html(procentComplete);
          }
        }
        return xhr;
      }
    })
  })
})
```
* jQuery JSONP
```html
<!-- jQuery 动态在页面的头部创建script标签发起请求, 请求完成移除 -->
<script>
    $(function() {
      // jQuery发起jsop请求会自动携带一个callback=jQuery***的参数，随机生成一个回调函数名称。
      $.ajax({
        url: 'http://www.liulongbin.top:3006/api/jsonp?name=zs&age=20',
        dataType: 'jsonp',
        jsonp: 'callback', // 发送到服务器的参数名, 默认 callback
        jsonpCallback: 'success', // 自定义回调函数名称
        success: function(res) {
          console.log(res) 
        }
      })
    })
  </script>
```
## 表单  
* 表单标签 
* 表单域  
* 表单按钮  
```js
/* <form></form> 用来采集数据 属性决定把采集的数据如何发送到服务器
  action  URL地址                               规定表单数据发送到何处,默认是当前页面的 URL 地址
  method  get、post                             规定使用什么方式把表单数据提交到 action URL，默认 get
  enctype application/x-www-form-urlencoeded    规定发送表单之前对其如何编码,默认 application/x-www-form-urlencoeded (编码所有字符)
          multipart/form-data (不对字符编码，在使用包含文件上传控件的表单时，必须使用该值)
          text/plain (空格转换为 + ,但不对特殊字符编码)
  target  _blank(在新窗口打开)                   规定在何处打开 action URL，默认_self
          _self(在相同的框架打开)
          _parent(在父框架打开)
          _top(在整个窗口打开)
          framename(在指定的框架打开) */
```
表单同步提交数据后，整个页面跳转到 action URL 所指向的页面，用户体验很差，页面之前的状态和数据会丢失  
解决方案：表单采集数据，使用 Ajax 提交数据  

## axios 
专注网络请求的库,相比原生 **XMLHttpRequest** 对象更加简单易用,相比 **jQuery** 更加轻量化。  

* 发起get请求
```js
const url = 'http://www.liulongbin.top:3006/api/get';
const paramsObj = {name: 'zs', age: 18};
axios.get(url, {params: paramsObj})
  .then(function(res) {
    const result = res.data; // 服务器响应的数据
    console.log(result);
  });
```
* 发起post请求
```js
const url = 'http://www.liulongbin.top:3006/api/post';
const dataObj = {location: '北京', address: '顺义'};
axios.post(url, {params: dataObj})
  .then(function(res) {
    const result = res.data;
    console.log(result)
  })
```
* axios API get
```js
const url = 'http://www.liulongbin.top:3006/api/get';
const paramsObj = {name: 'ls', age: 18};

axios({
  method: 'GET', // 请求方式
  url: url, // 请求地址
  params: paramsObj // 请求参数
}).then(function(res) {
  const result = res.data;
  console.log(result);
})
```
* axios API post
```js
const url = 'http://www.liulongbin.top:3006/api/post';
const dataObj = {name: 'jjj', age: 33, gender: 'nv'};

axios({
  method: 'POST',
  url: url,
  data: dataObj, // post请求通过data属性指定参数
}).then(function(res) {
  const result = res.data;
  console.log(result);
})
```
## 同源策略和跨域
* 同源
如果两个页面的 **协议**、**域名**、**端口**都相同, 则这两个页面具有相同的源。
http://www.test.com:80/index.html  
**http**: 协议  
**www.test.com**: 域名  
**80**: 端口, 默认80

* 同源策略(Same origin policy) 浏览器提供的一个安全功能  
MDN 官方: 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互,这是一个用于隔离潜在恶意文件的重要安全机制。

* 跨域
如果页面的 **协议**、**域名**、**端口**不一致，就是跨域。  
浏览器发起**跨域请求**,服务器响应后被浏览器的**同源策略**拦截

>* 跨域解决方案 JSONP(JSON with Padding)  
JSONP: 出现时间早,兼容**IE**, 但只支持 GET 请求  
1. 原理   
**script**标签**src**属性不受同源策略的影响  
通过**src**请求数据接口，并通过**函数调用**的形式,接收跨域接口响应回来的数据。
```html
 <script>
    // 定义函数
    function success(data) {
      console.log('获取数据\n', data);
    }
  </script>
  <!-- 通过src属性发起请求, 查询字符串告诉服务器返回一个回调函数 -->
 <script src="http://liulongbin.top:3006/api/jsonp?callback=success&name=ls&age=20"></script>
```
>* 跨域解决方案 CORS  
CORS: W3C标准，属于跨域Ajax请求的根本解决方案。支持get、post请求，但不兼容一些低版本浏览器

## 防抖、节流
* 防抖策略(debounce): 事件被触发后,延迟**n秒**后执行,如果在这**n秒**内事件再次被触发就重新计时。  
* 节流策略(throttle): 事件被触发后,事件在**一段时间内**无法被再次触发。可以减少事件的触发频率。

## 接口 api
使用 ajax 请求数据时，被请求的 url 地址就叫 **数据接口**  
每个接口都必须有 请求方式

## 接口文档
接口的说明文档，它是我们调用接口的依据。  
好的接口文档包含了对接口URL，参数以及输出内容的说明，我们参照接口文档就能知道接口的作用，以及如何调用。

* 接口文档的组成
1. 接口名称: 用来标识各个接口的简单说明  
2. 接口URL: 接口的调用地址  
3. 调用方式: 接口的调用方式，如 GET / POST  
4. 参数格式: 接口需要传递的参数，每个参数必须包含 **参数名称、参数类型、是否必填、参数说明** 这四项说明  
5. 响应格式: 接口的返回值的详细描述，一般包含 **数据名称、数据类型、说明** 3项内容  
6. 返回实例(可选): 通过对象的形式，例举服务器返回数据的结构  

## 模板引擎  
1. 减少字符串的拼接操作  
2. 使代码结构更加清晰  
3. 代码更加易于阅读和维护  

* art-template  
> 一个简约，超快的模板引擎  [中文官网]<http://aui.github.io/art-template/zh-cn/index.html>

1. 导入 art-template  
```html
<!-- 1、导入template-web.js后，window 全局会多一个函数，template('模板id'，需要渲染的数据对象) -->

<script src="./lib/template-web.js"></script>
```

2. 定义数据  
```js
// 2、定义数据
    let data2 = {
      name: 'zs',
      age: 20
    };
```

3. 定义模板  
```html
<!-- 3、定义模板，模板的html结构必须定义到 script 中,  -->

<script type="text/html" id="tpl-user">
  <h1>{{name}} ----------- {{age}}</h1>
</script>
```

4. 调用 template 函数  
```js 
// 4、调用 template 函数  
const htmlStr = template('tpl-user', data2);
```

5. 渲染 HTML 结构
```js
// 5、渲染 HTML 结构
$('#container').append(htmlStr);
```

* art-template 标准语法  
> art-template 提供了 {{}} 这种语法，在 {{}} 内可以进行变量输出、循环数组等操作  
```
{{value}}
{{obj.key}}
{{obj['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
```

* 原文输出  
如果要输入的value值中，包含了 HTML 标签结构，则需要使用 **原文输出** 语法，才能保证HTML标签被正常渲染  
`{{@ value}}` 

* 条件输出  
如果要实际条件输出，则可以在 {{}} 中使用 **if... else if... /if** 的方式进行输出。  
```
{{if value}} 按需输出的内容 {{/if}}
{{if value1}} 按需输出的内容 {{else if value2}} 按需输出的内容 {{/if}}
```

* 循环输出  
如果要实现循环输出，则可以在 {{}} 内使用 each 语法进行循环，当前循环的索引使用 **$idnex** 进行访问、循环项的值用 **$value** 进行访问  
```
{{each arr}}
  {{$index}} {{$value}}
{{/each}}
```

* 过滤器  
实际上是一个 function 处理函数  
将 value 作为参数传给filerName 进行处理
```template
{{value | filterName}}
```
```js
template.defaults.imports.filerName = function(value) {return 处理结果};
```

## 通信
* 通信：信息的传递与交换   
通信三要素 **主体**、**内容**、**方式**
* 通信协议(Communication Protocol): 通信的双方完成通信所必须遵守的的规则和约定   
客户端和服务器之间要实现**网页**的传输，通信双方必须遵守**网页内容的传输协议**  
**网页内容**又叫超文本，因此**网页内容的传输协议**又叫**超文本传输协议**(HyperText Transfer Protocol)简称**HTTP协议**
* HTTP协议  
1. http协议的交互模型  
http采用**请求/响应**的交互模型  

2. http请求消息  
客户端发起请求叫**HTTP请求**,客户端发送到服务器的信息叫做**HTTP请求消息(报文)**。  
http请求信息由**请求行(request line)**、**请求头(header)**、**空行**、**请求体**四部分组成。  
> * 请求行由**请求方式**、**URL**、**HTTP协议版本**三部分组成，用空格分隔。  

> * 请求头由多行**键值对**组成，用来描述**客户端的基本信息**  
 **User-Agent**说明当前是什么类型浏览器  
 **Content-Type**描述发送到服务器的数据格式  
 **Accept**描述客户端能够接收什么类型的数据  
 **Accept-Language**描述客户端期望收到哪种人类语言的文本内容  
 
> * 空行用于**分隔**请求头和请求体  

> * 请求体存放通过**POST**提交到服务器的数据，只有post请求有请求体  

3. http响应消息  
服务器响应给客户端的消息内容(响应报文)  
http响应消息由**状态行**、**响应头**、**空行**、**响应体**四部分组成  
> * 状态行由**HTTP协议版本**、**状态码**、**状态码描述**三部分组成，用空格分隔。  

> * 响应头由多行**键值对**组成，用来描述***服务器的基本消息**  

> * 空行用于**分隔**响应头部和响应体，告诉客户端响应头部到此结束  

> * 响应体存放由服务器响应的内容

4. http请求方法  
属于http协议的一部分，用于表明要对服务器的资源做什么操做  
 **GET**(查询)发送请求获取服务器资源，请求体不会包含请求数据，请求数据放在协议头中  
 **POST**(新增)向服务器提交资源，数据包含在请求体。  
 **PUT**(修改)向服务器提交资源，使用提交的资源替换掉服务器的资源。  
 **DELETE**(删除)请求服务器删除指定的资源  

5. http响应状态码(HTTP Status Code)  
属于http协议的一部分，用于标识响应的状态。  
响应状态码随着响应消息一起被发送到客户端，根据响应状态码可以知道HTTP请求是否成功。  
> * HTTP响应状态码的组成及分类  
状态码由**三个十进制数字**组成，第一个数定义了状态码的类型。  

1开头：信息，服务器收到请求，需要请求者继续进行操作。  

2开头：成功，操作被成功接收处理。  
200: OK,请求成功，常用于get和post请求。  
201: Created,已创建，请求成功并创建了新的资源，常用于post和put请求  

3开头：重定向，需要进一步操做以完成请求。  
301：Moved Permanently, 永久移动，请求的资源被永久移动到新的URL,放回信息包含新的URL。  
302：Found, 临时移动,与301类似，只是资源被临时移动。  
304：Not Modified, 未修改，所请求的资源未修改，服务器返回此状态码时，不会返回任何资源（响应消息不包含响应体）。 

4开头：客户端错误，请求包含语法错误或无法完成请求。  
400：Bad Request, 语义有误，当前请求无法被服务器理解 或者 请求参数有误  
401：Unauthorized, 当前请求需要用户验证。  
403：Forbidden, 服务器已经理解请求，但是拒绝执行它。  
404：Not Found, 服务器无法根据客户端的请求找到资源(网页)。  
408：Request Timeout, 请求超时。服务器等待客户端发送请求的时间过长。  

5开头：服务器错误，服务器再处理请求的过程发生了错误。  
500：Internal Server Error, 服务器内部错误，无法完成请求。  
501：Not Implemented, 服务器不支持该请求方式，无法完成请求。只有GET和HEAD是每个服务器都支持的
503：Service Unavailable, 由于超载或系统维护，服务器暂时无法处理客户端的请求。  