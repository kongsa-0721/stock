# Vue

### 使用

```
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

或者：

```
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```



可以将**vue.min.js**文件下载到本地，进行引用

新建一个js文件，在html文件中引入，进行vue实例化对象

```
//实例化vue

v

ar obj = new Vue({

​    el: '#app',

​    data: {

​    message: 'Hello Vue!' ,

​    name : '孔萨',

​    url1 : 'http://www.baidu.com'

​    },

​    methods : {

​        greet : function(time){

​            return "GOOD  " + time +"  !   "  + this.message ; 

​        }

​    }

  })`
```



el 的 属性是盒子 的 id ，可以在前端页面进行展示，methods 是方法，data 是要展示的 数据

  <div id="app">
        {{ message }}
        <h1>{{name }}</h1>
        {{  greet('Morning')  }}
        <a v-bind:href="url1">跳转</a>
      </div>
      <script src="/Users/macbookpro/Desktop/案例/进阶/Vue/app.js"></script>

将data 的 key 放在两个{{}}之间，在绑定属性的时候，可以在属性前面加上**v-bind：**

 <a v-bind:href="url1">跳转</a>

如果 data 的key 是一个**标签**，想在前端页面展示出来，可以在html文件里新建一个标签

给标签添加属性 `v-html=“key”`即可展示

v-once ,只执行一次。只是一个简简单单的指令

v-pre 原封不动的显示出来，不做解析

v-cloak   在某些情况下，浏览器可能会直接显示出来位编译的Mustache标签

#### 绑定事件：

html页面

​    `<button v-on:click = 'add'>年龄增加</button>`

​        `<button  @click = 'sub'>年龄减少</button>`

​        `<button  v-on:dblclick = 'sub(10)'>年龄减少`</button>

可以使用 v-on：   或者@ 来进行绑定

js文件代码  

  `methods : {`

​        `greet : function(time){`

​            `return "GOOD  " + time +"  !   "  + this.message ;` 

​        `},`

​        `add : function(){`

​            `this.age = this.age +10;`

​        `},`

​        `sub : function(dec){`

​            `this.age -= dec;`

​        `}`

​    `}`



<!--在 ： 的前后不要加空格，否则编译不出结果，-->

<!--如果在双{{}}里调用方法的话，需要加上（）。-->

<!--如果在属性里调用方法， 加不加（）都可以执行。不传参-->

<!--传参需要加上（）。-->

###### 获取鼠标位置：

event拥有庞大的属性，里面的东西很多。可以先在控制台打印出来，再获取需要的值。

`<div id="cue" @mousemove = 'mouse'>{{x}} , {{y}}</div>`

 `mouse :function(event){`

​            `// console.log(event);`

​            `this.x = event.offsetX;`

​            `this.y = event.offsetY;`

​        `}`

事件修饰符

.stop 停止事件

.once 事件只触发一次

.prevent 不跳转

###### 绑定键盘事件：

 `<input ref="name1" type="text" id="curr" @keyup ='set'>`

​        `<span>{{name1}}</span>`

js文件中

​        `set : function(){`

​            `this.name1 = this.$refs.name1.value;`

​        `}`

`@keyup ='set'  可以替换成	v-model="name1"`

双向绑定 v-model

v-model用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：

  1. v-bind绑定一个value属性 ，v-bind 的语法糖“：”

     

​	  2.v-on指令给当前元素绑定input事件

​	  3.自定义组件使用v-model，应该有以下操作：

\1. 接收一个value prop

\2. 触发input事件，并传入新值

methods里面的方法一旦被执行，会全被执行一遍，很耗费资源

v-if

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

不推荐v-if    v-for一起使用，v-for 的优先级更高。

在调用计算属性的 时候，不需要加括号。

###### 全局注册组件：

在main.js里面注册。

`import New from './compoents/New'`

`Vue.component("users",Users);`

在app.vue里面调用，以标签的形式。

<users></users>

注意 ，在template里面，只能有一个根标签，否则会报错。

###### 局部注册组件：

在app.vue里面注册即可

在处理逻辑，script标签里面

`import new from './components/New'`

在export default 里面 插入

`components ： {`

`“new” ：New`

`}`

在根标签里面以标签的形式调用

<new></new>

CSS样式： 

如果不设置域的话，组件之间的css样式可能会产生冲突或者覆盖。

这个时候，可以给组件的style 标签添加属性scoped ，即为作用域。

#### 属性传值：

###### 父组件向子组件传值：

在父组件调用的子组件标签里，  

<users v-bind:users = "users"></users>

在子组件里 

export default 里面

添加

`props：{`

`users:{`

`type : Array,`

`required : true`

`}`

`}`

传值值改变一个，传引用全部都改变。

