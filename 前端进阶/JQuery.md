# jQuery

jQuery是一个js库。

##### write less do more

bootcdn 里面很多cdn

可以处理html/jsp/xml ，css，dom,事件，实现动画效果。

*dom对象 ：*

var obj = document.getElementById("txt");

*jQuery对象：*

jquery表示的对象都是数组

var $jobj = $("#txt")

dom对象可以和jquery对象相互转化。

**dom转化为jquery ：**

$(dom对象)

```js
var myvideo = document.querySelector('video')
$(myvideo)
```

**jquery转化为dom：**

从数组中获取第一个对象，第一个对象就是dom对象。

```
[0] 或者get(0)
```



##### 选择器

<u>id选择器</u>：

$("#dom对象的id值") ，id只能有一个

<u>class选择器：</u>

$（“.class样式名”）

<u>标签选择器</u>

$("标签名称")

应用 ： `var obj = $("#id")`

`obj.css("background","red")`

$(" * ") 选取页面中所有的DOM对象

$(“#id ，.class ,标签名”)  组合选择器

 层级选择器：

```js
子代选择器 $('ul>li');
使用> 获取亲儿子层级的元素，注意 并不会获取孙子层级的元素
后代选择器 $('ul li');
使用空格 代表后代选择器 获取ul 下面所有的li元素 包括孙子等
```

筛选选择器：

```js
第一个   $('ul li:first').css("color","red");
索引2   $('ul li:eq(2)').css("color","red");
奇数  $('ul li:odd').css("color","red");
```

表单选择器： 根据type值来进行定义的

```js
siblings() 除了这个 其他的兄弟

链式编程：$(this).css("color","red").siblings().css("color","");

给元素加动画效果 不要忘记stop 否则排队执行 很乱

获取属性值：
获取元素固有的属性值：
$('#me').prop("checked")
获取元素的自定义属性：
$('div').attr("index")
想修改的话后面直接跟个值就OK了
```

$("：type属性值")

var text = $(":text").val();

只能获取dom数组中第一个对象的value属性值

<input type="button"/>

##### 过滤器

在定义了dom对象后，根据一些条件来筛选dom对象。不能单独使用 ，要和选择器一起使用。

$("选择器：first")

​                    last 

​					eq （指定下标）

​					lt（获取小于下标的所有对象）

​					gt（获取大于下标的所有对象）

##### 事件：

jquery在代码执行过程中邦定事件，很灵活。



$(function(){

//当页面dom事件加载后，给对象绑定事件，因为此时button对象已经在内存中创建好了，才可以使用。`

$("#id").click(function(){

//方法体

var obj = $("#id");

obj.css("background","red")

})

})

表单属性过滤器：

根据表单中dom对象的状态情况，定位dom对象

`$(":text:enabled") 选择可用的文本框`

`$(":text:disabled") 选择不可用的文本框`

`$(":checkbox:checked") 复选框中选中的元素`

``选择器>option:selected 选择🈯️定下拉列表被选中的元素`

##### 函数

1.val

操作数组中DOM对象的value属性。

$(选择器).val() : 无参调用方式，读取数组中第一个DOM对象的value属性

$(选择器).val(值) ： 有参调。对数组中所有DOM对象的value值进行统一的赋值

var text = $(":text").val();

只能获取dom数组中**第一个**对象的value属性值

 $(":text").value("新的值")；

将所有的text值设置为新值

2.text

$(选择器).text() : 无参调用方式，读取数组中所有DOM对象的文字显示内容， 将得到的内容拼接成一个字符串返回。

$(选择器).text(值) : 有参调用方式，对数组中所有DOM对象的文字内容显示进行统一赋值

3.attr

$(选择器).attr(“属性名”) : 获取第一个对象的属性值

$(选择器).attr(“属性名”，“值”) : 对数组中所有的DOM对象的属性值设为新值

```
remove() 		  删除dom和子对象`

empty()    		 删除dom 的子对象`

append()		  添加dom对象`

html()          操作标签文本 想当于innerHTML 传递参数就是改写所有参数的值
```



4.each()

循环函数， 可以对数组，json，dom 数组做循环处理。

var arr = 【1,2,3,4】

var json = {"name":"lisa","name":"jack"}

var obj = $(": text")

语法 ：$.ecah(循环的内容，处理函数) ：

表示使用jquery  的 each 函数，循环数组，没给数组成员，都会执行后面的处理函数一次。

处理函数

function  函数名称(index , emlemnt){}

循环变量 数组成员

jquery对象.ecah(循环的内容，处理函数) 

 

事件绑定

$("选择器").on("click",事件的处理函数)

##### jquery处理AJAX

$.ajax()          核心函数

$.post()		 用post发送ajax请求

$.get()		   用get发送ajax请求

$.ajax 函数是一个json 的结构

```
$.ajax({

​		data : 可以是字符串，数组，json，表示请求的参数和参数值。

​			datatype ： 表示期望从服务端返回的数据格式。

​			error ：一个function ，表示请求发生错误时，执行的函数。、

​			success： 一个function，表示请求成功时执行的函数

​			URL ：请求的地址

​			type ： 请求方式。默认为get。

})
```

