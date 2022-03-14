## **JavaScript**

javascript 属于脚本语言，可以嵌套在网页中，给网页添加动态效果。

jsp ：JavaServer Pages 在JVM中运行

#### **javascript** 组成:

**ECMAScript**   欧洲计算机协会，大概每年六月中旬定制语法规范

**DOM**  document object model   文档对象模型

**BOM**  browser object model    浏览器对象模型

window 代表浏览器窗口

我们需要通过双闭合标签script ，将 **JS** 语句嵌套在网页内部执行。

script 标签内部只能放js语法 。

js的脚本块可以有多个，可以放在任意位置，脚本块里面的内容自上而下执行。

可以将js代码写成文件，然后在需要的地方引入

<script type = "text/javascript" src= " " >
</script>

引入js文件，在script 中写的代码不会执行

###### 1.alert

alert 是 **JS** 中的一个内置函数，主要作用是在浏览器内弹出一个警告框。

<script type="text/javascript">
	alert("欢迎来到澳门！");
</script>
alert函数可以多次使用，可以阻塞页面加载。

###### 2.控制台

`console.log("哈咯啊 硕哥");`

可以在控制台中打印一些数据，同时打印多个数据，用逗号分隔。

###### 3.数字，字符串类型的字面量

整数，浮点。 	`console.log(19+23);`

浮点数在进行计算时，在底层被转化为二进制，0.1 ,0.2在转化的时候没办法整除，后面保留了将近17位小数。**IEEE754**算数标准。

```
console.log("炸金花");  //写这里的时候可能我们寝室在玩牌 哈哈
```

**<u>*parseInt*</u>** 可以讲字符串中的字符转换为数字**（整数部分）**。

第一个字符如果不是数字，转换结果为NAN

**<u>*parseFloat*</u>** 可以将字符串中的数字形式的字符转化为数字 **（小数部分）**

###### 4.变量

声明，赋值，使用。

关键字 **var** 

`var a = 23;`
`console.log(a);`

未赋值 ，初值为undefined。

null属于NULL类型

###### 5.命名标识符规范

变量或函数的名字可以是 数字，英文字母，下划线，美元符号；

不能以数字开头，不能是关键字，保留字。

###### 6.提示框注意事项

```js
// 这就是一个很简单提示框 可以输入东西
var age = prompt("请输入你的姓名：");
	console.log(age);
```

###### 7.number类型的数值

**Infinity** 无穷大

**NaN** 参与的数值运算结果都为NaN   不靠谱。

在JS中，不仅仅number类型的数值可以参与数学运算。其他类型的数据也可以参与数学运算。布尔类型，未定义类型，空对象类型。在浏览器底层是被转换为数字，然后参与运算。

**true **                 1

**false**                 0

***undefined**     NaN 

**null**                    0

***String 类型 参与 数学运算***

➕       连字符 

其他    将字符串转换为数字再进行运算

**8.*比较运算***

=== 全等判断。 判断数值和类型是否相等

！== 不全等判断

**只有NaN 与自身比较的时候不等，其他的都相等。**

其他数据类型也可以参加比较运算，隐式转换为数字。

字符串和字符串进行比较时，是通过ASCII来进行对比的。

一般布尔值参与逻辑运算，

模版字符串 在后面有详细的介绍

```js
`你好呀${name}`
```

9.逻辑运算

&&     ||        ！

浏览器自动将其他类型的数据隐式转换为布尔值来参与。

NaN                         false

其他数字类型          true 

空字符串                  false

非空字符串              true 

undefined               false

null                           false

###### 10.if条件语句

条件语句中的内容，被隐式转换为布尔值来参与。

  `byte short int long float double boolean char`

`12484812`

11.函数

function 函数名（形参列表）{

}

函数名 = function （形参列表）{

}

如果两个函数同名，后面的函数会覆盖掉前面的。

全局变量 ：在函数题之外声明的变量。

在浏览器打开时声明，关闭时销毁。比较耗费资源。

如果一个变量声明的时候没有使用var ，就是全局变量。

typeof在程序运行期间，可以动态的获取变量的数据类型。

心事把自己弄丢，淋湿在阁楼。

var x ="abc".   String 类型

var y = new String ("abc").    object 类型

##### js中的事件

***bulr**      失去焦点*

***focus**    获得焦点*

***click**      鼠标单击*

***dblclick** 鼠标双击*

***keydown**    	  键盘按下*

***keyup**  			 键盘弹起*

***mousedown**    鼠标按下*

***mouseover**      鼠标经过*

***mousemove**    鼠标移动*

***mouseout**        鼠标离开*

***mouseup**         鼠标弹起*

**reset  ** 				表单重置

**submit**				 表单提交*

**select**	   下拉列表中的选项改变 或者文本框内容改变

***load** 				页面加载完毕*

<u>任何一个事件都会对应一个事件句柄，在事件前加on，事件句柄出现在一个标签的属性位置上。</u>

###### 回调函数

自己把代码写出来了，但是函数不是自己负责调用，由其他程序负责调用该函数。

```js
function sayHello(){

	alert("hello js");

}

<input type = "button" value = "hello" onclick = "sayHello()"/>
  如果这样调用的话 函数后面必须加上括号
input 的name 属性
name 属性规定 input 元素的名称。
name 属性用于对提交到服务器后的表单数据进行标识，或者在客户端通过 JavaScript 引用表单数据。
注释：只有设置了 name 属性的表单元素才能在提交表单时传递它们的值。
```

将sayHello函数注册到按钮上，等待click事件发生，该函数被浏览器调用，我们称这个函数为回调函数。

###### 注册事件

```js
<input type = "button" id="001" value ="halo"/>

var obj = document.getElementById("001");

obj.onclick = 回调函数;

回调函数不要加小括号

function(){

方法体;

}
```

###### addEventListener

