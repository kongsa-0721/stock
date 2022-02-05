

# Axios [æk'siəʊ:s]

## 2021-10-26 学习封装axios

```js
//新建一个文件夹来专门配置axios 在文件夹里面新建index.js
import axios from 'axios'
import { Message, Loading } from 'element-ui'
//设置axios基础路径
axios.defaults.baseURL = '/api'
//设置超时自动断开链接
axios.defaults.timeout = 2500;
//axios请求参数是否进行序列化 json格式的 不需要序列化 如果是x-www-form-urlencoded 要用qs库进行序列化 import qs from 'qs'
//更为简洁的设置请求头token方式
// axios.defaults.headers.common['token'] = sessionStorage['token'];
//请求拦截器 
var loadings;
axios.interceptors.request.use(config => {
    //config里面包含了axios的一些配置 可以在里面进行一系列的操作
    //一般在 在这里开启loading弹窗 或者设置token 
    loadings=Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return config;
},
    error => {
  //在请求拦截器也设置取消loading页面 双重保障
    setTimeout(() => {
        loadings.close();
    },2500)
    return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use(config => {
    loadings.close();
    if (config.status == 200) {
        Message.success({ message: "访问成功啦" });
    }
    return config;
}, error => {
    //访问接口失败在响应拦截器里面做一些配置 我感觉进不去请求拦截器的err处理
    setTimeout(() => {
        loadings.close();
        Message.error({ message: "请再试一次吧" });
    },2500)
    return Promise.reject(error)
})
//导出一个post请求 base 是基础路径 防止项目结束还要拼接路径
let base = "";
export const postRequest = (url, pramas)=> {
    return axios({
        method: "POST",
        url: `${base}${url}`,
        data:pramas,
    })
}
//导出一个get请求
export const getRequest=(url,pramas)=> {
    return axios({
        method: "GET",
        url: `${base}${url}`,
        params:pramas,
    })
}
//在main.js引入axios 
export default axios;




//在main.js里面
import { postRequest, getRequest } from "./api/index.js";
import ajax from './api/index.js'
//挂载在原型链上 组件里使用要加上this
Vue.prototype.$axios = ajax;
Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;
//element ui 的配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

```





## 对路由也进行封装

```js
import Vue from 'vue'
import Router from 'vue-router'
//这里是基本模式
import Home from './views/Home.vue'

Vue.use(Router)
//全局注册组件  可以在组件里面使用标签进行引入
Vue.component("test", test);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      //meta用于设置title
      meta: {
      title: "主页面"
      }
    },
    //懒加载模式
    {
      path: '/hello',
      name: 'hello',
      component:  () => import(/* webpackChunkName: "about" */ '../src/components/HelloWorld'),
      meta: {
      title: "hello页面"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        meta: {
      title: "about页面"
      }
    },
      //这是404界面
      {
      path: '*',
      name: 'notfound',
      component: notfound,
      meta: {
        title: "404"
      }
    }
  ],
  mode: 'history'
})

//在每一个meta里面设置页面的title名字，最后在遍历
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  //放行
  next();
})

//解决点击相同路由跳转报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
// 一个全局的路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (window.sessionStorage.getItem('token')) {
//     //token存在直接放行
//     next();
//   } else if (to.path == '/login') {
//     //去的地址是登陆界面直接放行
//     next();
//   } else if (to.path == '/register') {
//     //去的地址是登陆界面直接放行
//     next();
//   } else {
//     //没登陆的情况下全部放行到登录界面
//     next('/login')
//   }
// })

//在main.js 里面  会自动寻找./router 下面的index文件
import router from './router'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

#### 路由的一些问题 

```js
//这两个都是跳转到根路径  
this.$router.replace({ path: "/" });   //push 点击返回 可以返回上一个界面
this.$router.push({ path: "/" });      //replace 可以返回上上个界面
//携带参数  query会保存传递过来的值，刷新不变
 this.$router.push({path: '/', query: {id: "2"}});
 this.$router.replace({path: '/', query: {id: "2"}});
//push 方式也可以传递replace
 this.$router.push({path: '/home', replace: true})
//在html中
<router-link to="/">Home</router-link> 
//传递 获取参数
<router-link class="myalab":to="{ name: 'matchdetail', query: { id: mydata.id } }">点击此处查看描述</router-link>
      id: this.$route.query.id
//这是强制刷新界面
this.$router.go(0);

//params传递参数被隐藏在地址栏里面 直白的说，query 相当于 get 请求，页面跳转的时候可以在地址栏看到请求参数，params 相当于 post 请求，参数不在地址栏中显示。
this.$router.push({ name: "about", params: { Id: "123" } });
console.log(this.$route.params.Id);
//所有定义的路由参数  可以把路由给循环出来 不用一个一个的添加
this.$router.options.routes
```

#### 子路由跳转（1）

```js
//首先注册子路由 使用懒加载模式
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/menu'),
      children: [
        {
          path: '/item1',
          name: 'item1',
          component:  () => import('../views/menuitems/item1')
        },  {
          path: '/item2',
          name: 'item2',
          component:  () => import('../views/menuitems/item2')
        },
      ]
    },
