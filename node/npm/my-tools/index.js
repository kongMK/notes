// 包的入口文件
const date = require('./src/dateFormat.js');
const escape = require('./src/htmlEscape.js');
// 导出
module.exports = {
 ...date,
 ...escape
}