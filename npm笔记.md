## npm
  >**node_modules** 存放了所有安装的项目包，使用 __require__ 导入第三方包是从这个目录里查找  
  >**package-lock.json** 记录**node_modules**目录里每一个包的信息  

  >**package.json** 记录项目相关配置，项目用到哪些包、哪些包只在开发期间用到   
  >>* **devDependencies** 开发依赖包在开发时用到，上线之后不会用把这些包记录到这里  
  >>* **dependencies** 核心依赖包开发和上线都会用到的包记录到这里  

  >`npm install 包名 -g` 下包时设置`-gobal` / `-g`下载为**全局包**，全局包会安装到  
  **C:\\Users\\用户目录\\AppData\\Roaming\\npm\\node_modules**目录下

## package.json 文件属性
  > name: 包名  
  > version: 版本号  
  > main: 文件入口，默认index.js  
  > description: 功能描述  
  > keywords: 搜索关键字  
  > license: 开源许可协议，默认ISC, 其他协议可参考 <https://www.jianshu.com/p/86251523e898>

## 版本语义化规范
  > v1.2.3  
  > * 第一位数字代表包的大版本  
  > * 第二位数字代表包的功能版本  
  > * 第三位数字代表包的bug修复版本

  > * 版本号增长规则: 前面的版本号增长后面的版本号归零

## 包的规范
  >1. 包必须以**单独的目录**存在
  >2. 包的顶级目录下必须包含有**package.json**包管理配置文件
  >3. **package.json**文件必须包含**name**、**version**、**main**这三个属性，分别代表**包名**、**版本**、**入口**

## npm命令
  >快速生成package.json  项目开始时执行一次，后面 package.json 会自动记录项目用到的包。  
  >`npm init -y`  
  
  >下载包  
  >`npm install 包名 -save` 或者 `npm i 包名 -save`  
  
  >下载指定版本的包  
  >`npm install 包名@版本号`  
  
  >一键安装所有依赖包，自动读取**package.json**里的**dependecies**  
  >`npm install`  
  
  >安装指定的包并记录到**devDependencies**节点中  
  >`npm install 包名 --save-dev` 或者 `npm install 包名 -D`
  
  >卸载包  
  >`npm uninstall 包名`  


  >查看当前的下载源  [官方源](https://registry.npmjs.org/)  
  >`npm config get registry`

  >切换下载源到淘宝镜像  
  >`npm config set registry=https://registry.npm.taobao.org/`  
