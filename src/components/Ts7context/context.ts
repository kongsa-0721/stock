import { createContext } from "react";
//ts提示这里需要一个参数 提供了之后 后面会被Provider覆盖掉
const testContext = createContext({});

const { Provider, Consumer } = testContext;

export { Provider, Consumer, testContext };
