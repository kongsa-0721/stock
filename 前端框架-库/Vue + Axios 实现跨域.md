  Vue + Axios 实现跨域

<!--vue版本 2.9.6-->

#### 创建vue项目

全局安装 vue -cli

```shell
sudo npm install -g @vue/cli@3.0 //下载3.0版本
vue --version
npm install -g @vue/cli-service-global
vue create hello-world  //创建一个项目
cd hello-world
npm run serve 
#使用命令 --save 或者说不写命令 --save  ,
#都会把信息记录到 dependencies中；
#dependencies 中记录的都是项目在运行时需要的文件；
#使用命令 --save-dev 则会把信息记录到 devDependencies中；
#devDependencies 中记录的是项目在开发过程中需要使用的一些文件，在项目最终运行时是不需要的；
```



<!--在mac终端安装 -global 或者-g的插件时，要在最前头加上sudo 在windows系统下直接安装即可-->

### <!--在app.vue组件中，写有简单操作数据的一些方法，也有一些测试操作是冗余的-->

创建一个基于webpack模版的新项目，名字为my-project. 2.0+版本

```
npm install --gloabl vue-cli
vue init webpack my-project
```

按照提示安装即可

```
cd my-project 

npm  install

npm run dev
```

##### 跨域的原理

其实原理很简单，就是在我们使用`npm run dev`命中，启动了一个node服务，然后将前端发出的请求发送到node服务，再将该服务转发到原本的后台服务，在这过程中实现了一层代理，由一个node服务发送一个请求到另外一个后台服务，自然也没有了浏览器所限制的跨域问题。 

在本地会创建一个虚拟的服务器端，发送请求的数据，并且接收请求的数据

#### 一、

修改 config/index.js ,修改 proxytable

```javascript
 

proxyTable: {

​      '/api': {

​        // 此处的写法，目的是为了 将 /api 替换成 http://121.36.4.107:8080/Rust/test

​        target: 'http://121.36.4.107:8080/Rust/test',

​        // 允许跨域

​        changeOrigin: true,

​        ws: true,

​        pathRewrite: {

​            '^/api': ''

​        }

​    }


```

```javascript
proxyTable: {
      // 这里配置 '/api' 就等价于 target , 你在链接里访问 /api === http://localhost:54321
      '/api': {
        target: 'http://localhost:54321/', // 真是服务器的接口地址 // http://localhost:54321/json.data.json,
        secure: true, // 如果是 https ,需要开启这个选项
        changeOrigin: true, // 是否是跨域请求?肯定是啊,不跨域就没有必要配置这个proxyTable了.
        pathRewirte: {
          // 这里是追加链接,比如真是接口里包含了 /api,就需要这样配置.

          '/^api': 'api/', 
          // 等价于 
          // step 1  /api = http://localhost:54321/
          // step 2 /^api = /api + api == http://localhost:54321/api
        }
      }
     },

```



#### 二、

修改main.js

```js
// The Vue build version to load with the import command

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import App from './App'

import Axios from 'axios'



Vue.config.productionTip = false
//全局注册

Vue.prototype.$axios = Axios

Axios.defaults.baseURL = '/api'

/* eslint-disable no-new */

new Vue({

  el: '#app',

  components: { App },

  template: '<App/>'

})
```



#### 三、

修改app.vue

```html
<template>

<div>

​        <button @click="testAxios">TestAxios</button>

​    </div>

​    <!--App -->

</template>
```

```javascript


<script>


​    export default {

​        methods: {

​            testAxios() {

​                // 由于 main.js 里全局定义的 axios,此处直接使用 $axios 即可。

​                // 由于 main.js 里定义了每个请求前缀，此处的 / 即为 /api/， 

​                // 经过 vue.config.js 配置文件的代理设置，会自动转为 http://121.36.4.107:8080/Rust/test，从而解决跨域问题

​                this.$axios.get('/').then(response => {

​                    if (response.data) {

​                        console.log(response.data)

​                    }

​                }).catch(err => {

​                    alert('请求失败')

​                })

​            }

​        }

​    }

</script>
```

```html


<style>



</style>
```



#### 四、

过程中可能会出现没安装axios 的报错，安装即可解决。可以获取到数据啦

下载axios`npm install axios --save`

httpbin.org 可以作一些测试

但是具体怎么操作数据还不是很了解，需要进一步的学习。

###### 使用v-for循环报错：

当vue报错为：[vue/require-v-for-key]Elements in iteration expect to have 'v-bind:key' dir.     则在Vue 的版本里，当在组件中使用v-for时，key是必须的。

解决方案

在文件 –>首选项 –>设置 –>在搜索框中输入vetur.validation.template,可以找到vetur.validation.template，取消选项即可。

**将对象转换为JSON格式字符串**

```javascript
JSON.stringify(object)
```

**将JSON字符串转换为对象**

```javascript
JSON.parse(jsonString)
```

###### 处理请求的url 

在axios函数内，添加：

```js
params ： {

​	type : 'pop',

​	page : 1

}
```

会把这两个字符串拼接到url后。

###### axios发送并发请求：

