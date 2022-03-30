import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Delete from "./Delete";
import "../Ts1/index.css";
import couple from "../../../assets/coupleimage.jpeg";

interface Iprops {
  msg: string; //这里定义的是props的类型 在使用该组件的时候传递参数要满足
  children: React.ReactNode; //定义在两个双标签之间的节点
}
export interface Iusers {
  id: number;
  comment: string;
}
//const Ts1:React.FC<Iprops> = (props:Iprops)
const Ts1: React.FC<Iprops> = (props) => {
  //泛型约束一下
  const [inputvalue, setinputvalue] = useState<string>("");
  useEffect(() => {
    console.log("didmount || didupdate");
  }, [inputvalue]);
  //这个专门是input的类型值
  const handelchange = (e: ChangeEvent<HTMLInputElement>) => {
    setinputvalue(e.target.value);
  };
  const handlesubmit = () => {
    //这个在form里面的button 如果不加以阻止 就会强制刷新页面
    console.log(inputvalue);
  };
  //e的类型为FormEvent
  const submit = (e: FormEvent) => {
    //preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
    e.preventDefault();
    //阻止函数之后的事件也可以被触发
    console.log("这是阻止函数之后的");
  };
  const arr: Iusers[] = [];
  for (let index = 0; index < 11; index++) {
    arr.push({
      id: index,
      comment: "It's a comment" + index,
    });
  }
  //如果有传递参数的话 就是在这样的写法 在onClick里面写一个箭头函数
  //如果要删除的话 直接用hooks 把数据存在hooks 更新hooks即可
  const showmeindex = (value: Iusers) => {
    console.log(value);
  };
  //这样可以动态渲染出来classname
  const myarr = ["cat", "dog"];
  return (
    <div>
      {props.msg}
      {props.children}
      <form onSubmit={submit}>
        <input type="text" value={inputvalue} onChange={handelchange} />
        <button onClick={handlesubmit}>submit</button>
      </form>
      <ul>
        {arr.map((item, index) => {
          return (
            <li key={index}>
              {item.comment}
              <Delete item={item} callback={showmeindex}></Delete>
            </li>
          );
        })}
      </ul>
      <div className={myarr.join(" ")}>测试颜色的div 这里的图片标签作为img</div>
      <img src={couple} width="300" height="300" />
    </div>
  );
};

export default Ts1;