```js
接收三个参数 第一个是事件 第二个是函数 第三个是布尔类型的 
默认为false 事件冒泡
设置为true 事件捕获
先捕获再冒泡 从外向里捕获 从里向外冒泡
有三个事件不是默认冒泡的 focus onscoll onbulr
function fn1() {
    console.log("函数一");
}
function fn2() {
    console.log("函数二");
}
function fn3() {
    console.log("函数三");
}
document.querySelector("#table").addEventListener('click',fn1,true)
document.querySelector("#tr").addEventListener('click',fn2,true)
document.querySelector("#td").addEventListener('click',fn3,true )
```

上面是一个匿名函数，当onclick执行时才会执行。 

获取键值 回车 13

​				 ESC 27

keycode属性来获取数值

```js
function（event）{

if(event.keycode ===13){

方法体

}

}

<a href="javascript：void(0)" onclick ="alert("zbc")">
```

`既保留了超链接的样式，同时用户点击超链接执行一段js代码，但是页面不跳转`

`</a>`

void 执行表达式，但不返回任何结果。绝了

在 浏览器地址栏 输入 **javascript：**是告诉浏览器，以下将会是一段js代码。

**遍历js中的数组：**

```js
var []arr ={1,2,3,4,5,6,}

for (var i in arr){

alert(arr[i]);

}
```

i是数组的下标。

使用innerHTML设置元素内部的内容：

innerTEXT 这是两个属性

html会把后面的字符串当作html代码执行。

###### 正则表达式：

主要用在字符串格式匹配

创建正则表达式对象：

```js
var aaa =/正则表达式/；

var bbb = aaa.test(需要测试的信息)；

if（bbb）{

}

else{

} 
```

.trim()函数，可以去除空格。

str.trim();

```js
eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。
如果参数是一个表达式，eval() 函数将执行表达式。如果参数是Javascript语句，eval()将执行 Javascript 语句。
window.eval("var i = 100")
```

将括号里的字符串，当作一段js代码    

eval格式的字符串，转化成json对象

```js
var alarm = [
    {
        "id": "23010041600000_20211107160846",
        "title": "哈尔滨市气象局发布道路结冰橙色预警[II级/严重]",
        "signaltype": "道路结冰",
        "signallevel": "橙色",
        "effective": "2021/11/07 16:11",
        "eventType": "11B21",
        "severity": "ORANGE"
    },
    {
        "id": "23010041600000_20211107160936",
        "title": "哈尔滨市气象局发布大风蓝色预警[IV级/一般]",
        "signaltype": "大风",
        "signallevel": "蓝色",
        "effective": "2021/11/07 16:10",
        "eventType": "11B06",
        "severity": "BLUE"
    }
]
console.log(alarm[0]['title']);
console.log(alarm[1].title);
```

以上为两种访问json对象的属性。



undefined  定义了未赋值

null 定义了赋值了，但是值为空

`arguments`  代表传入的所有参数 是一个数组 

```js
function my (a,b,...rest){
	a
	b
	rest//用来接收剩余的参数
}
```

###### 时间戳转化具体时间

```javascript
var time = new Date(1578106175991);
console.log(time);


//把时间戳转化为时间  2020-01-04 10:49:35
function add0(m) {
  return m < 10 ? "0" + m : m;
}
//直接调用这个函数就OK
function format(info) {
  //时间戳是整数，否则要parseInt转换
  var time = new Date(info);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return (
    y +
    "-" +
    add0(m) +
    "-" +
    add0(d) +
    " " +
    add0(h) +
    ":" +
    add0(mm) +
    ":" +
    add0(s)
  );
}
```

###### __proto__原型

```js
__proto__ 原型
原型

var student = {
  name:'qianjiang',
  age : 23,
  run : function(){
    console.log(this.name+"run...")
  }
};
 
var xiaoming = {
  name:'mingzaizi'
};
xiaoming.__proto__ = student;
```

###### js判断数据类型

主要有三种方式 ：

typeof  可以判断基本数据类型. typeof(null). object null被认为是空对象的一个引用

instanceof   可以判断复杂数据类型 数组 对象 

object.prototype.toString.call  比较全面 低版本的IE不支持 

```js
typeof()
arr instanceof Array
Object.prototype.toString.call(arr)
```

###### ES6模版字符串

```js
let name = "这是一个"
`${name}字段`
换行直接回车就可以了    
let obj = `这个是模版字符串
看看换行的 效果
果然啊 在输出环境可以换行 但是在html文件里面是不可以换行的`
console.log(obj);

//模版字符串可以获取元素的值 通过id来直接获取input输入框的value值
<input type="password" id="btn">
<input type="password" id="btn1">
<input type="button" value="submit" class="sub">
<script>
  document.querySelector(".sub").onclick=function(){
  	console.log(`${btn.value}${btn1.value}`);
	}
  document.querySelector(".sub")['onclick']=function(){
  	console.log(`${btn.value}${btn1.value}`);
	}
</script>
```

###### forEach