```javascript
axios.all([axios({
  url : 'http://121.36.4.107:8080/Rust/test'
}),axios({
  url : 'http://www.baidu.com'
  params : {
  type : 'po'
  page :2
}
})
])
	.then(results => {
  console.log(results);
  console.log(results[0]);
  console.log(results[1]);
})
//.then 的第二种写法
.then(axios.spread(res1,res2)=>{
  console.log(res1);
  console.log(res2);
})
```

###### axios的全局配置：

```javascript
axios.defaults.baseURL = 'http://121.36.4.107:8080'
axios.defaults.timeout = 5000
超时配置 毫秒为单位。
```

在开发中，如果要请求不同的服务器

可以创建不同的axios实例：

```javascript
const instance1 = axios.create({
	baseURL : 'http://121.36.4.107:8080'
	timeout :5000
})
instance1({
	url : '/Rust/test'
})
	.then(res=>{
		console.log(res)
	})
```

在不同的实例中设置baseURl 比较合适。

在组件中使用axios ，无懈可击，除了跨域

```vue
<template>
  <div class="new">
    <h1>{{ msg }}</h1> 
    <!-- 将result中的数据展示出来 -->
    <h4>{{result}}</h4>
  </div>
</template>

<script>
export default {
  name: 'new',
  data () {
    return {
      msg: 'Welcome to My Vue.js App',
      result : []
    }
  },
  //生命周期函数，使用axios访问
  created() {
    axios({
      url : 'http://121.36.4.107:8080/Rust/test'
    })
      .then(res=>{
        this.result = res;
      })
  }
}
</script>
```

不要在每个组件中都引入axios ，危险。

如果axios不再维护了，那么要进到每一个组件中进行修改，十分麻烦。

**解决办法：**

封装一个 request函数

```javascript
import axios from 'axios'

export function request (config , success , failure){
    const instance = axios.create({
        baseURL : 'xxx',
        timeout : 5000
    })
    instance(config)
        .then(res=>{
            success(res)
        })
        .failure(err=>{
            failure(err)
        })
}
```

在组件中导入

```javascript
import {request} from "my-project/src/network/request.js"
 request({
    url :'/Rust/test'
  },res=>{
    console.log(res);
  },err=>{
    console.log(err);
  }
  )
```

但是上面的方法还没有测试过，暂时不知道可行性怎么样。

http://121.36.4.107:8080/Rust/test 

网页的全部内容：0

```
{ "data": [
{ "id": 0, "word": "just do it!" }, { "id": 1, "word": "just do it!" }, { "id": 2, "word": "just do it!" }, { "id": 3, "word": "just do it!" }, { "id": 4, "word": "just do it!" }, { "id": 5, "word": "just do it!" }, { "id": 6, "word": "just do it!" }, { "id": 7, "word": "just do it!" }, { "id": 8, "word": "just do it!" }, { "id": 9, "word": "just do it!" } ], 
"status": 200, 
"statusText": "OK", 
"headers": { "connection": "close", "content-length": "301", 
"content-type": "application/json", "date": "Fri, 16 Apr 2021 11:39:34 GMT", 
"vary": "Accept-Encoding",
"x-powered-by": "Express" }, 
"config": { 
"url": "/", 
"headers": { "Accept": "application/json,text/plain, */*" }, 
"baseURL": "/api", "transformRequest": [ null ], 
"transformResponse": [ null ], 
"timeout": 0,
"xsrfCookieName": "XSRF-TOKEN", 
"xsrfHeaderName": "X-XSRF-TOKEN", 
"maxContentLength": -1,
"maxBodyLength": -1,
"method": "get" },
"request": {} }
```



###### javascript排序：

```javascript
	var arr=[			
		{ "id": 8, "word": "just do it!09" ,"score" : 09}, 
		{ "id": 9, "word": "just do it!10" ,"score" : 82},
		{ "id": 0, "word": "just do it!01" ,"score" : 33}, 
		{ "id": 1, "word": "just do it!02" ,"score" : 64},
		{ "id": 5, "word": "just do it!06" ,"score" : 23}, 
	 	{ "id": 6, "word": "just do it!07" ,"score" : 324}, 
		{ "id": 7, "word": "just do it!08" ,"score" : 44}, 
		{ "id": 2, "word": "just do it!03" ,"score" : 66}, 
		{ "id": 3, "word": "just do it!04" ,"score" : 79}, 
		{ "id": 4, "word": "just do it!05" ,"score" : 89}, 
        ];
        //按成绩排序
        arr.sort(function (a,b) {
            if(a.score>b.score){
                return 1;
            }else{
                return -1;
            }
        });
        console.log(arr);
```

npm install -g @vue/cli@3.0.4



mac上查看环境变量

```
export
```

查看安装了什么npm 包

```bash
npm list -g --depth 0 
(base) bogon:~ macbookpro$ npm list -g --depth 0 
/usr/local/lib
├── @vue/cli@3.0.4
├── @vue/cli-service-global@4.5.12
├── cnpm@6.1.1
├── create-react-app@4.0.3
├── create-vite-app@1.21.0
├── json-server@0.16.3
├── nodemon@2.0.14
├── npm@6.14.11
├── serve@12.0.1
└── webpack@5.52.1
```

