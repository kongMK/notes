# js基础 BOM+DOM
> 警示框：alert()  
 	输入框：prompt()  
	控制台打印日记：console.log()  
	打印返回的元素对象：console.dir();

* 阻止链接跳转  
```html
<a href='javaScript:;'></a>
<a href='javascript:void(0);'></a>
```
* 简单数据类型
> 1. string 
>	2. number 
>	3. boolean 
>	4. undefinde   
>	5. null 使用 `typeof` 检测返回 object

* 检测简单数据类型：`typeof 变量`

* 简单数据类型转换
```js
// 1. 字符串型
变量.toString()
String(变量)
+变量 // + 发生隐式装换
// 2. 数字型 ：
parseInt(变量)
parseFloat(变量)
Number(变量)

// 3. 布尔型：
Boolean(变量)
``` 

* 自加的区别，自减同理
```js
++变量 // 先自加后返回  
变量++ // 先返回后自加
```

* 数据运行
> 1. 小数在二进制转换时会出现误差
> 2. 比较操作符会自动转换数据类型为数字型
> 3. 逻辑中断会影响程序的运行结果

* 
```js
// 分支语句
if(表达式) {
	执行语句
} else {
	执行语句
}

// 三元表达式
表达式 ? 表达式1 : 表达式2;

switch(表达式) {//开关要求数据类型、值全等
	case value1:
		执行语句1；
		break:
	case value2:
		执行语句1；
		break;
	default:
		最后执行语句；
}

// 循环语句
for(初始变量; 条件表达式; 操作表达式) {
	循环体
}

while(条件表达式) {
	循环体
}

// 先执行一次循环体再判断条件循环
do {
	循环体
} while(条件表达式)

continue	// 退出本次循环
break // 终止循环
```

* 引用数据类型
```js
// 创建数组
var arr = new Array() 
var arr = []

数组名.length // 获取数组长度

// 检测是否为数组返回 Boolean
检测目标 instanceof Array; 
Array.isArray(检测目标);
```
* 函数
> 函数是封装了一段可以重复使用的代码块
```js 
// 声明函数 定义函数
function 函数名(形参1, 形参2...) {
	代码块
	return 返回值；
}

// 调用函数:
函数名(实参1, 实参...);

/*  
	没有return返回undefined
	函数可以相互调用
	函数内置有一个 arguments 对象(伪数组)存储了所有传递过来的实参
*/
```

* 作用域
> 代码在某个范围内有效

* 作用域链
> 内部函数访问外部函数的变量，采取链式进行查找

* 预解析
> 把**变量**(不赋值)和**函数**提升到当前作用域的最前面

* 对象
> 对象是一个具体的事物, 一组无序相关属性和方法的集合
```js
// 定义
var 对象 = {
	属性:值,
	属性:值,
	方法:function() {}
}

var 对象 = Object(); // 创建一个空对象
对象.属性 = 值; // 添加属性
对象.方法 = function() {}; // 添加方法

// 调用对象
对象.属性
对象['属性']
对象.方法()
```


* 构造函数
> 封装对象的函数, 用于生成对象。
```js
function 构造函数名(形参...) {//命名首字母大写
	this.属性 = value；
	this.方法 = function() {}
	//无需return
}

// 调用
new 构造函数名(实参...);
```

* 遍历对象
```js
for (变量 in 对象) {
	变量 // 对象的属性名
	对象[变量] // 对象的属性值
}
```
```js
// 数组的方法
数组名.push(元素, 元素2); // 在数组后面添加新元素,返回数组长度

数组名.unshift(元素, 元素2); // 在数组前添加新元素,返回数组长度：

数组名.pop(); // 删除数组的最后一个元素,返回删除的元素:

数组名.shift(); // 删除数组的第一个元素 返回删除的元素：

数组名.reverse(); // 翻转数组

数组名.sort(); // 数组排序

数组名.indexOf(元素，从索引号多少开始查找); // 从前往后查找元素，返回第一个满足条件的索引号 

数组名.lastIndexOf(元素，从索引号多少开始查找); // 从后往前查找元素，返回第一个满足条件的索引号

// 数组转换为字符串
数组名.toString(); 
数组名.join('分隔符');


// 根据位置返回字符
变量.charAt(索引);
变量[索引];

变量.charCOdeAt(索引); // 根据位置返回字符的ASCII码：

变量.concat(拼接内容); // 拼接字符串, 和+拼接一样

变量.substr(截取起始位置，截取几个字符); // 截取字符串:

变量.replace('被替换的字符','替换的字符'); // 替换字符

变量.split('分隔符'); // 字符串转换数组

```


