#### 安装react 

```bash
sudo npm install -g create-react-app
create-reacr-app react-basic
cd react-basic
npm start
#在根目录下创建     .env  文件
#在里面写入
SKIP_PREFLIGHT_CHECK=true
```

#### 基础知识 mvvm

##### 基本目录结构

package.json 管理一些npm 包 script 一些启动的脚本

index.html 入口文件 

div id=“root” 总入口 

src文件夹  所有的逻辑都写在里面

在app.css中写的css会覆盖掉index.css里面的样式

###### JSX语法 

只能拥有一个根标签 

把html里面的class 改成了className 

如果不使用JSX 

React.createElement('div',{className:'App},React.createElement(...))

第三个参数可以接收文本 或者是新的标签 ，无限的嵌套下去 非常的麻烦

```jsx
 return (
    <div className="App">
					<h1>name<h1/>
    </div>
  );
```

##### 组件化开发

可以理解为 一个js文件就是一个组件 

react **组件一定要大写**

如果不大写的话 会造成无法引入 报错

###### 新建一个组件   

```js
//组件定义 Item1  静态赋值
import React from "react";
const Item1 = (props) => {
    return (
        <h1>这是第{props.id}次尝试</h1>,
        <h1>这是第{props.name }次尝试</h1>
    );
}
export default Item1;

//在别的组件里面引入
import Item1 from './Demo/Item1';
//然后在return里面以标签的形式引入
<Item1 id="10"/>
<Item1 name="20"></Item1>

这个时候页面输出为：
                这是第次尝试
                这是第20次尝试
说明第二个参数将第一个参数覆盖掉了 只输出了一次 ？？？
？？？？？疑问很多  发现了可能不一样 跟我之前想想的
JSX必须要有一个根标签 然后在里面书写

如果在引用的时候 首尾标签里面有内容
在传递参数的时候可以用props.children接收即可
<Item1 name="20">这是children内容</Item1>
//接收
这是{props.children}内容
```

###### 动态给组件赋值：

```js
  state = {
    info: [
      { name: "kongsa", age: 19 },
      { name: "chundan",age: 21 }  
    ],
    other:"anything"
  }
  change = () => {
    //不要这样做
    // this.state.info[0].name = "zaijian";
    this.setState({
      info: [{
         name: "HuaWei", age: 15
      }, {
        name:"Apple",age:24
      }]
    })
  }
  
  // 注意不要给函数加括号 否则会被直接执行一遍
    <button onClick={this.change}>切换</button>
        <Item1 name={this.state.info[0].name} age={this.state.info[0].age }/>
        <Item1 name={this.state.info[1].name} age={this.state.info[1].age }/>

state 用于改变组件内的状态值
props 用于组件通信传值
```

###### 组件通信调用函数：

```js
//给函数加参数
 change = (e) => {
    this.setState({
      info: [{
         name: e, age: 15
      }, {
        name:"Apple",age:24
      }]
    })
  }
 
// 在调用的时候
<button onClick={()=>this.change("Sansung")}>切换</button>
<button onClick={this.change.bind(this,"Sansung")}>切换</button>



//传递函数
<Item1 name={this.state.info[0].name} age={this.state.info[0].age} obj={this.change.bind(this,"Xiaomi") }/>
//在子组件里面 注意这是一个函数 而不是字符串
 <h1 onClick={props.obj}>姓名:{props.name},年龄:{props.age } </h1>
```

###### 给组件添加样式

```js
//有两种方法 
//第一种：  在外部定义一个css文件 然后引入该css文件
import './App.css';
//第二种 ：JSX提供了一种便捷的方式 在render里面定义一个样式
const style={
  width:100px;
}
<button style={style}></button>
```

###### 使用分支判断

```jsx
添加一个按钮 实现里面的元素是否显示
<button onClick={this.changeflag}>是否显示</button>
//这里使用了三元运算符
{ this.state.flag?
  <div>
  <Item1 name={this.state.info[0].name}
  age={this.state.info[0].age}
  obj={this.change.bind(this, "Xiaomi")}
  newchange={this.newchange }/>
  <Item1 name={this.state.info[1].name} age={this.state.info[1].age }/>
  </div>:null
}
//定义函数 和flag  
changeflag = () => {
    const res = this.state.flag;
    this.setState({
      flag:!res
    })
  }

在state里面定义一个flag 

//第二种方法  将里面的东西抽离出来
放在render里面
    let person = null;
    if (this.state.flag===true) {
      person = (
        <div>
        <Item1 name={this.state.info[0].name}
          age={this.state.info[0].age}
          obj={this.change.bind(this, "Xiaomi")}
          newchange={this.newchange }/>
        <Item1 name={this.state.info[1].name} age={this.state.info[1].age }/>
      </div>
      )
    }
在return里面只需要 {person}
```

##### 遍历数组 添加到页面上

```jsx
//这个必须要一个key值 map的第二个参数 
{
  this.state.info.map((person1,index) => {
  	return <Item1 name={person1.name} key={index} age={ person1.age}/>
  })
}

//添加点击事件
   <div>
          {
            this.state.info.map((person1,index) => {
              return (
                <div key={index}>
                  <Item1 name={person1.name} age={person1.age} />
                  <button onClick={this.met}>切换</button>
                </div>
              )
            })
          }
      </div>

  met = () => {
    this.setState({
      info: [{
         name: "Sansung", age: 15
      }, {
        name:"Apple",age:24
      }]
    })
  }
```

##### redux

安装redux 先安装redux 再安装react-redux 依赖于redux

yarn add redux react-redux

**provider** 使内部的组件可以获取到store的数据 接收store作为props

原理就是react中的context  必须使用connect进行一层封装

**connect** 使组件和store进行关联 获取到state



1. 创建reducer/index 构建reducer来响应actions
2. 创建store/index 通过createStore 来把reducer传入进来
3. 在app中引入store



reducer接收两个参数 第一个是state 第二个是action 



在store中导入 reducer 

引入redux中的createStore方法 



创建两个组件 一个放button 一个放div

引入两个组件



实现数据的统一 使用provider来包裹 来维护state provider属于react-redux	

导入connect方法 react-redux

connect 返回一个函数 connect(...)(App)

有四个参数：

mapStateToProps 把我们的store数据作为props绑定到组件上

（state,ownprops）

mapDispatchToProps(dispatch,ownProps) 把action绑定到我们自己的函数中的dispatch中 返回值是一个对象 

在两个组件中分别导入connect方法 对组件进行加强

发送方要实现connect 的第二个参数 发送action 这个函数里面返回一个对象 调用dispatch 

接收方要实现第一个函数 

reducer进行改造 接受一个action 判断action的类型 来进行处理

接收state 





在app中 含有这两个组件 使用provider包裹起来  react-redux中的。引入store

这两个组件就都可以使用store中的数据

store来处理整合reducers 使用redux中的createStore的函数来整合reducers

reducers来处理不同type的actions  根据不同的actiontype作出反应

发送数据方实现connect的第二个参数 把方法放到了自己的props中 调用 把这个方法发送到reducer中去

接收方要实现 connect 的第一个方法 应该也是跟reducer联系 把state中的一些东西放入到自己的props中 供自己使用





##### Hooks

```tsx
//state hook 相当于函数组件的state
const [count,setcount] = useState<string>("")

//useEffect 副作用hook
useEffect(() => {
  //不传递参数的话 相当于两个生命周期函数
  console.log("Didmount||Didupdate");
})
useEffect(() => {
  //不依赖任何值 只做一次
  //传递一个空数组 相当于mount 传入一个别的就相当于两个生命周期函数 如果没有发生变化 那么不会出发update函数
  console.log("Didmount");
}, [])
useEffect(() => {
  //在里面进行return 相当于WillUnmount
  return()=>{
     console.log("WillUnmount");
  }
}, [])
```

在组件卸载的时候清除状态

```tsx
componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
}
```

##### Router

首先 涉及到路由的部分要用router包裹起来

这就是一个路由器 不同的路由器管理不同的路由

不同的路由之间是不互相干扰的

其次要有路由跳转标签 Link NavLink 里面写着要去的路径

最后注册路由 Route 的两个属性 path component

path 是 要去的路径

component 是 要展示的组件

注 : Link的样式 可以通过styled-components 来进行自定义 比较方便 还可以自己封装一个Link组件进行使用 传递的children直接扩展运算符展开就可以

```tsx
react-router-dom 版本5/6 发生了很大的变化 6暂时还不是很完善 现在使用5版本
注意 只要下载一个 react-router-dom
yarn add react-router-dom@5.2.0
不要下载react-router 6版本的
const ShowDiv = styled.div`
  height: 60px;
  width: 100px;
  background-color: #e7d5d5;
`;
const MyLink = styled(NavLink)`
  color: #eeabab;
  background-color: #faa6fa66;
  display: inline-block;
  height: 23px;
  width: 50px;
  text-align: center;
/* 改变颜色 默认的选中的类是active 现在改成Green*/
  &.Green {
    color: green;
  }
  :hover {
    color: #9797f5;
    background-color: #f5f5f5;
  }
`;
const RouterShow = () => {
  return (
    <BrowserRouter>
      {/*activeClassName指定类名*/}
      <MyLink activeClassName="Green" to="/page1">
        page1
      </MyLink>
      &nbsp;
      <MyLink activeClassName="Green" to="/page2">
        page2
      </MyLink>
      <hr />
      <ShowDiv>
        <Route path={"/page1"} component={Page1} />
        <Route path={"/page2"} component={Page2} />
      </ShowDiv>
      <div>this is a div</div>
    </BrowserRouter>
  );
};
```


###### 路由组件传递参数

- params

```tsx
<MyLink to={`/page3/item1/${Data[0].id}/${Data[0].content}`}>item1</MyLink>
//在注册路由的时候就要接收
<Route path={"/page3/item1/:id/:content"} component={Item1}></Route>
//获取参数
const { id, content } = props.match.params;
```

- search

```tsx
<MyLink to={`/page3/item2/?id=${Data[1].id}&content=${Data[1].content}`}>item1</MyLink>
<Route path={"/page3/item2"} component={Item2}></Route>
//获取参数 要序列化
  const data = qs.parse(props.location.search.slice(1));
  const { id, content } = data;
```

- state

```tsx
<MyLink to={{pathname: "/page3/item3",state: { id: Data[2].id, content: Data[2].content },}}>item3</MyLink>
<Route path={"/page3/item3"} component={Item3}></Route>
//获取参数 做错误处理 刷新界面state会丢失
const { id, content } = props.location.state || {};
```

###### 路由懒加载

- 使用vite打包的项目(Bug)

```tsx
yarn add react-lazily-component
import ReactLazilyComponent from "react-lazily-component";

const Item1 = ReactLazilyComponent(() => import("./Item"));

使用路由懒加载之后不能传递参数啦  不知道webpack是不是有这个bug
```

- 使用webpack打包的项目

```tsx
import {laxy,suspense} from 'react'
const Home = lazy(()=>{import('./Home')})

<suspense fallback={<h1>Loading</h1>}>
	<Route path component/>
</suspense>
//suspense 的fallback 组件 不可以用懒加载
```



##### 终端查看redux Chrome

```tsx
yarn add redux-devtools-extension
安装 这个依赖
import { composeWithDevTools } from "redux-devtools-extension";
composeWithDevTools(applyMiddleware(thunk)) 
作为createStore的第二个参数
```



##### React 代理

关于跨域 在package.json 添加一个字段

"proxy":"localhost"

发送请求到本地的端口 本地的服务器发送请求不涉及跨域

例如 本地开在3000 端口 跨域访问也访问3000端口 3000没有的就去配置的那个网址去找



## 初始化项目

```bash
yarn create react-app my-app --template typescript
```

使用上面的命令初始化一个typescript项目

在gitee上初始化一个储存库 master设置为保护分支 只有管理员可以推代码/合并分支

