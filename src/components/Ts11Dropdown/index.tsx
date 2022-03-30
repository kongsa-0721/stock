import React, { useState } from "react";
import { DropDown } from "./dropdown";
const Ts11DropDown = () => {
  const handlechange = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <DropDown
        label={"DropDown"}
        width="180px"
        marginleft="10px"
        DropConfig={[
          { label: "第一个", key: "1", onChange: handlechange },
          { label: "第二个", key: "2", onChange: handlechange },
          { label: "第三个", key: "3", onChange: handlechange },
        ]}
      />
    </div>
  );
};

export default Ts11DropDown;
/** 鸟随鸾凤飞腾远，人伴贤良品质高 */
