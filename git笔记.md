# 版本控制软件(系统)
版本控制软件是一个记录文件变化，以便将来查阅特定版本修订情况的系统。  
操作简便、易于回溯、协作方便  

## 版本控制系统的分类  
1. **本地**版本控制系统  
特点：使用软件来记录文件的不同版本，提高了工作效率，减低手动维护版本的出错率。  
缺点：单机运行，不支持多人协作开发，版本数据库故障，所有历史更新记录会丢失。


2. **集中化**版本控制系统  
(代表SVN)联网运行，支持多人协作开发，但是性能不好、用户体验不好。  
特点：基于 服务器/客户端 的运行模式，服务器保存文件的所有更新记录，客户端只保存最新的文件版本。  
缺点：不支持离线提交版本更新，中心服务器崩溃后，所有人都无法正常工作，版本数据库故障后，所有历史更新记录会丢失。  

3. **分布式**版本控制系统  
(代表Git)联网运行，支持多人协作开发，但是性能优秀、用户体验好。  
特点：基于 服务器/客户端 的运行模式，服务器保存文件的所有更新记录，客户端保存服务器的完全备份。  
客户端断网后支持离线本地提交版本更新.  
服务器故障或损坏后，可使用任何一个客户端的备份进行恢复  

## Git
Git 是一个开源的分布式版本控制系统，目前最先进、最流行的版本控制系统。  

* 高性能、高可用性  
> 传统的版本控制系统是基于 差异比较 的版本控制，它们存储的是 一组基础文件和每个文件随时间逐步累计的差异。  
> Git是记录快照在原有文件版本的基础上重新生成一份新的文件，类似备份。为了效率，如果文件没有修改，Git不再重新存储该文件，而是只保留一个链接指向之前存储的文件。

> 在Git中绝大多数操作都是只需要访问本地文件和资源，一般不需要来自网络上其他计算机的信息。  
断网后依旧可以在本地对项目进行版本管理  
联网后，把本地修改的记录同步到云端服务器即可  

* Git 管理的项目拥有三个区域，分别是**工作区**、**暂存区**、**Git仓库**  

* Git 中的三种状态  
 **已修改**(modified): 表示修改了文件，但是修改结果还没放到**暂存区**  
 **已暂存**(staged):  表示对已修改文件的当前版本做了标记放入**暂存区**，使之包含在下次提交的列表中  
 **已提交**(committed): 表示文件已经安全的存放到本地的**Git仓库**

* [官网]<https://git-scm.com/downloads>

## 全局配置
1. 配置用户信息  
```powershell
git config --global user.name "用户名"
git config --global user.email "邮箱"
```
通过`--global`配置的信息会被写到用户的 C:/Users/用户名文件夹/.gitconfig 文件中。  
这是git的全局配置文件，配置一次即可永久生效。

```powershell
# 查看所有全局配置项
git config --list --global
# 查看指定的全局配置项
git config user.name "用户名"
git config user.email "邮箱"

# 在浏览器打开 git config 的命令帮助手册
git help config
# 在终端打开 git config 的命令快速参考
git config -h
```

# 获取仓库两种方式
1. 将一个尚未进行版本控制的本地目录转换为Git仓库  
2. 从其它服务器克隆一个已存在的Git仓库  
```powershell
<# 
  初始化仓库，git init 会创建一个 .git 的隐藏目录。
  这个目录是就是当前目录3的Git仓库，里面包含了初始的必要文件，这些文件是Git仓库的必要组成部分。
#>
git init
```

* 工作区中文件的4种状态  
1. 未被git管理类:
> 未跟踪(Untracked)：不被git所管理

2. 已被git管理类:
> 未修改(Unmodified): 工作区中文件的内容和**git仓库**中文件的内容一致。

> 已修改(Modified): 工作区中文件的内容和**git仓库**中文件的内容不一致。
  