* 栈/堆  
> 简单数据类型在**栈**开辟一个空间存放。  
> 复杂数据类型在**栈**的内存空间存放地址(十六进制)，然后地址指向堆的数据

## DOM
* DOM 元素获取
```js
// 没有兼容问题
// 获取元素对象的集合,以伪数组形式存储
document.getElementsByTagName('标签');

// 获取父元素里的指定元素
父元素.getElementsByTagName('标签'); 

// 获取指定的id元素
document.getElementById('id');

// 兼容问题
document.getElementsByClassName('classname');

// H5新增 
document.querySelector('选择器');
document.querySelectorAll('选择器');

doucument.body; // 获取body元素
document.docmentElenment; // 获取html元素
```
* 文本
```js
// 修改元素的文本：
元素.innerText = 操作 //不识别html标签 不保留空格和换行
元素.innerHTML = 操作 //识别html标签 保留空格和换行

// 修改元素样式:
元素.style.属性 = 值;

// 修改元素的类名
元素.className = 值

```

* 事件
```js
// 鼠标事件
事件源.onclick = 操作; // 鼠标点击
事件源.onmouseover = 操作 // 鼠标经过
事件源.onmouseout = 操作 // 鼠标离开

事件源.onmosemove = 操作 // 鼠标移动
事件源.onmouseup = 操作 // 鼠标弹起
事件源.onmousedown = 操作 // 鼠标按下

事件源.onmouseenter = 操作 // 鼠标移入
事件源.onmouseleave = 操作 // 鼠标移出

// 焦点事件
事件源.onfocus = 操作 // 获得焦点
事件源.onblur = 操作 // 失去焦点
/* 
	onblur onfocus onmouseenter onmouseleave 没有事件流
	不会触发事件传递
 */

右键菜单：contextmenu //配合阻止默认行为使用

选中文字：selectstart //配合阻止默认行为使用

// 键盘事件
事件源.onkeydown = 操作 // 按键按下触发, 识别功能键但不识别大小写
事件源.onkeypress = 操作 // 按键按下触发, 不识别功能键但识别大小写
事件源.onkeyup = 操作 // 按键弹起触发, 识别功能键但不识别大小写
```
* 元素属性
```js
// 获取元素的属性值:
元素.属性

// 获取自定义属性值	
元素.getAttribute('属性');
// 修改自定义属性：
元素.setAttribute('属性',值);
// 移除属性:
元素.removeAttribute('属性');

/*
	H5规定自定义属性以 data- 开头
	dataset一个存放所有以data开头自定义属性的集合
*/
元素.dataset.属性  // 获取data开头的属性, 有兼容问题
元素.dataset['属性'] // 获取data开头的属性, 有兼容问题
```

