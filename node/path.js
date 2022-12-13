const fs = require('fs');
const path = require('path');
// path.join() 拼接路径
const filePath = path.join(__dirname, './二级目录/成绩ok.txt');
console.log(filePath)

// path.basename(path[,ext]) 获取文件名
// const fileNmae = path.basename(filePath, '.txt');
// console.log('文件名' + fileName);

// path.extname(path) 获取文件扩展名
const fileExtName = path.extname(filePath);
console.log('文件扩展名' + fileExtName);
