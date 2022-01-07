import React, { Suspense, lazy, useState } from "react";

const Lazy = lazy(() => import("./lazycomp"));

const Ts8lazy = () => {
  const [show, Setshow] = useState(false);
  const changeshow = () => {
    Setshow(true);
  };
  return (
    <div>
      <button onClick={changeshow}>changeshow</button>
      <Suspense fallback={<div>loading</div>}>
        {show ? <Lazy></Lazy> : <>is not defiened</>}
      </Suspense>
    </div>
  );
};

export default Ts8lazy;

/**
 * 懒加载 利用了import函数来实现懒加载
 * 要先导入React.lazy Suspense
 * 把要加载的东西放入lazy函数的返回值中 作为一个组件
 * 把要加载的放入Suspense标签中 这个标签需要一个fallback函数 内容未加载出来之前 显示fallback中的内容
 */
