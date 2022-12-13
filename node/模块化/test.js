console.log('加载了test模块');

// 默认情况 module.exports 和 exports 指向同一个对象
/* module.exports.name = 'a';
exports.name = 'b';
console.log(module.exports , exports); */

module.exports.uername = '张三';
module.exports.sayHello = function() {
  console.log('hello!, my name is' + this.uername);
}