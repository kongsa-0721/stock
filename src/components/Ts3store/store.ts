import React from "react";
interface Istore {
  count: number;
}
export interface Iaction {
  type: string;
}
//定义好store
const defaultstore: Istore = {
  count: 0,
};
//更改store 里面的 state
const changeState = (action: Iaction) => {
  switch (action.type) {
    case "add":
      defaultstore.count++;
      break;
    case "minus":
      defaultstore.count--;
      break;
    default:
      break;
  }
};
//更新视图
const updateView = () => {
  const app: any = document.getElementById("pdd");
  app.innerText = defaultstore.count;
};
//dispach分发
const dispatch = (action: Iaction) => {
  changeState(action);
  updateView();
};
export { dispatch };
