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

###### 修改打包的入口和出口

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
    
启动 npx webpack-dev-server
把打包之后的文件放到了内存里
```

 --inline --progress --config build/webpack.dev.conf.js

```js
生成html-webpack-plugin预览界面
npm install html-webpack-plugin -D
npm uninstall html-webpack-plugin -D
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template :'./src/index.html',
  filename :'index.html'
})

webpack 运行vue组件的加载器
npm i vue-loader -D
npm uninstall vue-loader
+ vue-loader@15.9.8

const VueLoaderPlugin = require('vue-loader/lib/plugin');
plugins:[htmlPlugin, new VueLoaderPlugin()]
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            {test: /\.css$/, use:['style-loader','css-loader']}
        ]
    }
css加载器
npm i style-loader css-loader -D
npm uninstall style-loader css-loader 
+ css-loader@6.2.0
+ style-loader@3.2.1
{test: /\.css$/, use['style-loader','css-loader']}

图片和字体文件
npm i url-loader file-loader -D
npm uninstall url-loader file-loader 
+ url-loader@4.1.1
+ file-loader@6.2.0
{test: /\.jpg|jpeg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use:'url-loader?limit=16940'}
```

























