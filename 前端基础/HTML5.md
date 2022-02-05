###### underscore

  <!-- 一整套函数式编程的实用功能 -->

    <script src="/Users/macbookpro/Desktop/案例/JS/underscore-min.js"></script>

 <script>
        // underscore 函数库暴露的是一个下划线函数
        console.log(_);
        // 随机数方法 Math.random()
        console.log(_.random(10,99));
        //计算数组最大值  min函数计算最小值 nuiq 去重 
        console.log(_.max([1,2,3,4,5,6,7,8,9]));
    </script>
###### html   块标签和行标签

块标签：占满整行，宽度就是容器的宽度

div  h  p  form  

行标签：不会换行，宽度由内容决定

span img a

文本内容本质上就是行标签,在使用伪类的时候，冒号紧根，不要留空格，很可能不好使.

块元素可以使用 margin auto 来进行居中。

###### jQuery-UI

<!-- 引用jq ，jq一定要在前面 -->

<script src="/Users/macbookpro/Desktop/案例/JS/jquery-3.6.0.js"></script>

<!-- 引用jqUI 这个库依赖JQ  特效之王-->

<script src="/Users/macbookpro/Desktop/案例/JS/jquery-ui.min.js"></script>

 <div id="cue">
        <p>这是一个可拖动的</p>
    </div>
    <ul id="cur">
        <li>走了云的天空还任性</li>
        <li>是否它相信下一次的相遇</li>
        <li>直到最后</li>
        <li>一无所有</li>
        <li>也无所畏惧</li>
    </ul>
</body>  

 <script>
    // id选择器用# ；类选择器用 .  拖拽
    $("#cue").draggable();
    // 排序拖拽  无序列表
    $("#cur").sortable();
</script>

#### HTML5

超文本标记语言 ，第五次重大修改

 新增：  结构层，样式层，行为层   一共555个。

不同的浏览器厂商兼容的知识点个数不同，google 的比较多

###### 新增了七个布局标签：

都是闭合元素，块元素，使用与div是一样的 。在解析时速度会快一些，有助于网站优化。

头部 		header

底部		 footer

重要 		main

侧边栏 	aside

段落 	    section

文章 		article

导航 		nav  

语义化标签

address

code

details

summary

details 里面嵌套 summary

**pre**  预保留格式标签

文本怎么写在代码里，标签就怎么显示

**ruby**  经常结合 rt 标签一起使用 ，主要作用是可以给文字加上汉语拼音

ruby里面嵌套rt

template  在vue框架里面出现 

###### 新增的表单元素

range  滑动条  min max value 

color 可以进行选择颜色

date  日历

```
<body>

​    <input type="color" name="" id="">

​    <br>

​    <input type="date" name="" id="">

​    <br>

​    <input type="range" name="" id="">

​    <br>

​    <input type="week" name="" id="">

​    <br>

​    <input type="time" name="" id="">

​    <br>

​    <input type="email" name="" id="">

​    <br>

​    <input type="submit" name="" id="">

​    <br>

​    <input type="url" name="" id="">

​    <br>

​    <input type="search" name="" id="">

​    <br>

​    <input type="number" name="" id="">

​    <br>

</body>

###### 
```

###### 表单元素新增的属性

placeholder  占位符   经常结合文本框一起使用。

用来展示提示的文字。

disabled 不可使用 ，属性值可以不写。可以结合任意的表单元素来使用

autofocus  自动聚焦，经常结合文本框一起使用，实现自动光标聚焦。

readonly 只读 只能读，不可以写东西。

标签：

lable。经常结合表单元素，单选，复选一起使用。选中文字可以选中或者取消选中。

datalist   input标签的 id 应该与datalist的id 一致。有些类似下拉菜单。



##### 视频与音频

新增了双闭合标签   video 

可以支持展示视频格式 ： mp4  ogg  webM

video 的属性

`controls 显示默认控制条`

