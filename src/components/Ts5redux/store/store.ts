import { reducers } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//设置这个才可以使用Chrome-Redux-DevTools
import { composeWithDevTools } from "redux-devtools-extension";

//第二个参数是state的默认值 可以选择不传 传的话会覆盖掉initialstate
const store: any = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export { store };
