# 数据库(database)
> 用来组织、存储和管理数据的仓库

市面上常见的数据库
1. MySQL
2. Oracle
3. SQL Server
4. Mongodb
* MySQL、Oracle、SQL Server 属于**传统型数据库**(又叫 __关系型数据库__ 或者 __SQL数据库__)  
* Mongodb 属于**新型数据库**(又叫 ___非关系型数据库__ 或者 __NoSQL数据库__)  

## 传统型数据库的数据组织结构
数据组织结构由**数据库(database)**、**数据表(table)**、**数据行(row)**、**字段(field)**这四大部分组成。

## SQL语言  
SQL(structued Query language) 结构化查询语言，专门用来访问和处理数据库的编程语言。
1. SQL 是一门数据库编程语言  
2. 使用SQL语言编写的代码，叫SQL语句  
3. SQL语言只能在**关系型数据库使用**  

### 查询语句
* select 查询数据
```sql
-- 从 FROM 指定的【表中】，查询出所有数据。* 表示【所有列】
select * from 表名

-- 从 FROM 指定的【表中】，查询出指定列名称（字段）的数据
select 列名称 from 表名
```

* insert into 插入数据
```sql
-- 向表插入新的数据行，列和值一一对应
insert into 表名 (key1, key2, key3...) value (value1, value2,value3...)
```

* update 更新数据
```sql
-- 把 users 表 id 为 7 的的用户密码更新为888888
update users set password = '888888' where id = 7;

-- 把 users 表 id 为 2 的用户密码和用户状态更新为admin123 和 1
update users set password = 'admin123', status = 1 where id = 2;
```

* delete 删除数据
```sql
-- 删除 id 为 4 的用户
delete from users where id = 4;
```

### 查询子句
>运算符 
>> =(等于) <>、!=(不等于) >(大于) <(小于) >=(大于等于) <=(小于等于) BETWEEN(在某个范围) LIKE(搜索某种模式)  
>> and(同时满足多个条件) or(满足任意一个条件)

* where子句 限定选择的标准 
``` sql
-- 查询 status = 1 的所有用户
select * from users where status = 1;

-- 查询 status = 0 and id < 3 的用户
select * from users where status = 0 and id < 3;
```

* order by子句 对结果集进行排序，默认升序
```sql
-- 对 users 表中的数据，按 status 字段进行升序排序
select * from users order by status asc;

-- 对 users 表中的数据，按 status 字段进行降序排序
select * from users order by status desc;

-- 对 users 表中的数据，按 status 进行降序排序，在按照 username 进行升序排序
select * from users order by status asc, username desc;
```

* count(*) 统计查询结果的总条目数
```sql
-- 查询 users 表中 status 为 0 的总数据条目数
select count(*) from users where status = 0;
```

* as 位列设置别名
```sql
-- 查询 users 表中 status 为 0 的总数据条目数, 结果列别名为 tatal
select count(*) as total from users where status = 0;

-- 查询 users 表中 username, password 的数据，结果别名为 name,k
select username as name, password as k from users;
```