```js
arr = [1,2,3,4,5,6,7]
for(let i of arr){
	console.log(i)
}
for of 打印的是每一个元素 可以遍历array map nodelist 等等 不支持普通对象遍历
//for-of遍历字符串
let  iterable =  "china中国" ;
for  ( let  value of iterable) {
   console.log(value);
}
//输出 "c" "h" "i" "n" "a" "中" "国"
for in 打印出来的是下标 in 会遍历 原型链上增上去的一些属性 会遍历数组的属性
for循环和for-in能正确响应break、continue和return语句，但forEach不行。
arr.forEach((item , index , arr)=>{
	对arr 进行的一系列操作
	item = item + 1 //嘎嘎错误 
  //item 作为形式参数
	arr[index] = arr[index]+1 //可以
})

forEach 修改形式参数是不会改变本来的数据的 里面不可以用break 可以条件过滤 return  原始的for 循环break 性能高于forEach的return
理论上这个方法是没有返回值的，仅仅是遍历数组中的每一项，不对原来数组进行修改；但是可以自己通过数组的索引来修改原来的数组，或当数组项为对象时修改对象中的值；
如果单纯的想获取对象的属性名，js有原生的Object.keys()方法（低版本IE不兼容）,返回一个由对象的可枚举属性名组成的数组：
//数组类型
let  arr = [ "a" ,  "b" ,  "c" ];
console.log(Object.keys(arr));
//  ['0', '1', '2']

== 与 ===
  == 可以隐式转换
	=== 不允许隐式转换

map方法不会改变原数组 映射

1、都是循环遍历数组中的每一项。

2、forEach()和map()里面每一次执行匿名函数都支持3个参数：数组中的当前项item,当前项的索引index,原始数组input。

3、匿名函数中的this都是指Window。

4、只能遍历数组。
```

2021-10-21

js自带的一些函数

```
将字符串变为数组
split('')
反转方法 
reverse()
变成字符串
join('')
```

#### JS高级

###### js中的一些方法

null 空对象指针 undefiend 未初始化变量

**indexOf**  在js中有着重要的作用，可以判断一个元素是否在数组中存在，或者判断一个字符是否在字符串中存在，如果存在返回该元素或字符第一次出现的位置的索引，不存在返回-1。

```js
var arr = [1, 2, 3];
console.log(arr.indexOf(2));    //打印结果为1

var str = "helloworld";
console.log(str.indexOf("w"));  //打印结果为5

var arr = [1, 2, 3];
var idx = arr.indexOf(2);
arr.splice(idx,1);
console.log(arr);
```

**splice** ：

在javascript中splice()方法有如下3种方式：

- 删除——可以删除任意数量的项，只需要指定2个参数：要删除的第一项的位置和要删除项的项数。

例如，splice(0,2)会删除数组中的前两项。

- 插入——可以向指定位置插入任意数量的项，只需要提供3个参数：插入起始位置、0（要删除的项数）和要插入的项。 如果要插入多个项，可以再传入第四、第五，一直任意多个项。

例如，splice(2,0,”red”,”green”)会从位置2开始插入字符串“red”和”green”。

- 替换——即删除和插入数量相等项数的综合应用，可以指向指定位置插入任意数量的项，且同时删除任意数量的项，只需要指定3个指定参数：起始位置、要删除的项数和要插入的任意数量项。 插入的项数是不必与删除的项数相等。

例如，splice(2,2,”red”,”green”)会删除当前数组位置2的项，然后再从位置2开始插入字符串“red”和“green”。

splice()方法始终都会返回一个数组，该数组中包含从元素数组中删除的项（如果没有删除任何项，则返回一个空数组）。

```js
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);  //删除第一项
alert(colors);  //green,blue
alert(removed);  //red，返回数组中值包含一项

removed = colors.splice(1, 0, "yellow", "orange");  //从位置1开始插入两项
alert(colors);  //green,yellow,organge,blue
alert(removed);  //返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple");  //插入两项，删除一项
alert(colors);  //green,red,purple,orange,blue
alert(remove);  //yellow, 返回的数组中只包含一项
```

**slice** 

slice() 方法可从已有的数组中返回选定的元素。

slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

