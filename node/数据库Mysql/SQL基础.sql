-- 查询users所有数据
-- select * from users;

-- 查询username 和 password 对应的数据
-- select username, password from users;

-- 插入新数据到 users 表，username 值为 tony stark、password 值为  098123
-- insert into users (username, password) value ('tony stark', '098123');

--  把 users 表 id 为 3 的的用户密码更新为888888
-- update users set password = '888888' where id = 3;

-- 把 users 表 id 为 2 的用户密码和用户状态更新为admin123 和 1
-- update users set password = 'admin123', status = 1 where id = 2;

-- 删除 id 为 3 的用户
-- delete from users where id = 3; 
-- select * from users;


-- 查询 status = 1 的所有用户
-- select * from users where status = 1;

-- 查询 id >= 2 的所有用户
-- select * from users where id >= 2
 
-- 查询 username 不等于 'ls'
-- select * from users where username <> 'ls';
-- select * from users where username != 'ls';

-- 查询 status = 0 and id < 3 的用户
-- select * from users where status = 0 and id < 3;

-- 查询 status=1 或者 usersname='zs'
-- select * from users where status=1 or username='zs';

-- 对 users 表中的数据，按 status 字段进行升序排序
-- select * from users  order by status asc;

-- 对 users 表中的数据，按 status 字段进行降序排序
-- select * from users order by status desc;

-- 对 users 表中的数据，按 status 进行降序排序，在按照 username 进行升序排序
-- select * from users order by status desc, username asc;

-- 查询 users 表中 status 为 0 的总数据条目数
-- select count(*) from users where status = 0;

-- 查询 users 表中 status 为 0 的总数据条目数, 结果列别名为 tatal
-- select count(*) as total from users where status = 0;

-- 查询 users 表中 username, password 的数据，结果别名为 name,key
-- select username as name, password as ke from users;1



