```js
//设置axios请求头加入token

Axios.interceptors.request.use(config => {
if (config.push === '/') {
} else {
if (localStorage.getItem('token')) {
//在请求头加入token，名字要和后端接收请求头的token名字一样

config.headers.token=localStorage.getItem('token');

}

}

return config;

},

error => {
return Promise.reject(error);

});

//=============================

//响应回来token是否过期

Axios.interceptors.response.use(response => {
console.log('响应回来：'+response.data.code)

//和后端token失效返回码约定403

if (response.data.code == 403) {
// 引用elementui message提示框

ElementUI.Message({
message: '身份已失效',

type: 'err'

});

//清除token

localStorage.removeItem('token ');

//跳转

router.push({name: 'login'});

} else {
return response

}

},

error => {
return Promise.reject(error);

})

在router中的index设置全局守卫来判断是否存在token，不存在就返回登录页

router.beforeEach((to, from, next) => {
//to到哪儿 from从哪儿离开 next跳转 为空就是放行

if (to.path === '/') {
//如果跳转为登录，就放行

next();

} else {
//取出localStorage判断

let token = localStorage.getItem('token ');

if (token == null || token === '') {
console.log('请先登录')

next({name: 'login'});

} else {
next();

}

}});

补充知识：Vue获取并存储服务器返回的AuthorizationToken信息并给每次请求添加上token

由于后台是用jwt的token进行身份权限验证，后台在登录后把token添加响应头里，所以前台需要把这个token存放起来，并给每次请求的请求头添加上token，服务器才能获取token进行身份认证。

前台使用vue项目:

loging.vue(登录组件)

{
submitForm(formName) {
this.$axios

.post('/api/admin/login', {
userName: this.ruleForm.userName,

password: this.ruleForm.password

})

.then(successResponse => {
this.responseResult = JSON.stringify(successResponse.data)

this.msg = JSON.stringify(successResponse.data.msg)

if (successResponse.data.code === 200) {
this.msg='';

localStorage.setItem('userName',this.ruleForm.userName);

//获取并存储服务器返回的AuthorizationToken信息

var authorization=successResponse.headers['authorization'];

localStorage.setItem('authorization',authorization);

//登录成功跳转页面

this.$router.push('/dashboard');

}

})

.catch(failResponse => {})

}

}

main.js(全局配置js):

//自动给同一个vue项目的所有请求添加请求头

axios.interceptors.request.use(function (config) {
let token = localStorage.getItem('authorization');

if (token) {
config.headers['Authorization'] = token;

}

return config;

})

```



vue-router

 路径传参：

在路由的path后面加上    /：id

相当于一个占位符 

在route-link 所传的路径上加上 /2

在该界面展示 `{this.$route.params.id}`

重定向到main

```js
{
  path : '/goMain',
    name : 'goMain',
      redirect : '/main'
}
```

路由钩子函数：

```
beforeRouteEnter:(to,from,next)=>{
	next();
}
beforeRouteLeave:(to,from,next)=>{
	next();
}
```

to 路由要跳转的路径信息

from 路由跳转前的路径信息

next 路由的控制参数

`next('/path')` 改变路由的跳转方向，使其跳转到下一个路由

`next((vm)=>{})` 只有在beforeRouteEnter中可以用，vm是组件实例

可以在这个实例中使用axios异步请求。

localStorage sessionStorage只能存储字符串，依赖于浏览器本身，不会对服务器造成消耗。

状态存储 登录拦截

当点击登录的时候,在函数里

```js
window.sessionStorage.setItem('islogin','true');
```

做判断

在路由钩子函数里面

```
router.beforeEach((to,from,next)=>{
	let islogin = window.sessionStorage.getItem('islogin');
	//退出登录
	if(to.path=='/goout'){
	//清除状态
		window.sessionStorage.clear();
		//跳转到指定页面
		next('/login');
	}
	//登录的情况下再去登录页
	else if(to.path=='/login'){
		if(islogin!=null){
			next('/main')
		}
	}
	//sessionStorage被清除掉
	else if(islogin==null){
		next('/login');
	}
	next();
});
```





vuex状态管理：

```js
npm install vuex --save
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
	user : {
		name : ''
	}
}
//唯一取值的方法
const getters={
	getUser(state){
		state.user = user;
	}
}
//唯一可以修改state值的方法，同步阻塞
const mutations={
	updateUser(state,user){
		state.user = user;
  }
}
//异步调用mutations方法
const actions={
  asyncUpdateUser(context,user){
    context.commit('updataUser',user);
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

存储，在输入值的界面的函数中,存进去一个属性name
this.$store.dispath('asyncUpdateUser',{name : this.name});
取值
{{$store.getters.getUser.name}}
```



组件访问State中数据的第一种方式：

this.$store.state.全局数据名称

组件访问State中数据的第二种方式：

```js
//在vuex中导入mapstate函数
//导入是在vue文件的script中导入
import {mapstate} from 'vuex'
将当前组件需要的全局数据，映射为当前组件的computed计算属性：
computed:{
	...mapstate(['count'])
}
```

mutation用来变更store中的数据