**注意：** slice() 方法不会改变原始数组。

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);Orange,Lemon
```



###### 预处理 词法环境

必须是声明方式声明的函数 才会在词法环境中处理 

重名的情况下 函数优先，函数的优先级高于变 量。后面的会覆盖前面的

没声明的话调用 直接报错 声明的方式声明的函数会提升

未定义直接赋值 具有全局作用域 作用域是分层的 

无论函数在哪里调用 都在创建那个函数的作用域中取值 

###### for循环中重复赋值问题

```js
/var
for (var i = 0; i < 5; i++) {
  var i = 10;
  console.log(i); // 10
}
for (var i = 0; i < 5; i++) {
  console.log(i);
  var i = 10; // 0
}
for (var i = 0; i < 5; i++) {
  let i = 10;
  console.log(i); // 10 10 10 10 10
}
for (var i = 0; i < 5; i++) {
  console.log(i); //Uncaught ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
for (var i = 0; i < 5; i++) {
  const i = 10;
  console.log(i); // 10 10 10 10 10
}
for (var i = 0; i < 5; i++) {
  console.log(i); //Uncaught ReferenceError: Cannot access 'i' before initialization
  const i = 10;
}

/let
for (let i = 0; i < 5; i++) {
  var i = 10;
  console.log(i); // Uncaught SyntaxError: Identifier 'i' has already been declared
}
for (let i = 0; i < 5; i++) {
  console.log(i);
  var i = 10; // Uncaught SyntaxError: Identifier 'i' has already been declared
}
for (let i = 0; i < 5; i++) {
  let i = 10;
  console.log(i); // 10 10 10 10 10
}
for (let i = 0; i < 5; i++) {
  console.log(i); //Uncaught ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}
for (let i = 0; i < 5; i++) {
  const i = 10;
  console.log(i); // 10 10 10 10 10
}
for (let i = 0; i < 5; i++) {
  console.log(i); //Uncaught ReferenceError: Cannot access 'i' before initialization
  const i = 10;
}
/const
for (const i = 0; i < 5; i++) {
  var i = 10;
  console.log(i); // Identifier 'i' has already been declared
}
for (const i = 0; i < 5; i++) {
  let i = 10;
  console.log(i); // Uncaught TypeError: Assignment to constant variable.
}
for (const i = 0; i < 5; i++) {
  const i = 10;
  console.log(i); // Uncaught TypeError: Assignment to constant variable.
}

```



###### 深拷贝和浅拷贝

-  浅拷贝：有两种方式，一种是把一个对象里面的所有的属性值和方法都复制给另一个对象，另一种是直接把一个对象赋给另一个对象，使得两个都指向同一个对象。第一个对象的值改变 第二个对象的值有可能也跟着改变。
-  深拷贝：把一个对象的属性和方法一个个找出来，在另一个对象中开辟对应的空间，一个个存储到另一个对象中。深拷贝是完完全全的复制一份，空间大小占用一样但是位置不同！内存地址不指向同一个。就是完全不影响。

-  对于引用数据类型，存的是它在内存中指向的地址，基本数据类型指向的是值。

```js
//浅拷贝
var a = {
    name: "kongsa",
    age: 19,
    grade:"university"
}
var b = a;
a.name = "chundan";
console.log(b.name);  //chundan
//object 实现的也是浅拷贝
var a = {
    name: "kongsa",
    age: 19,
    grade: "university",
    info: {
        study:"web"
    }
}
var b = Object.assign({}, a);
a.info.study = "java"
console.log(b); //java
```

在对b赋值完毕之后 改变了a 的值 输出b的值，也跟着改变 说明此时b里面存的是内存地址而不是值。

如何实现深拷贝

```js
//递归实现
var obj={
    name: "kongsa",
    age: 19,
    grade: "university",
    info: {
        study:"web"
    }
}
var newobj={}
function deepCopy(obj,targetObj){
	for (let key in obj){
    //设置变量接收值
		let item = obj[key];
		if (item instanceof Array){//if array
      //数组的判断要放在对象前面 因为数组也属于对象
			targetObj[key] = [];
			deepCopy(item,targetObj[key]);
		}else if (item instanceof Object){//if object
			targetObj[key] = {};
			deepCopy(item,targetObj[key]);
		}else {//normal attribute
      //如果是基本数据类型 直接进入这里 直接赋值
				targetObj[key] = obj[key];
		}
	}
}
deepCopy(obj,newobj);


//使用JSON对象的parse和stringify
function deepClone(obj){
  //先转化为字符串
    let _obj = JSON.stringify(obj),
        //再转化为对象
        objClone = JSON.parse(_obj);
    return objClone
}    
let a=[0,1,[2,3],4],
    b=deepClone(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);

//jQuery的extend方法 便捷的实现深拷贝
$.extend( [deep ], target, object1 [, objectN ] )
deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝
target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
object1  objectN可选。 Object类型 第一个以及第N个被合并的对象。 
$(function () { 
    var obj={
    name: "kongsa",
    age: 19,
    grade: "university",
    info: {
        study:"web"
    }
}
    var newobj = $.extend(true,{},obj);
    obj.info.study="java"
    console.log(newobj);
})
//此时newobj就是被深拷贝的
```

###### JSON stringy parse

```js
JSON.stringify() 将对象转化为JSON字符串

JSON.parse() 		 将JSON字符串转化为对象

//字符串必须符合JSON格式 键值必须用双引号
```

**localStorage/sessionStorage ** 只能存储字符串

**formdata** 只能传输字符串

我们可以用上面的方法来进行转换

JSON.toString() 一般用来转化数字

###### 数据类型的判断

typeof 对基本数据类型进行判断

instanceof 对引用数据类型进行判断   要先判断数组 然后再判断对象   

es6新增一个函数 Array.isArray(obj)  判断是否为数组

判断对象是否为空 

```js
function isEmpty(obj){
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      return false;//不是空的
    }
  }
  return true;  //说明为空对象
}
```

###### 过滤函数

```js
filter函数 返回所有偶数的数字
var arr = [1,2,3,4,5,6,7,8,9]; 
function method(e){
  if(e%2==0){
    return e;
  }
}
//在这个filter里面 元素已经被遍历了一遍 但是参数是必须的  函数不用加括号
var newarr = arr.filter(method);
console.log(newarr);

//这是一个非常强大的函数 可能以后会用到 
```

###### call apply bind方法

```js
call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加，这是它们的区别，根据自己的实际情况来选择使用。
改变执行主体 不影响原来的  bind 会创建一个新的函数 不会立即执行 apply call 立即执行 但是传递的参数不一样 
第一个参数如果是全局的话 就写null undefined
apply( ,[]) //最后一个参数是数组 用apply方法
call( , ) 不是数组的时候 用call  
function add(x,y){
  console.log(x+y);
}
function myaddcall(x,y){
  return add.call(this,x,y);
}
myaddcall(1,2);
function myaddapply(x,y){
  return add.apply(this,[x,y])
}
myaddapply(2,4)
function myaddbind(x,y){
  var a = add.bind(this,x,y)
  return a();
}
myaddbind(2,4)

将math的min方法 执行主体改变为数组
         arr.__proto__==Array.prototype 
var arr = [1, 2, 3, 4, 5, 6, 7];
//这种方法把方法绑定在 Array上了 没在prototype里面 所以arr使用不了
Array.min = function (arr) {
    return Math.min.apply(Math, arr);
}
console.log(Array.min(arr));
//链式调用 绑定在原型链上了 只要是数组就可以用
Array.prototype.max = function () {
    return Math.max.apply(Math,this);
}
console.log(arr.max());

```

###### 数组的遍历

```js
//类数组对象 函数的参数arguements dom节点
let a = Array.prototype.slice.call(arguments,this);
let a =[...arguments]
return a
function transform() {
    console.log(arguments);
    var arr = [];
    for (var item in arguments) {
        console.log(item);
        console.log(arguments[item]);
        arr.push(arguments[item]);
    }
    return arr;
}
console.log(transform(1,2,3,4,5,"s","s"));