> 已暂存(staged): 工作区中被修改的文件已被放到**暂存区**,准备将修改后的文件保存到**git仓库**。
```powershell
# 检查文件当前状态
git status

# 检查文件当前状态，已精简的方式显示文件的状态
git status --short # --short 可以简写为 -s

<# 
  跟踪新文件
  把已跟踪且修改的文件放到暂存区
  把有冲突的文件标记为已解决状态
#>
git add 文件名 # .表示全部

# 提交更新 -m 表示本次提交的描述信息
git commit -m "对提交描述"

<# 
  撤销对文件的修改，还原成Git仓库中所保存的版本。
  所有修改会丢失无法恢复，请谨慎操作！
#>
git checkout -- 文件名

# 回退暂存区中的文件
git reset HEAD 文件名

# 跳过暂存区直接提交到 Git仓库, 文件未被跟踪时不可用
git commit -a -m '描述'
```

* 移除文件  
```powershell
# 从工作区、git仓库中同时移除
git rm -f 文件名

# 从暂存区和git仓库中移除
git rm --cached 文件名
```

* 忽略文件  
我们一般都会有一些无需纳入Git管理的文件，也不希望它总是出现在未跟踪文件列表中。  
在这种情况下，我们可以创建一个.gitignore配置文件，列出要忽略的文件匹配模式。  
> .gitignore 格式规范   
> 1. 以`#`开头是注释
> 2. 以`/`结尾是目录
> 3. 以`/`开头防止递归
> 4. 以`!`开头表示取反
> 5. 可以使用**glob模式**进行文件和文件夹的匹配(glob是简化的正则表达式)

> * glob 模式  
> `*`匹配零个或者多个字符  
  `[0-9a-z]`匹配任意一个列在中括号里的字符  
  `?`匹配一个任意字符  
  `**`表示匹配任意中间目录
```.gitignore
# 忽略所有以 .a 结尾的文件
*.a

# 跟踪所有 lib.a, !表示取反 
!lib.a

# 忽略当前目录下的 TODO 文件
/TODO

# 忽略所有 build 目录及其文件
build/

# 忽略 doc/notes.txt, 但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/目录及其子目录下的所有 .pdf 文件
doc/**/*.pdf
```

* 提交历史  
```powershell
# 按时间倒序列出所有的提交历史
git log

# 展示最新的 n 条提交历史
git log -n

# 展示最新的 n 条提交历史, 一行展示一条历史
git log -n --pretty=oneline

# 展示最新的 n 条提交历史，一行展示一条历史，自定义输出格式
<#
  %h 提交的简写哈希值
  %an 作者名字
  %ar 作者修改日期
  %s 提交说明
  | 分隔符可任意更换
#>
git log -n --pretty=format:"%h | %an | %ar | %s"
```
 
* 版本回退
```powershell
# 查询提交历史
git log --pretty=oneline

# 根据提交时的 ID 回退到指定版本
git reset --hard <CommitID>

# 版本回退后使用 git log 命令是不会展示所有提交历史
git reflog --pretty=oneline # 展示所有历史

# 通过 git reflog 命令找到回退前的版本ID
git reset --hard <CommitID>
```

## 开源（开放源代码 Open source code）
代码是公开，任何人都可以查看、修改、使用。  

* 开源许可协议(Open Source License)  
> 开源并不是意味完全没有限制，为了限制使用者的使用范围和保护作者的权力，每个开源项目都应该遵守**开源许可协议**。

* 常见的5中开源许可协议  
> 1. BSD(Berkeley Software Distribution)

> 2. Apache Licence 2.0

> 3. **GPL**(GNU General Public License)
> 具有传染性的一种开源协议，不允许修改后和衍生的代码作为闭源的商业软件发布和销售  
  最著名的软件项目：Linux

> 4. LGPL(GNU Lesser General Public License)

> 5. **MIT**(Massachusetts Institute of Technology,MIT)
> 是目前限制最少的协议，唯一条件：在修改后的代码或发行包中，必须包含原作者的许可信息  
  软件项目: jQuery、Node.js

