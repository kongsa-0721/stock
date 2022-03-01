### 遇到的一些问题 解决的方案及技巧

​                               	[穷则思变](https://stackoverflow.com/)

#### 页面布局/渲染方面

- 查看网页中的dom节点

```tsx
function countNodes(node) {
  var count = 1;
  if(node.hasChildNodes()) {
  	var cnodes = node.childNodes;
  	for(var i=0; i<cnodes.length; i++) {
  		count = count + countNodes(cnodes.item(i))
  	}
  }
  return count;
}
countNodes(document.body)
```


- 在鼠标移动的时候避免选中文字

```tsx
//鼠标移动过程中禁止选中文字
var selection = window.getSelection();
selection!.removeAllRanges();
或者 css 
user-select : none;
//打印一下选中的
console.log(window.getSelection().toString());
```

- 大布局 下面的div覆盖上面的div但是不影响上面

```css
/*第一个 可以不设置absolute*/
element.style {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    position: absolute;
  	top: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
  	min-height: 100%;
  	outline: none;
  	user-select: text;
  	overflow: hidden;
}
/*第二个*/
element.style {
    flex: 1 1 0%;
    position: relative;
    outline: none;
}
/*第三个*/
element.style {
    display: flex;
    flex: 0 0 auto;
    position: relative;
    height: 300px;
    z-index: 80;
  	outline: none;
}
```

- 注意z-index 

尤其是在元素重叠显示的时候 加上z-index可能会导致后层元素的动作无法被触发

注意外层元素的overflow属性 不要盲目在z-index上找错误!

- 扩充鼠标样式的范围

使用伪元素扩充鼠标的样式 before after

- 去除scale抖动

父元素加padding hover去除这个padding

加上margin  或者transformz(0)开启硬件加速

```css
-webkit-transform-style: preserve-3d;
-webkit-backface-visibility: hidden;
-moz-backface-visibility: hidden;
-ms-backface-visibility: hidden;
```

- and Collapse 按钮控制展开 

就是子元素禁止冒泡事件 用div给它包裹起来 禁止冒泡 

- span 换行 遇到容器的边缘就换行 不设置容器高度

```css
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
```

- 文字超出部分显示···

```css
/*必须是块元素才能设置宽度 才可以使用*/
overflow:hidden; /*超出的文本隐藏*/
text-overflow:ellipsis; /*溢出用省略号显示*/
white-space:nowrap; /*溢出不换行*/
/*两行*/
overflow: hidden;
text-overflow: ellipsis;
display:-webkit-box; /*作为弹性伸缩盒子模型显示*/
-webkit-box-orient:vertical; /*设置伸缩盒子的子元素排列方式--从上到下垂直排列*/
-webkit-line-clamp:2; /*显示的行*/
```

- 常用的几个伪类

link 表示的是正常情况下链接的样式。

visit 代表链接访问后的样式，则链接一旦被访问，则之后它的样式就会是你所设置的visited样式。

focus 在一个元素成为焦点时生效，用户可以通过键盘或鼠标激活焦点。

active 在一个元素处于激活状态（鼠标在元素上按下还没有松开）时所使用的样式。

hover 理论上任何元素都可以使用的，focus多是针对表单的，如input等 。而active多用于链接。

L V F A H 

- 对于span标签有时候莫名其妙出现的光标 比如在用UI写页面的时候

  caret-color: transparent; 
  
- transition动画效果

```css
:checked::before {
  left: 10px;
}
::before {
  content: "";
  left: 0;
  transition: left 0.4s;
}
```

要有前后位置的对比才可以 之前是0 后来变成了10 过度事件0.4s

| transition(接收四个参数)   | 参数作用                                   |
| -------------------------- | ------------------------------------------ |
| transition-property        | 用过渡效果的 CSS 属性的名称                |
| transition-duration        | 完成过渡效果需要花费的时间（以秒或毫秒计） |
| transition-timing-function | 规定过渡效果的速度曲线                     |
| transition-delay           | 规定过渡效果何时开始（以秒或毫秒计）       |

- translate会触发回流重绘吗

渲染流水线是这样的顺序：重排 -> 重绘 -> 合成

transform: translate是直接合成，跳过了前面的重排重绘。

所以折叠面板不能使用这个 可以关闭起来 但是展开就不会再向下开辟空间了

- 两个行内元素错位不能对其的解决方法

vertical-aligin解决 可以设置成为top

1、两个行内元素都设置 vertical-align:middle;

2、两元素设置浮动

3、不对齐原因是基线不对齐; 如果第一个div没有文字 加个字就可以

4、可以使用flex布局 使用 justify-content:space-between

- 关于行内块元素

不可以设置float float会将元素设置为block 会出现4px的偏移

- border-box 适配

```css
.antdcom {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
} 
```

- styled-components

添加属性  给div添加 tabIndex属性

```tsx
const Div = styled.div.attrs(()=>({tabIndex:0}))
```

条件渲染属性 类型约束 css约束

```tsx
const DivCss = css`
  height: 100px;
  width: 100px;
`;
interface Iprops {
  show?: number;
}
const Div = styled.div<Iprops>`
  ${DivCss}
  display:${(props) => (props.show ? "block" : "none")}
`;

```

#### Git 

- git gitlab 

| git命令                                                      | 对应的操作                                                   |
| ------------------------------------------------------------ | :----------------------------------------------------------- |
| git init                                                     | git初始化一下 (记得commit一次)                               |
| git branch kongsa                                            | 创建本地分支kongsa                                           |
| git checkout kongsa                                          | 本地切换到kongsa分支上去                                     |
| git remote add **origin** https://gitee.com/rust_usth/dust.git | 链接远程仓库                                                 |
| git remote -v                                                | 查看远程链接地址的一些信息                                   |
| git branch -a                                                | 查看所有(本地 远程)分支                                      |
| git pull **--rebase** **origin** test-maomao-0321            | 第一次拉取 mao mao分支                                       |
| git push -u **origin** master:test-maomao-0321               | 第一次推送本地的分支去maomao -u 确定push关系                 |
| git push **origin** kongsa:kongsasa                          | 把本地分支推送到远程kongsasa上去 第二次就不用 -u             |
| git push **origin** --delete kongsasa                        | 删除远程分支kongsasa                                         |
| git push **origin** :kongsasa                                | 删除kongsasa 推送空的去kongsasa上 相当于删除                 |
| git clone **-b master** http://8.141.152.4/taco-fe/taco-fe.git | clone **master分支** 后期在clone就好啦 有时候clone也不一定能连接到远程 |
| **master ：test-maomao-0321**                                | 前面是自己本地的分支 后面是 远程的分支                       |
| git branch -M main                                           | 改名字 当前的分支名字改成main                                |
| git status                                                   | 查看当前的状态 貌似没什么大用 当你commit之后就看不到咯       |
| git commit                                                   | 提交 按 i 编辑输入 esc ：wq退出 然后再push                   |
| git commit -m "this is a commit"                             | 快捷方式                                                     |
| git pull origin test_kongsa_0322  --allow-unrelated-histories | 说明本地 远程都叫这个名字  允许不同项目之间的合并            |
| git clean -d -fx                                             | 删除没有git add 的文件 慎用 除非这个分支里面的东西不重要     |
| git push origin test:kongsa                                  | 就相当于在远程创建一个kongsa分支                             |
| git checkout -b kongsasa                                     | 在本地创建一个分支kongsasa                                   |
| git branch --set-upstream-to=origin/远程分支名  本地分支名   | 设置master对应远程的master 分支对应关系                      |

可能每一次都需要pull一下然后再push 也可能是我修改了远程的库 不是同步的所以要pull一下

merge的全过程 git remote -v

​							git add .

​							git status

​							git commit i insert esc :wq

​							git push origin master:kongsa

​							在网页中申请一个merge request 指定 reviewer

出现冲突 别人在你之前往进去提交了代码 就不能merge进去了 要先rebase一下

​						    git add. => git commit -m =>git pull =>git add .=>git commit -m=>git push=>merge

​							git pull 一下算了 然后提交一个新的分支进去 烦死了

​							git pull --rebase origin master 

​							拉取到最新的master分支 

​							然后你再开辟一个新的分支 再提交merge

​							我理解(提交完本地的更改之后)直接git pull --rebase -> 再git push 

- git更换远程的源

| git命令                                            | 对应的操作                         |
| -------------------------------------------------- | ---------------------------------- |
| git remote rm origin                               | 删除远程的源                       |
| git remote add origin xxx                          | 添加远程的源                       |
| git push origin master:kongsa                      | 把本地master分支推送到远程的kongsa |
| ssh密码忘记                                        |                                    |
| ls ~/.ssh                                          | 查看ssh是否存在                    |
| rm -rf ~/.ssh                                      | 删除文件夹                         |
| ssh-keygen -t rsa -b 4096 -C "这里是你的@邮箱账号" | 创建新的ssh                        |
| cat ~/.ssh/id_rsa.pub                              | **查看** 复制ssh                   |
| 粘贴到github                                       |                                    |
| git push origin master:kongsa                      | 重新push一次 输入yes               |
| cat ~/.gitconfig                                   | 查看个人信息/修改个人信息          |
| git config --global http.sslVerify false           | 关闭ssh                            |
| git log --pretty=format:"%an %ai %s "              | 在一行打印日志                     |
| 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           | to Img **token** in github         |
| --allow-unrelated-histories                        | 允许合并                           |
|                                                    |                                    |

- 查看作者kongsa-0721 一共提交了多少行代码

```
git log --author="kongsa-0721" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
kongsa-0721     added lines: 5957, removed lines: 733, total lines: 5224     87.69
//每个人的数量
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
hanshuai        added lines: 14279, removed lines: 2351, total lines: 11928  83.53
kongsa  				added lines: 3969, removed lines: 2343, total lines: 1626		 40.96
lijiaqi 				added lines: 3191, removed lines: 2236, total lines: 955		 29.92
tangmingqiu     added lines: 5454, removed lines: 1199, total lines: 4255    78.01
zhangqinyao     added lines: 826, removed lines: 50, total lines: 776				 93.94

added lines: 8183, removed lines: 4151, total lines: 4032  50%左右 0301日
```

代码重构率达到了60%

- 查看贡献前五名的作者

```
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5
```

#### React/Ts

- moment 库

对时间的操纵比较方便 时区 import 'moment/locale/zh-cn'

- Ts断言

可以使用 as 或者  ！

- TS严格模式编译不通过

一些文件可以加一个注解  // @ts-nocheck

在使用vite打包的时候 把tsconfig.json 的strict关闭

- 关于import语句报错 

const 语句 不可以写在import语句之前

import 有一些库的话 还要导入ts依赖 这个会有提示的

- react三目运算符以及dispaly控制显示/隐藏

三目运算符会卸载DOM，virtualDOM和真实DOM都会被写在，下次显示时会重新渲染，并重新执行组件的生命周期钩子函数 。removeElement/createElement

display:none DOM会保留在真实DOM中，只是不可见而已，再次显示不会执行生命周期

相比DOM的生成，显然display的方式的开支更小，性能好。但是如果有一些初始化是在钩子函数里的，还是要用三元运算符

- React props.children

children是一个数组 里面包含了一些根元素 tab切换用到了这个功能

- React动态添加类名

`["red","blue"].join(" ")`即可 用join方法 加入空格

- antd Tooltip

  他的文本可以是一个标签 可以添加样式`title={<span style={{ color: "#000" }}>{tooltip}</span>}`

- 在React中使用svg

方式 1

```tsx
import logo from  './logo.svg';
```

缺点在于不能在修改颜色，这里其实就是直接用 img 加载了 svg 文件

方式 2 【vite构建的项目不可以用】

```tsx
import {ReactComponent as ComLogo} from './logo.svg';
```

这时候 ComLogo就相当于一个组件 直接单标签使用 能用单标签全用单标签

- 在别的地方复制svg无法使用的问题

右键 copy innerHtml 放入空白文件 在svg标签里面加入

```html
xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"
```

命名空间

#### 服务器

- 打开 关闭Nginx

sudo nginx

sudo nginx -s stop

#### 电脑使用方面

- 常用的命令

| 命令                                  | 对应的操作           |
| ------------------------------------- | -------------------- |
| pwd                                   | 查看当前的路径       |
| ls                                    | 列出目录下的所有文件 |
| cd                                    | 进入文件夹           |
| diff -c                               | 比较两个文件         |
| cat                                   | 查看文件             |
| sudo chmod -R 777 文件名              | 赋权                 |
| ifconfig en0                          | 本机的IP地址         |
| /usr/local/MySQL/bin/mysql -u root -p | 打开本机数据库 mysql |
|                                       |                      |

- 恢复mac垃圾桶的设置 之前垃圾桶不保存东西

```shell
sudo rm -rf ~/.Trash
```

- sketch的问题 每次关闭之后就不能打开

终端输入

```shell
sudo xattr -d com.apple.quarantine /Applications/Sketch.app  
后面是sketch存放的路径 路径如果不知道 访达拖到终端里面自己会显示
```

- 查看/关闭 某一个端口号

```bash
lsof -i:3000

sudo kill -9 3000
```

- mac上查看环境变量

```
export
```

- 查看安装了什么npm 包 要看是在哪个版本之下

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

/usr/local/Cellar/nvm/0.38.0/versions/node/v10.15.0/lib
└── npm@6.4.1

/usr/local/Cellar/nvm/0.38.0/versions/node/v14.16.0/lib
├── http-server@14.0.0
└── npm@6.14.11

/usr/local/Cellar/nvm/0.38.0/versions/node/v14.17.0/lib
└── npm@6.14.13

/usr/local/Cellar/nvm/0.38.0/versions/node/v14.17.6/lib
└── npm@6.14.15

```

- 查看安装的node版本

```shell
nvm ls
       v10.15.0
       v14.16.0
->     v14.17.0
       v14.17.6
```

- 查看本机的环境变量

```shell
cat ~/.bash_profile
本机的bash配置显示git分支 在 ~/.bashrc  里面
source ~/.bash_profile
保存配置
```

#### Vim

| 命令 | 操作           |
| ---- | -------------- |
| gg   | 跳到文件第一行 |
| G    | 文件末尾       |
| bb   | 文件开头       |
| nn   | 文件结尾       |
| a    | 字之后插入     |
| i    | 字之前插入     |
|      |                |
|      |                |
|      |                |

返回目录

```vim
:Rex[plore]   ：返回到资源管理器vimdoc.sourceforge
:Ex           ：打开资源管理器，但不一定是相同的。见vim.wikia
:b#           ：返回到“先前编辑的缓冲区”。见vim.wikia
Ctrl-O        ：跳回到先前（较旧）的位置，不一定是缓冲区。见vim.wikia
```



目前花费 10675 预计 11200 

保守预计收入6000 

开学 47000 应该留45000  毕业应该有6 0000存款