//for循环便利 改成 字符串 再变回数组、
var res = '';
var arr = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < arr.length; index++) {
    res += arr[index];
}
console.log(typeof (res));
console.log(res);
console.log(res.split(''));
//foreach
```

###### 函数的定义

```js
//函数是一个对象
//函数声明 可以提升 必须有名字
function sum(){
	
}
函数表达式
var sum = function(){
	
}
构造函数 new操作符 效率比较低
var sum = new Function("num1","num2","return num1+num2");
自执行函数
(function () {
    console.log(1);
} ());
```

###### 函数的参数

```
形参 实参 不必统一  
数据的传递是单向的
arguments 是实际传递的参数  伪数组 有索引
arguments.length 
不可以在外部调用 只能在函数内部调用
匿名函数递归 ？？？？？////
使用匿名函数表达式时，函数的调用语句，必须放在函数声明语句之后！！！
函数声明会提升 但是函数表达式不会提升/
020 js函数的参数
```

###### 闭包

函数里面有一个函数 里面的函数要引用外部的变量

- 优点 ：保护函数内部变量的安全 实现封装 防止造成污染，有的时候可以适当使用 维护内存 提高执行效率

- 缺点：消耗内存 函数的活动对象会随着执行上下文一起被销毁 ，由于闭包引用的是外部函数的活动对象 无法被销毁 消耗更多的内存 。 内存泄漏 ie9之前 如果闭包之内存在dom对象 会无法销毁 造成内存泄漏。解决操作 可以将元素设置为null

```js
//设置缓存 存取一些信息
var cacheMemoty = (function() {
    var cache = {};
    console.log(cache);
    return {
        set: function (id) {
            if (id in cache) {
                return '结果是' + cache[id];
            }
            var result = fn(id);
            cache[id] = result;
            return '结果是' + cache[id];
        }
    }
})();
  function fn(id){
    console.log("耗费时间的操作");
    return id;
  }
console.log(cacheMemoty.set(20));
console.log(cacheMemoty.set(20));
console.log(cacheMemoty.set(30));
//结果 对象 . 和[]的区别 最好使用[] 否则报错
耗费时间的操作 
结果是20
结果是20
耗费时间的操作
结果是30

var arr = ['one','two','three'];
for(var i=0;i<arr.length;i++){
  (function(con){
    setTimeout(function(){
      consolse.log(arr[con]);
    },1000*con)
  })(i);
}
```

 闭包会导致作用域链问题 :

```
在匿名函数中 this相当于一个外部变量 会形成闭包  
this永远指向函数的调用实体 匿名函数的实体是全局对象window 要改变的话 要改变this 的指向 指向自身
```

//对函数和自执行函数的理解。

```js
        function box() {
            var arr = [];
            for (var i = 0; i < 5; i++) {
                arr[i] = function() {
                    return i;
                };
            }
            return arr;
        }
        var b = box();
        console.log(b);   //得到b是一个数组
        console.log(b[0]);    //数组里面每一个都是一个函数
        console.log(b[0]());     //执行函数  返回i 的值  这和后面的代码要分开执行 变量提升 直接覆盖掉了
        console.log(typeof(b));
        console.log(typeof(b[0]));
        console.log(typeof(b[0]()));
        // [
        // [Function (anonymous)],
        // [Function (anonymous)],
        // [Function (anonymous)],
        // [Function (anonymous)],
        // [Function (anonymous)]
        // ]
        // [Function (anonymous)]
        // 5

        // object
        // function
        // number
        
        //b的第一个函数执行 之后 返回值是5
        //因为b中存的是匿名函数对象，当bi执行匿名函数时，box（）中的for循环早已执行完毕，i早已变成5.
        //解决 让匿名函数自我执行
        function box() {
            var arr = [];
            for (var i = 0; i < 5; i++) {
                arr[i] = (function(i) {
                    return i;
                })(i);
            }
            return arr;
        }
        var b = box(); //得到函数数组
        console.log(b); //得到函数集合长度
        for (var i = 0; i < b.length; i++) {
            console.log(b[i]); //输出0,12,3,4
        }
```

###### this

```js
this对象
this对象是在运行时基于函数的执行环境绑定的，如果this在全局范围就是window，如果在对象内部就指向这个对象。而闭包却在运行时指向window，因为闭包并不属于这个对象的属性或方法。
this独立调用就指向window 闭包里面也是一个道理

var user='window';
var obj={
    user:'obj',
    getUserName:function(){
        return function(){
            return this.user;
        }
    }
}
console.log(obj.getUserName()());//window


解决1：强制指向特定对象
console.log(obj.getUserName().call(obj));//obj
console.log(obj.getUserName().apply(obj));//obj
var x=obj.getUserName().bind(obj)
console.log(x())//obj

解决2：复制this，得到上一个作用域的this对象
var user='window';
var obj={
    user:'obj',
    getUserName:function(){
        var that=this;
        return function(){
            return that.user;
        }
    }
}
console.log(obj.getUserName()());//obj

```

箭头函数中的this

- 箭头函数里面是没有this的 拿的是父级作用域的
- 就算是闭包也不行 拿的也是父级作用域的 强绑定也不行
- 里面不存在arguments对象
- 箭头函数不允许作为构造函数 new不能实例箭头函数

###### new

1.new关键字会首先创建一个空对象
2.将这个空对象的原型对象指向构造函数的原型属性，从而继承原型上的方法
3.将this指向这个空对象，执行构造函数中的代码，以获取私有属性
4.如果构造函数返回了一个对象res，就将该返回值res返回，如果返回值不是对象，就将创建的对象返回

###### 原型对象

```js
//构造函数
function Person(name,age) {
    this.name = name;
    this.age = age;
}
//原型链上绑定属性
Person.prototype.getname = function () {
    return this.name;
}
var p1 = new Person("kongsa",19);
console.log(p1);    //Person { name: 'kongsa', age: 19 } p1 是一个对象 实例化出来的
var res = p1.getname();
console.log(res);   //kongsa