* 元素节点
```js
// nodeType 节点类型
1 元素节点
2 属性节点
3 文本节点 

// 获取父节点
子.parentNode;

// 获取子节点
父.childNodes // 获取所有子节点

父.firstChild // 获取第一个子节点
父.lastChild // 获取最后一个字节点

父.children //  获取所有子元素节点,非W3c标准但所有浏览器对支持这属性
父.firstElementChild // 获取第一个子元素节点 
父.lastElementChild // 获取最后一个子元素节点 

// 兄弟节点
node.nextSibling // 获取下一个兄弟节点
node.previousSibling// 获取上一个兄弟节点

node.nextElementsibling // 获取下一个兄弟元素节点
node.previousElementsibling // 获取上一个兄弟元素节点

// 创建节点
document.createElement('标签')
document.write(标签) // 文档流执行完毕它会导致页面重绘
inner HTML采取数组形式拼接 创建大量元素时效率比createElement高一点点

// 添加节点
父.appendChild(子节点); // 在后面插入元素
父.insertBefore(子节点, 指定元素); // 在指定元素前面插入元素

// 删除节点
父.removeChild(子节点)

// 克隆节点
父.cloneNode(); // 括号为空或false为浅拷贝
```
* 事件绑定与移除
``` js
// 高级事件
// option 参数 true：捕获阶段 false：冒泡阶段
元素.addEventListener('事件类型',事件函数(event){},option); 

// 删除事件
元素.事件类 = null; // 传统的删除事件在函数里移除
// addEventListener 是匿名函数无法进行移除
元素.removeEventListener('事件类型',函数名); // 高级事件函数的移除
```

* 事件委托
> 原理不是给每个子节点单独设置事件监听器, 而是把事件监听器设置在父节点上  
	利用事件冒泡影响设置的每一个子节点

* 事件对象
```js
// 鼠标事件对象：
event.stopPropagation() // 阻止冒泡
event.preventDefault() // 阻止默认行为

event.target // 返回触发事件的元素

event.clientX // 返回鼠标在可视区的X坐标
event.clientY

event.pageX // 返回鼠标在页面文档的X坐标
event.pageY

event.screenX // 返回鼠标在屏幕的X坐标
event.screenY

// 键盘事件对象：
event.key // 得到相应的键
event.keyCode // 得到相应健的ASCII码值, 已经被逐渐淘汰使用
```

## BOM(window可以省略不写)
```js
// 页面加载
window.onload =  // 页面加载事件 文档全部加载完成再执行 只执行最后加载的
window.addEventListener('load', 函数) //可加载多个
document.addEventLestener('DOMContentLoaded', 函数) //DOM加载完毕执行 速度会快一些

// 窗口事件:
window.innerWidth // 获得窗口宽度
window.innerHeight // 获得窗口高度
// 窗口大小发生变化时
window.onresize = 函数;
window.addEventListener('resize',函数)


// 定时器
window.setTimeout(函数/名, 选填延迟毫秒) // 执行一次
window.setInterval(函数/名, 选填延迟毫秒) // 重复执行

window.clearTimeout(定时器名); // 停止定时器
window.clearInterval(定时器名); // 停止定时器  
```

* location对象
``` js
location.href // 获取URL
location.host // 返回域名
location.port // 返回端口
location.pathname // 返回路径
location.search // 返回参数
location.hash // 返回片段 #后面的内容

location.assign() // 重定向页面 记录历史 
location.replace() // 替换当前页面 不记录历史
location.reload() // 重新加载页面 刷新
```

* history对象：
```js
back() // 后退功能
forward() // 前进功能
go(n) // 参数是正数前进 n 个页面, 负数后退 n 个页面
```

* 立即执行函数两种写法  
```js
(function(形参){})(参数);
(function(形参){}(参数));
```

* window属性
```js
// offset 偏移量,只读属性
元素.offsetParent // 返回带有定位的父级元素, 所有父级元素都没定位返回body
元素.offsetTop // 返回与带有定位父元素的上偏移量
元素.offsetLeft // 返回与带有定位父元素的左偏移量
元素.offsetWidth // 返回自身的宽 含边框
元素.offsetHeight // 返回自身的高 含边框

// client 可视区,只读属性
元素.clientTop // 返回上边框大小
元素.clientLeft // 放回左边框大小
元素.clientWidth // 返回自身的宽 不含边框
元素.clientHeight // 返回自身的高 不含边框

// scroll 滚动
元素.scrollTop // 返回被卷去的上侧距离
元素.scrollLeft // 返回被卷去的左侧距离
元素.scrollWidth // 返回自身实际宽
元素.scrollHeight // 返回自身实际高

window.pageYOffset // 页面被卷去的上侧距离
window.pageXOffest // 页面被卷去的左侧距离
```