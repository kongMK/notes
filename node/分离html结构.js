const fs = require('fs');
const path = require('path');
/* 定义正则匹配 <style></style> 和 <script></script> 里的内容
  \s 表示匹配空白字符 
  \S 表示匹配非空白字符 
  * 表示匹配任意次数
*/
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function(err, data) {

  if(err) return console.log('读取失败', err.message);

  resolveCss(data);
  resolveJs(data);
  resolveHtml(data);
});

// 提取css
function resolveCss(data) {
  // 用正则提取内容
  const r1 = regStyle.exec(data)
  const css = r1[0].replace('<style>', '').replace('</style>', '');
  // 写入文件
  fs.writeFile(path.join(__dirname, '/index/index.css'), css, 'utf8', err => {
    if(err) return console.log('写入css失败:' + err.message);
    console.log('写入css成功')
  })
}

// 提取js
function resolveJs(data) {
  // 用正则提取内容
  const r1 = regScript.exec(data);
  const js = r1[0].replace('<script>', '').replace('</script>', '');
 // 写入文件
 fs.writeFile(path.join(__dirname, '/index/index.js'), js, 'utf-8', err => {
  if(err) return console.log('写入js失败' + err.message);
  console.log('写入js成功');
 }) 
}

// 提取html
function resolveHtml(data) {
  // 用正则替换内容
  const html = data.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>');
  // 写入文件
  fs.writeFile(path.join(__dirname, '/index/index.html'), html, 'utf-8', err => {
    if(err) return console.log('写入html失败', err.message);
    console.log('写入html成功');
  })
}