每一个函数在创建的时候都被赋予一个prototype属性 当我们new一个实例的时候，实例具有一个__proto__ 属性 指向构造函数的原型对象，可以看作一个链接实例与构造函数的原型对象的实例。
重写原型对象要加入 
constructor :Person
__proto__指向上一级构造函数的原型对象
//全是true
console.log(Function.__proto__==Function.prototype);
console.log(Object.__proto__==Function.prototype);
console.log(Function.prototype.__proto__==Object.prototype);
console.log(Object.prototype.__proto__);//null
//demo1
function Foo(){
    this.name=1
}

var minfoo = new Foo();

console.log(minfoo);  //实例出来的对象 有__proto__属性 函数才有prototype
console.log(minfoo.__proto__);  //指向了函数的原型 
console.log(minfoo.__proto__.__proto__);  //指向了顶层的Object

console.log(Foo.prototype);   //函数的原型
console.log(Foo.prototype.__proto__);  //指向了顶层Object 

console.log(Foo.prototype == minfoo.__proto__);  //true
console.log(Foo.prototype.__proto__== minfoo.__proto__.__proto__);  //true
console.log(Foo.prototype.__proto__ == Object.prototype);  //true


//demo2

function Foo(){
    this.name="孔萨"
}
//在函数的原型上绑定属性

Foo.prototype.show = function () {
    console.log(this.name);
}
var minfoo = new Foo();
minfoo.show();
console.log(minfoo);
console.log(Foo.prototype);
//查看原型
console.log(Object.getPrototypeOf(Foo.prototype) == Object.prototype);
//顶层的原型是null
console.log(Object.getPrototypeOf(Object.prototype));
console.log(minfoo.constructor);
//改造原型
Foo.prototype = {
    constructor:Foo,
    show() {
        console.log(this.name);
    }
}
var maxfoo = new Foo();
console.log(maxfoo);
console.log(minfoo.__proto__ == maxfoo.__proto__);
console.log(Foo.prototype);

```

##### 继承

- ###### 原型链继承。引用值共享问题

```js
//demo3 原型链继承的问题 引用值共享
//无法向父类传递参数 给子类的原型链上添加东西 必须在 继承之后 只能继承一个
function Father() {
    this.base = "1";
    this.arr = [1, 2, 3, 4];
}

//第一种原型链继承方式
var father = new Father();
Son.prototype = father;

//第二种原型链继承方式 
// Son.prototype = new Father();
//把构造函数指向自己
Son.prototype.constructor = Son;
function Son() {
    
}
var son = new Son();
var daughter = new Son();
son.arr.push(5)
console.log(son.base);
console.log(son.arr);
//这里的值改变了  只有引用值会改变 父类的值也改变了  是没有办法解决的
console.log(daughter.arr);


```

- ###### 构造函数强绑定继承。无法拿到原型链上的方法

```js
  
  //demo4 构造函数继承  解决了引用值共享的问题
//可以实现多继承 多call几个呗 伪继承 只是绑定了就拥有一些方法和属性 不能访问父类原型链上的东西 也不能给父类传参
  function Father() {
      this.base = "1";
      this.arr = [1, 2, 3, 4];
  }
  //这个方法 子类就拿不到了 构造函数继承
  Father.prototype.show = function () {
      console.log("这是一个show函数");
  }
  function Son() {
      //直接来一个强绑定
      Father.call(this)
  }
  
  var son1 = new Son();
  var son2 = new Son();
  
  
  son1.arr.push(5)
  console.log(son1.arr);
  console.log(son2.arr);
  

  
```

- ###### 组合继承 （伪经典继承） 调用了两次father实例

```js
    //demo5 组合继承
    function Father() {
        this.base = "1";
        this.arr = [1, 2, 3, 4];
    }
    Father.prototype.show = function () {
        console.log("这是一个show函数");
    }
    function Son() {
        //直接来一个强绑定
        Father.call(this)
    }
    //原型链继承
    Son.prototype = new Father();
    var son1 = new Son();
    var son2 = new Son();
    
    
    son1.arr.push(5)
    console.log(son1.arr);
    console.log(son2.arr);
    son1.show()
   
```

- ###### 经典继承 （寄生组合继承）解决实例复用问题 优化

```js
寄生：在函数内返回对象然后调用
组合：1、函数的原型等于另一个实例。2、在函数中用apply或者call引入另一个构造函数，可传参
//demo6 经典继承
function Father() {
    this.base = "1";
    this.arr = [1, 2, 3, 4];
}
Father.prototype.show = function () {
    console.log("这是一个show函数");
}
function Son() {
    //直接来一个强绑定
    Father.call(this)
}
//这个方法返回一个对象 带着指定对象的原型和属性 存在兼容性问题
if (!Object.create) {
    Object.create = function (proto) {
        function F() { }
        F.prototype = proto;
        return new F();
    }
}
Son.prototype = Object.create(Father.prototype)
var son1 = new Son();
var son2 = new Son();

son1.arr.push(5)
console.log(son1.arr);
console.log(son2.arr);
son1.show()

