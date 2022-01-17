import React from "react";
import { DropDown } from "./dropdown";
const Ts11DropDown = () => {
  return (
    <div>
      <DropDown
        label="Dropdown"
        width="180px"
        marginleft="10px"
        DropConfig={[
          { label: "第一个" },
          { label: "第二个" },
          { label: "第三个" },
        ]}
      />
    </div>
  );
};

export default Ts11DropDown;
