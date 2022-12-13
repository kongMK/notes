// 导入模块
const mysql = require('mysql');
// 建立联接
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库IP地址
  user: 'root', // 数据库账号
  password: 'admin123', // 登录数据库密码
  database: 'my_db_01' // 指定要操的数据库
})

// 检测模块是否正常工作
// db.query('select 1', (err, results) => {
  
//   if(err) return console.log(err.message);

//   console.log(results);
// })

// 查询 users 表中的所有数据
// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, results) => {

//   if(err) return console.log(err.message);

//   console.log(results);
// })

// 向 users 表新增一条数据，其中 username 值为 Spider-Man ,password 值为 pcc123
// const user =  {username: 'Spider-Man', password: 'pcc123'};
// // 待执行SQL语句, ? 表示占位符
// const sqlStr2 = 'insert into users (username, password) values (?, ?)';
// // 执行 SQL 语句, 使用数组为占位符指定具体的值, 只有一个值的时候可以省略数组
// db.query(sqlStr2, [user.username, user.password], (err, results) => {

//   if(err) return console.log(err.message);
//   // 如果执行的是 insert into 插入语句，则 reslut 是一个对象
//   // 通过 results 的 affectedRows 属性，来判断是否成功
//   if(results.affectedRows === 1) {
//     console.log('插入数据成功');
//   }
// })

// 插入数据便捷方式
/* const user = {username: 'Spider-Man2', password: 'pcc123'};
// 待执行SQL语句
const sqlStr2 = 'insert into users set  ?';
// 执行SQL语句
db.query(sqlStr2, user, (err, results) => {

  if(err) return console.log(err.message);
  
  if(results.affectedRows === 1) {
    console.log('插入数据成功');
  }
}) */

// 更新数据
/* const user = {id: 11, username: 'aaa', password: '000'};
// 待执行SQL语句
const sqlStr3 = 'update users set username=?, password=? where id=?';
// 执行SQL语句
db.query(sqlStr3, [user.username, user.password, user.id], (err, results) => {

  if(err) return console.log(err.message);
  // 如果执行的是 update  插入语句，则 reslut 是一个对象
  // 通过 results 的 affectedRows 属性，来判断是否成功
  if(results.affectedRows === 1) {
    console.log('更新数据成功');
  }
}) */

// 更新数据便捷方式
/* const user = {id: 11, username: 'bbb', password: '111'};
// 待执行SQL语句
const sqlStr3 = 'update users set ? where id=?';
// 执行SQL语句
db.query(sqlStr3, [user, user.id], (err, resluts) => {

  if(err) return console.log(err.message);

  if(resluts.affectedRows === 1) {
    console.log('更新成功');
  }
}) */

// 删除数据
// 待执行SQL语句
/* const sqlStr4 = 'delete from users where id=?';
// 执行SQL语句
db.query(sqlStr4, 10, (err, results) => {

  if(err) return console.log(err.message);

  if(results.affectedRows === 1) {
    console.log('删除数据成功')
  }
}) */

// 标记删除
const sqlStr4 = 'update users set status=? where id=?';
db.query(sqlStr4, [1, 8], (err, results) => {
  
  if(err) return console.log(err.message);

  if(results.affectedRows) {
    console.log('标记删除成功')
  }
})