//这个方法和上一个伪经典继承一样存在一个问题 就是子类的实例无法访问到子类原型上面的方法了
//如果子类的方法定义在 原型继承之后 那么这个问题就解决掉了
//彻底解决的话 还有一个方案就是圣杯模式继承
//还有es6 的extends 继承 这个是组合继承？
Son.prototype.say = function () {
    console.log("我是Son的方法");
}
son1.say();
```

##### 异步解决方案

###### JS中的任务

分为宏任务和微任务

宏任务包含：

```text
script(整体代码)
setTimeout
setInterval
I/O
UI交互事件
postMessage
MessageChannel
setImmediate(Node.js 环境)
```

微任务：

```text
Promise.then
Object.observe
MutationObserver
process.nextTick(Node.js 环境)
```

###### 回调函数

```js
function ajax(url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url);
  //这个函数里面不要传入callback 他妈的天天遇到坑
    xhr.onload=function(){
        if(this.status==200){
            callback(this.response);
        }
    }
    xhr.send();
}  
//调用回调函数 获取到返回值并输出
ajax("http://localhost:5000",(data)=>{
    console.log(data);
})
ajax("http://localhost:5000/list",(data)=>{
    console.log(data);
})
```

###### Promise

```js
//原生的一个promise
var ii = new Promise(function (reslove, reject) {
    fs.readFile('./hello.txt', (error, data) => {
        console.log(data.toString())  //
    })
    console.log("执行了");
    reslove("成功操作");
    reject("出错了")
}).then((res)=>{
    console.log(res);
    console.log("res执行了");
}).catch((err)=>{
    console.log(err);
    console.log("这里是err执行了");
})
执行过程 先执行函数主体里面的内容 成功执行then 失败执行catch 
如果这两个函数没有返回值的话 那么吧这个函数赋值给别的函数 也不会有值 
成功 =>读取文件=> 执行了=> 打印res 就是resolve里面的内容‘成功操作’=> res执行了
失败 =>读取文件=> 执行了=> 打印err 就是reject里面的内容‘出错了’=> 这里是err执行了
then 接收两个参数
//抛出异常
new Promise((res, rej) => {
  console.log("thos1");
  rej("ok1");
})
  .then((res) => {
    console.log(res);
    return res;
  })
  .catch((err) => {
    console.log(err);
    // throw new Error("err");
    // return Promise.reject("错误");
    return Promise.resolve("正确");
  })
  .catch((res) => {
    console.log(res);
  })
  .then((ress) => {
    console.log(ress);
  });
//停止promise
Promise.resolve()
  .then(() => {
    console.log("ok1");
    return new Promise(() => {}); // 返回“pending”状态的Promise对象
  })
  .then(() => {
    // 后续的函数不会被调用
    console.log("ok2");
  })
  .catch((err) => {
    console.log("err->", err);
  });

```

###### all all settled race

```js
/allsettled  输出一整个数组 无论错误正确
let p1 = new Promise((resolve, reject) => {
  resolve("ok1");
});

let p2 = new Promise((resolve, reject) => {
  resolve("ok2");
});
let p4 = new Promise((resolve, reject) => {
  resolve("ok");
});
let p3 = new Promise((resolve, reject) => {
  reject("rej");
});
Promise.allSettled([p1, p2, p3, p4])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
[
  { status: 'fulfilled', value: 'ok1' },
  { status: 'fulfilled', value: 'ok2' },
  { status: 'rejected', reason: 'rej' },
  { status: 'fulfilled', value: 'ok' }
]

/all 有一个错误就走错误的回调 否则输出一个数组
Promise.all([p1, p2, p4])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
//[ 'ok1', 'ok2', 'ok' ]
/race 就看最快的哪一个 成功就成功 失败就失败
Promise.race([p1, p2, p4])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
//ok1
```

###### 发布订阅模式 

vue里面的$emit $on 

###### generator

es6引入的 主要用于异步编程 使用的yeild语句 封装一个异步任务 异步任务的容器 返回一个generator 的实例

每次调用next方法 会返回一个对象 表示当阶段的信息 

value 值

done 状态 true 执行完了 false 还没执行完 generator函数

```js
const fs = require('fs')

function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        });
    }).then((res) => {
        console.log(res.toString());
    })
}

function* uu() {
    yield read('./txt文件/hello.txt');
    yield read('./txt文件/bye.txt')
}
var obj = uu();

//第一个next 做第一件事 第二个做第二件事 最后一个 直接退出了
// console.log(obj.next());  { value: Promise { <pending> }, done: false }
// console.log(obj.next());  { value: Promise { <pending> }, done: false }
// console.log(obj.next());  { value: undefined, done: true }
//这个函数 以指定的周期来调用里面的表达式
setInterval(() => {
    // obj.next();
    console.log(obj.next());
},2000)

//set函数的值
{ value: Promise { <pending> }, done: false }
这是hello文件里面的内容
{ value: Promise { <pending> }, done: false }
这是bye文件里面的内容
{ value: undefined, done: true }
```

###### aysnc await

generator+promise 的语法糖

```js
const fs = require('fs')