//在要展示子组件的地方添加<router-view />
//要注意<router-view /> 的位置展示路由组件 因为默认是跳转到 app 里面 
//给menu添加@select 事件 此函数需要传递的参数是item
<el-menu :default-openeds="['1']" @select="menuselect">
 menuselect(item) {
      this.$router.push(item);
    },
//给子菜单添加index 属性 属性的值为路由的路径
<el-menu-item index="/item1">选项1</el-menu-item>
<el-menu-item index="/item2">选项2</el-menu-item>
```

#### 子路由跳转（2）

```js
//给菜单设置路由模式
  <el-menu :default-openeds="['1']" router>
//设置一个大循环 来循环menu下的子路由
<el-submenu
index="1"
v-for="(item, index) in this.$router.options.routes"
:key="index"
v-if="item.path == '/menu'"
>
//展示出被循环的名字
   <span>{{ item.name }}</span>
//设置一个小循环 来循环这个item下面的子路由
 <el-menu-item
:index="item.path"
v-for="(item, indexj) in item.children"
:key="indexj"
>{{ item.name }}
  </el-menu-item>
```






## Getting started

Install JSON Server 下载

```
npm install -g json-server
```

Create a `db.json` file with some data

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```
json-server --watch db.json
json-server --watch db.json -d 2000
延时2s
```



导入CDN

<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js"></script>

#### 编写html代码

<script>
    const btn = document.querySelectorAll('button');
    btn[1].onclick = function(){
        axios({
            method : 'post',
            url : 'http://localhost:3000/posts',
            data : {title: "axios", 
                    author: "kongsa"
                                }
        }).then(response =>{
            console.log(response);
        })
    }
</script>
```
params {

   a : 100,

   b : 200

}
```



###### axios默认配置：

```
axios.defaults.baseURL = "http://locahost:3000";   设置基础URL 

axios.defaults.method = 'get' 设置默认的请求类型为get
```



###### axios创建实例对象发送请求：

创建实例对象

```
const obj = axios.create({

baseURL : "https://api.apiopen.top"

timeout : 2000

});

//这里 obj 的 功能和axios 的功能是几乎一样的

obj({

url : '/getJoke',

}).then(response =>{

console.log(response)

});
```

第二种写法

```
obj.get('/getJoke').then(response=>{

console.log(response)

});
```

axios

```js
import axios from 'axios'
import { Message, Loading } from 'element-ui'
//设置axios基础路径 设置了两个跨域路径 就把这个注释掉了 在访问接口的时候前面要加上config中配置好的路径 例如 api wea 
axios.defaults.baseURL = '/api'
//设置超时自动断开链接
axios.defaults.timeout = 2500;
//axios请求参数是否进行序列化 json格式的 不需要序列化 如果是x-www-form-urlencoded 要用qs库进行序列化 import qs from 'qs'
//更为简洁的设置请求头token方式
axios.defaults.headers.common['token'] = sessionStorage['token'];
//请求拦截器 
var loadings;
axios.interceptors.request.use(config => {
    //config里面包含了axios的一些配置 可以在里面进行一系列的操作
    //一般在 在这里开启loading弹窗 或者设置token 
    loadings=Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return config;
},
    error => {
    setTimeout(() => {
        loadings.close();
    },2500)
    return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use(config => {
    loadings.close();
    if (config.status == 200) {
        Message.success({ message: "访问成功" });
    }
    return config;
}, error => {
    //访问接口失败在响应拦截器里面做一些配置 我感觉进不去请求拦截器的err处理
    setTimeout(() => {
        loadings.close();
        Message.error({ message: "访问不到接口了" });
    },2500)
    return Promise.reject(error)
})
//导出一个post请求 base 是基础路径 防止项目结束还要拼接路径
let base = "";
export const postRequest = (url, pramas)=> {
    return axios({
        method: "POST",
        data:pramas,
        url: `${base}${url}`,
    })
}
//导出一个get请求
export const getRequest=(url,pramas)=> {
    return axios({
        method: "GET",
        url: `${base}${url}`,
        params:pramas,
    })
}
//在main.js引入axios 
export default axios;

```

router

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //懒加载模式
    {
      path: '/hello',
      name: 'hello',
      component:  () => import('../components/HelloWorld')
    },
    {
      path: '/login',
      name: 'login',
      component:  () => import('../view/login.vue')
    },
  ],
  mode: 'history'
})

```

config.js

```js
module.exports = {
  publicPath: "./",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        // 此处的写法，目的是为了 将 /api 替换成https://cwtest.usth.pubs.net.cn/Rust
        target: "http://localhost:5000",
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

```

