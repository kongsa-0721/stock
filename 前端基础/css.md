# css

cascading style sheet ：层叠样式表

css可以用于美化网页，还可以进行网页布局

#### css的学习

##### 1、css书写规则

行内样式，内嵌样式，外链样式

##### 常用样式 

```
<div style="color: red; font-size: 66px">这是一段文字</div>
```

**color** 设置文字颜色  cyan 青色

如果设置多次，右侧覆盖左侧

如果属性值为十六进制数字，以#开头，;结束。英文不区分大小写

**font-size** 字体大小

属性值由数字加px单位。

h系列的标签是有加粗效果的

**font-family**   字体系列

主要作用：设置文字字体。

`<div style="font-family: '楷体'; font-size: 66px;">这是一段文字</div>`

font-family可以设置多个字体，多个字体用逗号隔开

**盒模型样式**

width 设置元素的宽度

height 设置元素的高度

background - color 设置背景颜色

##### **内嵌样式**

语法书写规则：

```html
	<style >
		div{
			color: pink;
			font-size: 23px;
		}
	</style>
```

在头标签之中插入以上代码，可以对div标签进行批量操作

##### 选择器

selector 是css层叠样式中的一种模式，

分为**两种**：基础选择器：标签，id，类，通配选择器

​					高级选择器：后代，交集，并集选择器

**标签选择器**：通过标签名字，选择并添加样式。

**id选择器**：首个字符必须是英文，后面可以是数字下划线，区分大小写，在style里用#加上id的值，id的值是唯一的

**类选择器**：

在style里.类的值。区分大小写

一个标签可以有多个class值，多个之间用空格隔开，

**后代选择器**

先选中祖先元素 ，依次往下找，用**空格**隔开。

```html
div ul li p{  }
```

可以省略一些祖先标签的选择器，祖先标签可以用ID，class 。

**交集选择器**

被选中的标签需要同时符合多个基础选择器。之间*<u>**不需要**</u>*空格。

**并集选择器**

由基础选择器之间用逗号隔开，代表这些选择器合并一起，添加相同的样式。

可以结合其他高级选择器一起使用

`div h2,p{ }`

#### css两大特性：继承性，层叠性🐣

**继承性**

```html
*{

margin:0px;

padding:0px;

}
```

去除间距

子标签可以继承一部分祖先的style

**层叠性**

如果网页中的标签同时被多个选择器选中，css会通过一些手段，将最后一个选择器覆盖掉其他选择器

基础选择器：***id>class>标签>通配符***

判断每个选择器的个数，来进行排序，权重一样听后者的。

#### 字体样式

color = `三色素rgb（0，0，0）`

`font-size = 200% ； 5em；      `

继承body字体的200%  ，5em 为默认的 五倍。

`line-height` 

行高，经常用来制作固定宽度和高度的标签，让文字垂直居中

让行高和标签的高度一样高，文字就可以垂直居中啦

`font-weight`

可以让文字加粗，属性值是纯数字（1～700，没有单位，浏览器默认是400）或者英文（normal 400，bold 700）

***font (style，weight，size ， height，family)***

font是一个复合样式，字体大小和行高之间要有斜杠。

`font ：italic bold 50px/300px ‘楷体’;`

字体倾斜，加粗，位置可以互换。

#### 文本相关的样式

**text - align** 设置网页中文本水平对齐的方式。

left 靠左

center 中央

right 靠右

默认情况下，网页文本靠左对齐，不论是一行还是多行，都可以控制。

**text - decoration**  给文本添加线条修饰。

none 没有线条修饰

overline 文本上方有线条修饰

line - through 文本有中线的修饰

underline 文本有下划线的修饰

**text - indent**   文字缩进

px 单位 代表首行向右锁进？像素

em 单位 缩进？个字符

#### 盒模型

盒模型就是网页中的标签在网页中占有的**实际区域**。

**width 宽度**

**height 高度**

**padding 内边距**

**margin 外边距**

**border 边框**

元素**高度**和宽度的属性值可以写百分比，是按照父元素的百分比来进行访问的。会随着父元素的宽度和高度而随之改变。