//aysnc await
function read(url) {
    return new Promise((resolve, reject) => {
        console.log("执行了promise函数");
        fs.readFile(url, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        });
    }).then((res) => {
        console.log(res.toString());
        return res;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}

async function yy() {
    const a = await read('./txt文件/hello.txt');
    console.log(typeof (a));
    console.log(a);
    const b = await read('./txt文件/bye.txt');
    console.log(typeof (b));
    console.log(b);
}
yy();
```

捕捉函数的错误

```js
const fs = require('fs')

//使用aysnc await捕捉函数的错误  这个函数也需要是promise 类型的函数
function read(url) {
    return new Promise((resolve, reject) => {
        console.log("执行了promise函数");
        fs.readFile(url, (error, data) => {
            if (error) {
                reject(error);
                // return;
            }
            resolve(data);
        });
    })
}
async function tt() {
    try {
        const a = await read("./txt文件/hello.txt");
        console.log(a+"到await了");
    } catch(e){
        console.log(e);
    }
}
tt();

```

当然 then 和catch 也可在await那里写  aysnc 一般放在一个自执行函数里面执行

```js
const fs = require('fs')

//使用aysnc await捕捉函数的错误  这个函数也需要是promise 类型的函数
function read(url) {
    return new Promise((resolve, reject) => {
        console.log("执行了promise函数");
        fs.readFile(url, (error, data) => {
            if (error) {
                reject(error);
                // return;
            }
            resolve(data);
        });
    })
}
//放在内置的then catch 里面执行
async function tt() {
    const a = await read('./txt件/hello.txt').then((res) => {
        console.log(res + "这是内置的then");
        return res
    }).catch((err) => {
        console.log(err + "内置的catch");
        return err
    })
    console.log(a);
}
tt();

```

###### 拓展运算符

用来收集或者展开 	...

###### 防抖和节流

- 在一定的时间间隔之内 通过settimeout 将多次触发变成一次触发

```js
debounce，去抖动。策略是当事件被触发时，设定一个周期延迟执行动作，若期间又被触发，则重新设定周期，直到周期结束，执行动作。 这是debounce的基本思想，在后期又扩展了前缘debounce，即执行动作在前，然后设定周期，周期内有事件被触发，不执行动作，且周期重新设定。
var submit = document.getElementById("submit");
submit.addEventListener('click', debonce(fn));
//第一次点击也会延时
function fn() {
    console.log("这就进行了一次操作");
}
function debonce(obj) {
    var t = null;
    return function () {
        if (t) {
            clearTimeout(t);
        }
        t = setTimeout(() => {
            obj.apply(this,arguments)
        }, 1000);
    }
}
//改进一下 第一次就可以触发
function debonce(obj) {
    var t = null;
    return function () {
        if (t) {
            clearTimeout(t);
        }
        if (!t) {
            obj.apply(this, arguments);
        }
        t = setTimeout(() => {
            t = null;
        }, 1000);
    }
}
```

###### 节流 减少一段时间内的触发频率

```js
throttling，节流的策略是，固定周期内，只执行一次动作，若有新事件触发，不执行。周期结束后，又有事件触发，开始新的周期。 节流策略也分前缘和延迟两种。与debounce类似，延迟是指 周期结束后执行动作，前缘是指执行动作后再开始周期。
function save(fn) {
    var begin = 0;
    return function () {
        var cur = new Date().getTime();
        if (cur - begin > 2000) {
            fn.apply(this, arguments);
            begin = cur
        }
    }
}
```

###### 发布订阅

```js
const fs = require('fs')

function Events() {
    this.callback = [];
    this.result = [];
}
Events.prototype.on = function (callback) {
    //把传入的回调函数全都储存起来  这个函数就是订阅
    this.callback.push(callback);
}
Events.prototype.emit = function (data) {
    //把传入的数据储存起来  这个函数就是发布
    this.result.push(data);
    //遍历 callback数组 挨个执行 可以filter吗？？
    this.callback.forEach((c) => c(this.result))
}
//new一个实例出来
let e = new Events();
//设置on事件 就是订阅
e.on((data) => {
  //当length=3 再发布 
    if (data.length==3) {
        console.log(data.toString());
    }
})
// 三个订阅 每一次订阅都有一次发布
fs.readFile('../其他/this.txt', (err, data) => {
    e.emit(data);
})
fs.readFile('../其他/this.txt', (err, data) => {
    e.emit(data);
})
fs.readFile('../其他/this.txt', (err, data) => {
    e.emit(data);
})
```

###### 观察者模式

```js
    //观察者 被观察者 被观察者数据改变了 通知观察者
    function subject() {
      this.observers = [];
      this.status = "心情美丽"
    }
    subject.prototype.attach = function (obj) {
      //存放所有观察者
      this.observers.push(obj);
    }
    subject.prototype.setstatus = function (e) {
      //状态改变
      this.status = e;
      //通知观察者
      this.observers.forEach((obj) => {
        obj.updata(e)
      })
    }

    function observer(name) {
      this.name = name;
    }
    observer.prototype.updata = function (e) {
      console.log(`${this.name}说：宝贝呀${e}`);
    }
    let baby = new subject();
    let o1 = new observer("baba");
    let o2 = new observer("mama");
    baby.attach(o1);
    baby.attach(o2);
    baby.setstatus("心情不好了")
```

###### 数据劫持

```js
  var obj = {};
  var value = "this";
  //Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
  //第一个参数是 一个对象
  //第二个参数是 对象上设置的参数名
  //第三个参数 接收 set get方法 configrable 描述属性是否配置，以及可否删除 enumerable 描述属性是否会出现在for in 或者 Object.keys()的遍历中
  Object.defineProperty(obj, "msg", {
    set: function (value1) {
      console.log("set方法执行");
      //赋值
      document.querySelector("#div").innerHTML = value1;
      // 把新的值赋值给value
      value = value1
    },
    get: function () {
      console.log("这是get");
      //要有返回值 返回值 在外部定义好
      return value;
    }
  })
  var btn = document.getElementsByTagName('input')[0];
  btn.addEventListener('input',function(e){
    //e.target 就是这个元素节点 上面的属性 
    obj.msg = e.target.value
  })
```

###### 快速排序

```js
function quickSort(arr){
    let base_num=arr[0];
    let left_arr = [];
    let right_arr  = [];
    //找基准数，把小于基准数的放在左边，大于基准数的放在右边
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<=arr[0]){
            //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
            //pop() 方法用于删除并返回数组的最后一个元素。
            left_arr.push(arr[i]);
        }
        else{
            right_arr.push(arr[i]);
        }
    }
    //对左右数组分别进行排序， 规则是数组内元素数大于2 注意接收参数
    if(left_arr.length>2)
        left_arr = quickSort(left_arr);
    if(right_arr.length>2)
        right_arr= quickSort(right_arr);
    //合并返回排序好的左数组，基准数，右数组
    //concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    return left_arr.concat(base_num,right_arr);
}
console.log(quickSort(arr)); 
```

###### 迭代器

```js
//实现一个迭代器
function fn(obj) {
  let index = 0;
  return {
    next: function () {
      return index < obj.length
        ? { value: obj[index++], done: false }
        : { value: undefined, done: true };
    },
    return: function () {
      return { done: true };
    },
  };
}
let arr = [1, 2, 3, 4, 5];
let oo = fn(arr);
console.log(oo.next());
console.log(oo.next());
console.log(oo.next());
console.log(oo.next());
console.log(oo.next());
console.log(oo.next());
```

