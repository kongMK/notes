// 模块是有模块作用域的，导入模块是访问不到模块内的变量和方法的
// 导入模块时会执行模块里的代码
const test = require('./test.js');
console.log(test);
// module 对象，存储了和当前模块相关的信息
console.log(module)