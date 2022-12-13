// 导入fs模块
const fs = require('fs');
// readFile 读取文件异步方法
fs.readFile(__dirname + '/二级目录/成绩.txt', 'utf-8', function(err, data) {
	if(err) return console.log('读取失败' + err.message);

	const arr = data.split(' '); // 将字符串分割成数组，在空格位置分割
	const newArr = [];
	arr.forEach( (item) =>{
		newArr.push(item.replace('=', ': ')); // 将arr数组每一项的 = 替换成 : 加到 newArr数组 
	})
	
	const newData = newArr.join('\r\n')
	// writeFile 写入文件异步方法 将整理好的数据写入一个新文件
	fs.writeFile(__dirname + '/二级目录/成绩ok.txt', newData, 'utf-8', function(err) {
		if(err) return console.log('写入失败' + err.message);
		console.log('写入成功');
	})
})

// 同步方法
// try {
// 	const data =  fs.readFileSync(__dirname + '/二级目录/成绩.txt', 'utf-8');

// 	const arr = data.split(' ');
// 	const newArr = [];
	
// 	arr.forEach(function(item) {
// 		newArr.push(item.replace('=', ': '));
// 	})

// 	fs.writeFileSync(__dirname + '/二级目录/成绩ok2.txt', newArr.join('\r\n'), 'utf-8')
// 	console.log('写入成功')
// } catch(err) {
// 	console.log(err.message)
// }