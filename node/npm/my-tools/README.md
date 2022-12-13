## 安装
```
npm install my-tools
```

## 导入
```js
const tools = require('my-tools');
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = tools.dateFormat(new Date());
// 结果 2022-09-02 00:40:48
console.log(dtStr);
```

## 转义 HTML 中的特殊字符串
```js
// 转换的 HTML 字符串
const htmlStr = '<h1 title="abc"><span>&nbsp;</span></h1>';
// 调用 htmlEscape 进行转换
const str = tools.htmlEscape(htmlStr);
// 结果 &lt;h1 title=&quot;abc&quot;&gt;&lt;span&gt;&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原 HTML 的特殊字符
```js
// 要还原的字符串
const str2 = '&lt;h1 title=&quot;abc&quot;&gt;&lt;span&gt;&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'
// 调用 htmlUnEscape 进行转换
const htmlStr2 = tools.htmlUnEscape(str2);
// 结果 <h1 title="abc"><span>&nbsp;</span></h1>
console.log(htmlStr2)
```

## 开源协议
ISC