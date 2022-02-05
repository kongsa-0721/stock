# Node.js

https://lurongtao.gitee.io/felixbooks-gp19-node.js/basics/01-Node.js%E5%9F%BA%E7%A1%80.html?q=

###### 使用node发起一个请求 

使用node 的http 模块 发起一个请求 https类似 不设计跨域

```js
const http = require('http');

http.get('http://cwtest.usth.pubs.net.cn/Rust/user/findAllUser?index=1', (res) => {
    let str = '';
    res.on('data', (obj) => {
        str += obj;
    })
    res.on('end', () => {
        console.log(str);
    })
})
```

###### 进程

console.log(process.argv);

###### 可以启动一个端口 sudo hostname

```js
const http = require('http');

// console.log(process.argv);
const server = http.createServer((request, respone) => {
    const url = request.url;
    respone.write(url);
    respone.end();
})
server.listen(8090, 'localhost', () => {
    console.log('8090端口启动了');
})
```

###### npm 清除缓存

npm cache clean --force

由于网络问题 第一次可能没安装上 有缓存 以后也出错 就可以清除一下缓存

###### 自己造轮子

去npm上面登录

npm adducer 

要切换源 查看源 npm config get registry

​				切换源 npm config set registry https://registry.taobao.org

发布 npm publish 

###### 版本号 

^  

~

null

*

###### npm脚本

放在script里面 

一个& 并行 不一定谁先执行

&& 等待第一个执行完毕 执行第二个

有一些命令可以简写 start npm start

脚本的变量 里面有config字段

console.log(process.env.npm_package_config_env)

必须访问到特定的变量

脚本内部 用$符号

###### nrm

npm install nrm -g

nrm ls

nrm use taboo

###### commonJS



###### nvm

● nvm install stable 安装最新稳定版 node

● nvm install <version> 安装指定版本，如：安装v4.4.0，nvm install v4.4.0

● nvm uninstall <version> 删除已安装的指定版本，语法与install类似

● nvm use <version> 切换使用指定的版本node

● nvm ls 列出所有安装的版本

● nvm alias default <version> 如： nvm alias default v11.1.0