body为网页的主体，默认宽度为用户浏览器的宽度。

类似div这种容器级别的标签，默认和父元素一样

**padding** 是一个复合样式，是由

padding - top 

padding - right 

padding - bottom

padding - left 

`padding ： 10px 20px 30px 40px` 上右下左， 用***空格***隔开

`padding ： 10px 20px 30px` 左右都是20。  上 ， 左右，下

`padding ： 10px 20px`        上下：10          左右：20

`padding ：10px`      上下左右都是10px。

**border边框**

属性值 ，三个属性值之前用空格隔开

宽度 线条设置 颜色

solid 实线

dashed 虚线

`border:10px solid red;`

`border-radius:25px;`   圆角边框

border 也是一个复合样式。 `border - width，style，color。`

`border - width 10px 20px 30px 40px`   与padding类似

`border - style solid dashed`     与padding类似

`border - color : red orange`     与padding类似

**margin 外边距**

`margin： 10px 20px 30px 40px` 上右下左 

margin ：auto。设置居中

外边距是用来设置标签与标签之间的距离。

外间距合并 以最大的间距为主 上下会合并 块级元素的垂直相邻外边距会合并 

浮动元素的外边距也不会合并 

###### 浮动属性：

```html
float:none/left/right
任何元素一旦浮动 变为块级元素 可以设置宽高 子元素浮动 父级元素就会坍塌
1.父类 overflow:hidden
2.设置父类的宽高 
3.父类也浮动
别的元素浮动对自己造成了影响
1.给自己设置浮动
2. 给自己添加属性 clear:both /left/right
```

书写css代码：

在头部引入link标签

```html
<link rel="stylesheet" href="./css/index.css"/>
```

###### 定位属性

```
position:absolute/relative/fixed
```

**relative** 相对定位   是以当前自己为参照 进行定位 原来的位置还会占据
**absolute**  绝对定位  参考点是 浏览器的（0，0） 点 不会占据原来的物理位置 如果父元素也进行了定位设置  会以父元素作为参考点 如果元素的外层元素 没有设置position定位 那么该元素将寻找距离自己最近的其他设定过position的嵌套层 外层元素作为参照物
**fixed** 固定定位  直接定在这个位置一动不动

z-index 距离z轴的层数 智能支持定位元素 



###### display属性

```
display:inline/block/inline-block/table-cell/none/flex
```

inline 行内元素

block 块级元素

inline-block 行内块级元素 既有宽高属性 且不会独占一行 

table-cell 作为单元格

none 不展示 不占据原有的物理位置

flex 弹性盒子

visibility :hidden/visible 隐藏/展示元素 但是占据原有的物理位置⁄

###### 弹性盒

 display : flex

可以设置最小宽度 

 设置父元素的display属性为flex 

设置justify-content 水平对齐方式

|     值     | 描述               |
| :--------: | ------------------ |
|  flex-end  | 项目位于容器的结尾 |
| flex-start | 默认               |
|   center   | 位于中心           |

设置align-items 垂直对齐方式

| 值         | 描述           |
| ---------- | -------------- |
| stretch    | 默认           |
| center     | 位于容器的中心 |
| flex-start | 位于容器的开头 |
| flex-end   | 位于容器的结尾 |

设置flex-wrap在必要的时候换行 



响应式设计 ：只根据视口大小为用户提供匹配的视觉效果



伪类的顺序

```css
a:link {/* 未访问过的超链接的样式 */}
a:visited {/* 访问过的超链接的样式 */}
a:focus {/* 拥有焦点的超链接的样式 */}
a:hover {/* 鼠标悬停的超链接的样式 */}
a:active {/* 被用户输入激活的超链接的样式 */}
```

伪类：伪类的存在就是通过选择器找到那些不存在于DOM结构中的信息 以及 不能被常规CSS选择器选择到的信息

伪元素 ：在DOM中创建了一些抽象的元素，这些元素不存在与文档语言中，由两个：：开头

伪类本质上是为了弥补CSS选择器的不足，以便获取到更多信息

伪元素本质上是创建了一个有内容的虚拟容器 可以同时使用多个伪类 但是只能同时使用一个伪元素