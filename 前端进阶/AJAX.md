# AJAX(页面局部刷新，异步的js，xml)

### 实现Ajax

Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。

1.创建 XMLHttprequest 对象

2.注册回调函数

3.建立与服务端的链接

4.发送请求

```javascript
//创建对象
const xhr = new XMLHttpRequest();
//建立与服务器的链接
xhr.open('POST','http://localhost:7001/');
//设置请求头
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
//发送请求
xhr.send();
//注册回调函数`
xhr.onreadystatechange = function(){
if(xhr.readyState===4){
if(xhr.status>=200 && xhr.status<300){
result.innerHTML = xhr.response;
  
var strr = xhr.responsrText;
//如果服务器传递过来的是json字符串，通过以下方式转换
var soon = JSON.parse(str);

  }
 }
}
```

如何在外部获取到返回值。要用到 callback 

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



一.JSON.parse()【从一个字符串中解析出json对象】

```js
例子：

1.定义一个字符串，var data='{"name":"goatling"}'

2.解析对象，JSON.parse(data)

3.结果是：

name:"goatling"

二.JSON.stringify()【从一个对象中解析出字符串】

1.var data={name:'goatling'}

2.JSON.stringify(data)

3.结果是：

'{"name":"goatling"}
```

ajax发起请求 ----servlet （返回一个json格式的字符串）

json 轻量级的数据交换格式

json分类 ： json对象

​					 json数组，【json对象】。

为什么使用json ：

​					1.json格式好理解

​					2.json格式的数据在多种语言中，比较容易处理

​					3.json格式数据占用的空间相对较小，在网络中传快，用户体验好。

jackson 类库

在js中，可以将json格式的字符串，转化为json对象。json中的key，就是json对象的属性名。

在回调函数中写，也可以定义一个函数处理服务器返回的数据

```javascript
var data = xmlhttp.responseText;
var jsonobj = eval("("+data+")");
document.get elementbyid("某个id值").value = jsonobj.name;
```

把jsonibj传入函数，然后就OK了。

***同步与异步***

open函数的第三个参数，

true 异步对象，使用异步对象发起请求后，不用等待数据处理完毕 ，就可以执行其他的操作。

false 同步，必须处理完请求，从服务器获取数据后，才能执行send之后的代码，任何时刻只能执行一个异步请求。



#### fetch

0fetch是基于原生的XMLHttpRequest对象来实现数据请求的。

同时，fetch也是基于Promise实现链式调用的。

那么，实现fetch的本质：就是实现ajax的封装以及Promise的实现。

IE本身就不支持 里面遇到了promise 的语法

resolve   成功

reject      失败

```js
//抓取数据
fetch('http://localhost:5000/list',{
  method:'GET'
}).then((res)=>{
  return res.json()
}).then((resp)=>{
  console.log(resp);
})

fetch('http://localhost:5000 ',{
	method:'GET'
}).then((resp)=>{
	resp.json(()=>{
		//
	}).then(()=>{
		//
	}).catch(()=>{
		//
	})
}).catch(()=>{
	//
})
fetch('http://localhost:5000 ',{
	method:'POST',
  headers:{
    "Content-Type":"application/x-www-form-urlencoded"
  },
  body:{
    //这里面放post参数
  }
})
```

#### Axios

Make XMLHttpRequests from the browser（从浏览器发起XMLHttpRequests请求）
Make http requests from node.js（从node.js发起http请求）
Supports the Promise API（支持PromiseAPI）
Intercept request and response（拦截请求和响应）
Transform request and response data（转换请求和响应数据）
Cancel requests（取消请求）
Automatic transforms for JSON data（自动转换json数据）
Client side support for protecting against XSRF（客户端支持自动防止XSRF）
axios可以在浏览器发起XMLHttpRequests请求，而在node.js可以发起http请求，也即是说，axios可以在浏览器和服务器上都可以发起请求



##### 使用fetch和ajax抓取数据

```js
//传统ajax抓取数据    
    function ajaxi(url){
        return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open("GET",url);
            xhr.onload=function(){
                //可以理解为就是xhr在调用这个函数 this指向他
                if(this.status==200){
                    resolve(this.response);
                }
            }
            xhr.send();
        }).then((res)=>{
            console.log(JSON.parse(res));
        }).catch((err)=>{
            console.log(err);
        })
    }
//使用fetch抓取数据
    function fetchi(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'GET'
            }).then((res)=>{
                return res.json()
            }).then((resp)=>{
                resolve(resp);
            })
        }).then((Response)=>{
            console.log(Response);
        }).catch((err)=>{
            console.log(err);
        })
    }
    //异步函数 控制执行顺序
    async function mymethod(){
        await  ajaxi("http://localhost:5000");
        await  fetchi("http://localhost:5000/list");
    }
```