* 开源项目托管平台用于免费存放开源项目代码的网站。  
> 目前世界上较出名的开源项目托管平台  
> 1. Github(全球最牛的开源项目托管平台)
> 2. gitlab(代码私有性支持较好，因此企业用户较多)
> 3. gitee(码云，国产的开源项目托管平台)

* Github 访问远程仓库的两种方式  
> 1. HTTPS: 零配置, 但是每次访问仓库时，需要验证身份。
> 2. SSH: 需要进行额外的配置。但是配置成功后不需要每次访问仓库都要验证身份。

HTTPS
```powershell
# github 远程仓库进行关联
git remote add origin https://github.com/kongMK/proto.git

# -M 移动/重命名分支，即使目标存在
git branch -M main

<# 
  push 本地仓库到远程仓库
  第一次push需要填写完整的命令。
  后面可以使用 git push 命令同步远程仓库
#>
git push -u origin main
```

SSH key  
实现本地仓库和Github之间免登录加密数据传输
> * SSH key 由两部分组成
> 1. id_rsa 私钥文件，存放于客户端
> 2. id_rsa.pub 公钥文件，需要配置到Github

> * 生成SSH key  
> id_rsa 和 id_rsa.pub 存放在 C:\Users\用户名文件\\.ssh目录  
```powershell
# 生成SSH key
ssh-keygen -t rsa -b 4096 -C "github邮箱"
```

> * 配置SSH key
> 复制生成的 id_rsa.pub 文件的内容  
  粘贴到Github头像 -> Settings -> SSH and GPK Keys -> New SSH Key -> key
```powershell
# 验证 github 的 SSH key 配置是否成功
ssh -T git@github.com
```

* SSH 同步远程仓库
```powershell
# 与 github 远程仓库关联
git remote add origin git@github.com:kongMK/proto_ssh.git
# -M 移动/重命名分支，即使目标存在
git branch -M main
# 同步本地仓库到远程仓库
git push -u origin main
```

* 克隆远程仓库到本地
```powershell
# 克隆远程仓库到本地
git clone 远程仓库的地址
```

* 分支(branch)  
> 分支就像平行宇宙，分支与分支之间互不干扰。  
  在多人协同开发时提高协同开发的体验，建议每个开发者都基于分支进行功能的开发。  

> * 主分支(master)
> 初始化本地 Git 仓库时，git会自动创建一个名字叫 master 的分支。  
  主分支主要用来保存和记录整个项目已完成的功能代码，因此不允许程序员直接在主分支上直接修改代码。

> * 功能分支 
> 功能分支值得是专门用来开发新功能的分支，他是从 master 临时分叉出来的。  
  新功能开发并测试完成后，最终需要合并到 master 主分支上。

```powershell
# 列出分支列表
git branch # git branch --list; --list 可以简写为 -l

# 基于当前的分支创建分支，新分支的代码和当前的代码一样
git branch 分支名

# 切换分支
git checkout 分支名

# 创建并切换到新分支
git checkout -b 分支名
```

* 分支合并
```powershell
# 如果把 C 分支合并到 A 分支, 需要先切换到 A 分支再进行合并
git checkout A 
git merge C
```
* 合并文件时发生冲突
```powershell
# 我们需要打开冲突的文件手动解决, 最后执行 git add '文件' 命令告诉 git冲突已解决
git add . # 冲突已解决
git commit -m '描述' # 提交
```

* 删除分支
```powershell
# 删除本地的分支, 不可以删除当前所在分支
git branch -d 分支名
```

* 远程分支操作
```powershell
# -u 表示把本地分支和远程分支进行关联
# 只有第一次推送的时候需要带 -u 参数, 后面同步仓库可以使用 git push 命令 
git push -u 远程仓库的别名 本地分支名:远程分支名

# 如果你希望远程分支名称和本地分支名称保存一致，可以简写命令
# 远程仓库别名 origin
git push -u 远程仓库的别名 分支名

# 查看远程仓库的分支列表 远程仓库名默认 origin
git remote show 远程仓库的名称
```