**只能通过mutation变更store数据**。不可以直接操作store中的数据

在mutation 不能执行异步的操作

可以集中监控所有数据的变化

```js
mutations={
	update(state){
		state++
  },
  add(state,flag){
    state+=flag;
  }
}
//触发mutation   this.$store.commit()
methods:{
  handle1(){
    this.$store.commit('update')
  }，
  handle2(){
    this.$store.commit('add',3)
  }
}
第二种方式
import {mapMutations} from 'vuex'
将需要的mutations函数，映射为组件的methods 方法
methods:{
  ...mapMutations(['updata','add'])
}
```

Action 用来处理异步任务，如果通过异步操作变更数据，必须通过action，而不能使用Mutation，但是在action中还是要通过触发mutation的方式间接变更数据。

```js
actions:{
  addasync(context){
    setTimeout(()=>{
      //通过commit来调用mutations
      context.commit('add')
    },1000)
  }
}
//触发Action
//携带参数，与mutation一致，mutation也要能携带参数
method;{
  myasync(){
    this.$store.diapatch('addasync')
  }
}
//第二种
从vuex导入mapActions函数
import {mapActions} from 'vuex'
//映射成组件的methods 函数
methods:{
  ...mapActions(['addasync'])
}
```

getter用于对Store中的数据进行加工处理形成新的数据，不会修改原数据，只起到包装的作用

```js
this.$store.getters.方法名
//第二种方法
import {mapGetters} from 'vuex'
//映射成组件的计算属性
computed:{
  ...mapGetters(['mygetters'])
}
```



vuex 浏览器刷新之后数据消失：

vuex的状态存储是响应式的，当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也应该得到高效刷新。但是有一个问题：vuex存储的数据只是在在页面中，相当于我们定义的全局变量，刷新之后，里面的数据就会恢复到初始化状态。

解决方案：

监听页面是否刷新，如果页面刷新，将state对象存入到sessionStorage中，页面打开之后，判断sessionStorage中是否存在state对象，如果存在，说明页面是被刷新过的，将sessionStorage中存的数据取出来给state赋值，如果不存在，说明是第一次打开，则取vuex中定义的state初始值。

在app.vue里面的export default 里面 ：

```javascript
//钩子函数
mounted(){
 window.addEventListener('unload',this.saveState);
}
//方法
methods:{
  saveState(){
 window.sessionStorage.setItem('state',JSON.stringfy(this.$store.state))
  }
}
```

在vuex管理界面

```js
const state = null!=window.sessionStorage.getItem('state')?JSON.parse(window.sessionStorage.getItem('state')):{
	存入的数据
  user : {
		name : ''
	}
}
```

可以把vuex进行模块化





```js
    login(){
      this.$axios({
        method : 'POST',
        url : '/user/login',
        data :{
          "username":"123",
          "password":"123",
          "lossTime" : 10000
        },
        headers: {
          'X-Rust-AuthToken' : '',
          'X-Rust-RequestId' : ''
        },
      })
      //如果要发送post请求传输数据，在函数里直接添加 data {}
      // this.$axios.get('/Rust/test')
      .then(response=>{
        if(response.data){
          this.ins = response.data;
          //打印出请求头信息
          console.log(response.headers);
          alert("您点击了登录按钮");
          var mytoken=JSON.stringify(response.headers['x-rust-authtoken']);
          sessionStorage.setItem('token',mytoken);
          var myrequestid=JSON.stringify(response.headers['x-rust-requestid']);
          sessionStorage.setItem('requestid',myrequestid);
          // localStorage.setItem()
          //通过则跳转
          // this.$router.push({path : '/'})
        }
      })
      .catch(err=>{
        console.log("错误");
      })
    },
  }
  
  
  //全局拦截器在请求头里面加上token返回
Axios.interceptors.request.use(
config => {
  const token = sessionStorage.getItem('token')
  if (token) { // 判断是否存在token，如果存在的话，则每个http headers都加上token
    config.headers['X-Rust-AuthToken'] = token  //请求头加上token
    console.log(config.headers)
  }
  else{
    console.log("token不存在")
  }
  const myrequest = sessionStorage.getItem('requestid')
  if (myrequest) { // 判断是否存在myrequest，如果存在的话，则每个http headers都加上myrequest
    config.headers['X-Rust-RequestId'] = myrequest  //请求头加上myrequest
    console.log(config.headers)
  }
  else{
    console.log("token不存在")
  }
  
  return config
},
err => {
  return Promise.reject(err)
})

```

组件之间传值的方式（小范围）：

父向子传值 v-bind 属性绑定

子向父传值 v-on事件绑定

兄弟组件之间共享数据 EventBus

$on 接收数据的那个组件

$emit 发送数据的那个组件

Vuex 是实现组件全局状态管理的一种机制，可以方便的实现组件之间数据的共享 

可以在vuex中集中管理共享的数据 易于开发和后期维护 

可以高效的事件组件之间的数据共享 提高开发效率

是响应式的 可以使数据自动同步 

安装vuex 

npm install vuex --save





...mapState mapGetters 映射到计算属性中

mapMutations mapActions 映射到方法中