###### 子组件向父组件传值：

在子组件中，在一个方法中注册事件

`this.$emit("affairName",“要传递的值")；`

在父组件与子组件相关联的节点标签上定义一个方法

`v-on：affairName=“newAffairName（$event）”`

一定是$event

实现方法：在methods里面注册方法

`"newAffairName" : function(a){`

​			`this.title = a`

`}`

将接收到的“要传递的值”赋给父组件中的`this.title`

#### json-server

在项目的初始阶段，后端提供的接口或数据可能是不完整的，作为一名前端开发工程师，不可避免的要使用mock的数据。如果此时的你不想使用简单的静态数据，而是想自己在本地启动一个server来模拟请求相关的操作，那么json-server是一个不错的选择。
json-serve可以帮助我们快速搭建一个mock-server本地服务，可以根据不同的后缀获取到不同的数据。
————————————————

安装json-server ：在我们的终端中输入：npm install -g json-server（如果是mac电脑的话，需要在前面加sudo，windows电脑不需要）

编写一段测试json数据，命名为 db.json

`$ json-server --watch --port 53000` 

--port 设置端口号为 53000

可以把 db.json 托管成web服务 。当然 --port 53000可以省略，我也没加

然后终端就会输出一段代码告诉你设置成功，就OK了。

在使用终端的时候，可以使用vscode编写代码，vscode 里面有集成终端，比较方便使用。



###### 过滤器：

自定义过滤器

```
Vue.filter('过滤器名称'，function(value){
	//过滤器业务逻辑
})
```

过滤器的使用：

```
<div>{{ msg | upper}}</div>
<div>{{ msg | upper | lower}}</div>
<div v-bind:id="id | formatID"></div>
```

 

Vue生命周期

在vue实例的创建 运行 销毁期间 伴随着各种各样的事件 统称为生命周期

生命周期钩子 ：生命周期函数

与methods 平级

创建期间的生命周期函数：

**beforecreate()** 实例在完全被创建出来执行，在beforecreate执行的时候好 data method 中的数据还没有被初始化

**created()**  data method 已经被初始化好了 要使用数据 最早在created  做完之后进行模版的编译，然后把模版字符串渲染为内存中 的DOM 但是并没有渲染到真正的页面中

**beforeMount()** 模版渲染完成 但是并没有渲染到真正的页面中 页面元素内容并不是最新的 还没被真正替换过来 只是之前的一些模版字符串

**mounted()** 表示内存中的模版已经真实的页面中了 用户可以看到真实的页面了  实例创建期间的最后一个生命周期函数 如果没有其他操作的话 页面一动不动



要通过某些插件操作页面上的DOM节点  最早要在mounted里，组件脱离了创建阶段，进入运行阶段

运行期间的生命周期函数（选择性触发）：

**beforeUpdate**()  数据发生变化 但是页面并没有发生变化 data是最新的 页面并未同步哦

**updated**() 这一步 先根据data中最新的数据 在内存中 重新渲染出一份最新的内存DOM树 然后更新DOM  这个钩子执行完之后 页面和数据都是最新的了

销毁期间的生命周期函数：

**beforeDestroy()** 实例进入到销毁阶段 实例身上所有的data methods 过滤器 指令 还都可以用 

**destroyed()**组件中所有的东西全部不可用 被销毁掉了



```
<template>
  <div>
    <div class="img_box">
      <ul class="clearfix">
        <li
          class="add_img"
          v-if="imgs.length > 0"
          v-for="(item, index) in imgs"
        >
          <img :src="item" />
        </li>
        <li class="add_img" v-if="imgs.length >= 6 ? false : true">
          <input class="upload" @change="add_img" type="file" />
        </li>
      </ul>
    </div>
    <div class="sub_btn" @click="submitBtn">立即提交</div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "renzheng",
  data() {
    return {
      imgs: [], //存放上传图片的数组
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg", //允许上传图片的格式
      },
      reader: new FileReader(),
    };
  },

  methods: {
    add_img(event) {
      let img1 = event.target.files[0];
      let type = img1.type; //文件的类型，判断是否是图片
      let size = img1.size; //文件的大小，判断图片的大小
      if (this.imgData.accept.indexOf(type) == -1) {
        Toast("请选择我们支持的图片格式！");
        return false;
      }

      if (size > 3145728) {
        Toast("请选择3M以内的图片！");
        return false;
      }

      this.reader.readAsDataURL(img1);
      var that = this;
      this.reader.onloadend = function () {
        that.imgs.push(this.result);
      };
    },

    submitBtn() {
      console.log(this.imgs);
      // 此处是上传图片的接口，上传的图片为base64格式且为一个数组，需要后台接受处理
    },
  },
};
</script>

```