`poster 海报 默认封面`

`autoplay 自动播放`

`muted  静音`

`loop 让视频循环`

可以通过js来进行一系列的操作，可以不写属性。 


<script>
    // querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
    var play = document.querySelector("#cue");
    var video = document.querySelector("#cow");
    var pause = document.querySelector("#cur");
    // 绑定事件
    play.onclick = function(){
        // play 播放 pause暂停
        video.play();
    }
    pause.onclick = function(){
        video.pause();
        // video.currentTime();
        // video.duration();
        // video.volume();
    }
    //当视频开始播放时执行
    video.onplay = function(){
        //alert("请欣赏精彩时刻！");
        document.body.style.backgroundColor = ' pink'
    }
    //当视频暂停时执行
    video.onpause = function(){
        document.body.style.backgroundColor = 'palevioletred';
    }
    //当播放时间发生变化时执行
    video.ontimeupdate = function(){
        //console.log("视频播放的事件发生了变化")
    }
</script>



`video.currentTime();`视频播放时间

`						video.duration()视频总时间`

`					video.volume();视频音量 0.5 总音量的一半`



音频：

audio 双闭合标签。

常用的格式 mp3 ogg 

爱给网       上可以找到许多素材

音频没有海报，封面，其他与视频类似。

###### 浏览器储存功能

分为两种：本地存储

​				   会话存储

如果想持久化的在浏览器中存储数据， 本地存储localstroage.setItem("x","x");  存储的数据只能是字符串。

JSON是内置对象，可以直接使用，

JSON.stringify([1,2,3,4,5,6,7])

JSON.parse 可以将数据变为引用类型。

在工作当中，一般会用来存储用户名

会话存储 ，sessionstorage来实现。方法与本地存储几乎是一摸一样的

###### 属性选择器

p[v-if]  			带有v-if自定义属性

p[v-if= 'cue']		带有v-if= 'cue'这样的标签

p[v-if^='qq']			带有v-if 并且以 qq开头 

p[v-if$='lion']			带有v-if 并且以tion结尾

p[v-if*='ff']             带有v-if并且属性值含有ff

伪类选择器：

hover 鼠标移上去

disabled  不可使用

focus 聚焦

empty 匹配空文本标签

border-radius 设置标签为圆角

阴影  box - shadow 

三个参数，右侧阴影长度

​					下侧阴影长度

 					模糊程度

​					颜色

盒子的阴影可以有多个，多个之间要用，隔开。

inset 内阴影 。

text - shadow 文本阴影

使用方法和盒子阴影一致。文本阴影是没有内阴影的。

###### transition 过渡

 过渡动画必须要有动画触发。

transition - property  : 属性all

duration 过渡总时间

timing- function 过渡动画速率

delay 过渡动画延迟时间

速率的属性值, linear 匀速。

###### transform 变换

可以实现元素的2D 3D 的变换。

2D 变换 

**scale** 缩放 scale (2) 放大2倍

scale(.5,.5)宽度高度都变换0.5倍

**rotate** 旋转  按照图形的几何中心进行旋转

`transform ： rotate（10deg）；`

旋转10 度

**translate** 平移

第一个参数是X轴平移 第二个是Y轴的变换

平移的单位是px

3D 变换

如果想看到3D效果 ，需要父子盒子嵌套使用。

3D旋转： rotate X ，Y，Z 。

景深 perspective 单位 px

3D 平移 ：translate X，Y，Z。

animation 动画

动画名称，时间，速率，延迟时间，执行次数。

name  duration   timing-function  delay （属性值可以是负数） iteration - count 

使用分为两部分 。 声明 调用 。

webkit 谷歌

moz 火狐

ms IE 

@ - webkit - keyframes

animation  - direction  alternate ，反向执行。

animation-play-state  running 

 paused 停止





DOM 

position ： fixed ； 固定位置，不会随滚动条移动