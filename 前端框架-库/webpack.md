# webpack

全局的安装/卸载webpack

```shell
npm install webpack webpack-cli --global
npm uninstall webpack webpack-cli --global
```

如果需要打包一个文件夹 这个文件夹内需要有一个src文件夹 然后src内有index.js

```shell
npx webpack 
去网上找这个webpack 但不下载到本地 适合只使用一次的包 否则要下载 然后再卸载 很麻烦
打包出来一个dist文件夹
```

初始化一个ts+webpack

```js
yarn add webpack webpack-cli html-webpack-plugin
yarn add typescript ts-loader 
tsc --init 初始化一个 tsconfig.json文件 在里面配置一些ts的设置
配置一下webpack 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //输入路径文件 入口
  entry: "./src/index.ts",
  //出口的配置
  output: {
    //文件名字 路径
    filename: "tab.js",
    path: path.resolve(__dirname, "./dist"),
    //打包的每一次都清除之前的缓存
    // clean: true,
  },
  //打包的模式 production development none
  mode: "development",
  //源代码映射
  devtool: "inline-source-map",
  //插件 这是一个数组
  plugins: [
    new HtmlWebpackPlugin({
      //以...为模版
      template: "index.html",
      //文件名字
      filename: "ppx.html",
      //js文件的位置  head body
      inject: "body",
    }),
  ],
  //自动解析文件的拓展
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  //module 使用对应的loader
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        //排除这个文件夹
        exclude: /node_modules/,
      },
    ],
  },
};

```

#### 在项目中安装和配置webpack

```shell
npm install webpack webpack-cli -D
```

在根目录下，创建名为webpack.config.js 的webpack配置文件

##### 在webpack 的配置文件中，初始化以下配置

```js
module.export = {
	mode : 'development'  //mode用来指定构建模式
}
```

- development 开发模式

- production 产品

在package.json 配置文件中的script节点下，新增dev脚本如下

```javascript
"scripts" :{
	"dev" : "webpack" //可以通过npm run 执行
}
```

###### 修改入口和出口（代码分离）

在webpack.config.js 中新增以下信息使用node 中的path 模块  获取绝对路径

```js
const path = require('path')

  entry: "./development/src/readmodule.js",
  output: {
    filename: "bundle.js",
    //输出文件的绝对路径
    path: path.resolve(__dirname, "./dist"),
    //每次更新完毕清理一下
    clean: true,
  },
    
如果有多个入口的话 entry需要改成键值对 
//这种方法 不能很好的进行代码分离 有可能造成代码重复
entry:{
  index:'./src/index.js',
  ppx:'./src/ppx.js'
}
output 也要做对应的修改
output:{
  filename:"[name].js"
}
//配置dependOn 
  entry: {
    index: {
      import: "./src/index.ts",
      dependOn: "shared",
    },
    login: {
      import: "./src/login.ts",
      dependOn: "shared",
    },
    shared: "loadsh",
  },xd
```

path是node内置的一个库

```js
path: path.resolve(__dirname, "./dist")
__dirname 是当前的webpack.config.js所在的绝对路径 
```

###### 这时我们需要安装插件来简化 html-webpacke-plugin

```js
npm i html-webpack-plugin -D
//引入插件 生产html的插件 这个是一个类或者构造函数 new一下
const HtmlWebpackPlugin = require("html-webpack-plugin");
  plugins: [
    new HtmlWebpackPlugin({
      //这里是配置插件自己的内容的地方 ({}) 在这个里面添加我们的配置
      template: "./development/src/app.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
    
    template 编译出来的html文件模版
    filename 文件的名字
    inject 脚本的位置 可以设置body head
```

###### 资源的映射

```js
  //资源映射  我们需要知道源文件的哪一行出现了错误
  devtool: "inline-source-map",
```

###### 热更新

```js
可以通过 --watch 来热更新 例如 npx webpack --watch 
这时 并没有起本地的端口 html文件是一个固定的路径 每次修改玩之后 都要刷新一下页面
推荐使用webpack-dev-server
npm i webpack-dev-server -D 
//新版本的并不会真的打出一个物理文件 只是在内存中而已 对应的html文件名 设置成index就好 直接就能打开了
    devServer: {
      //需要热更新的目录 就是打包之后的文件夹
      static: "./dist",
      // gzip压缩
      compress: true,
      //主机
      host: "localhost",
      //端口号
      port: 3777,
    },
      //以下是旧版的 需要加载插件 
加载webpack 自带的插件 HotModuleReplacementPlugin
    new webpack.HotModuleReplacementPlugin(),
启动 npx webpack-dev-server
把打包之后的文件放到了内存里
启动项目=>编译=>bundleServer=>HMRRuntime=>生成了代码
修改=>重新编译=>HMRServer=>HMRRuntime=>替换模块=>代码修改了
使用的是websocket


bundleServer 提供文件在浏览器的访问 开了个端口号
HMRRuntime 注入到浏览器 更新文件的变化
HMRServer 热更新的文件输入到运行时
```

###### 解析es6 与 ts

```ts
使用bable-loader 解析es6
使用ts-loader 解析ts ts根据tsconfig.json 的配置进行编译 不需要bable 如果是es6 没有使用ts的 需要bable
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        //排除这个文件夹
        exclude: /node_modules/,
      },
    ],
  },
    
如果没有使用 Babel，首选 TypeScript 自带编译器（配合 ts-loader 使用）；
如果项目中有 Babel，安装 @babel/preset-typescript，配合 tsc 做类型检查；
两种编译器不要混用。
```

###### 解析css less

```js
使用css-loader 解析css
style-loader 将样式通过style标签插入到body中
less-loader less=>css
yarn add css-loader style-loader 
yarn add less less-loader 

module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
    
最后使用style-loader 但是需要放在前面 loader 是链式调用的
less 
使用less-loader 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader","less-loader"],
      },
    ],
  },
  
```

###### 解析图片/字体

```js
file-loader 
yarn add file-loader 

  module: {
    rules: [
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: "file-loader",
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader",
      },
    ],
  },
也可以使用url-loader 可以对小图片 小字体 自动的进行base64 的转换
{
  test: /.(png|jpg|gif|jpeg)$/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10240,
        },
      },
    ],
},
        limit 单位 字节
 小于10k的话 自动进行base64的转换
```

loader

![image-20220704121630001](/Users/macbookpro/Library/Application Support/typora-user-images/image-20220704121630001.png)





plugins

![image-20220704121829010](/Users/macbookpro/Library/Application Support/typora-user-images/image-20220704121829010.png)















