import { useState } from "react";
import Inputval from "./input";
import Contenet from "./content";
import { Button, Radio } from "antd";
import { MyRadio } from "./Radio";

const Ts9lifing = () => {
  const [value, setvalue] = useState<string>("");
  const onsubmit = (val: string) => {
    setvalue(val);
  };
  const [arr, setarr] = useState<Array<string>>([""]);
  const onSubmit = () => {
    setarr([...arr, value]);
    localStorage.setItem("information", JSON.stringify(arr));
    setvalue("");
  };
  return (
    <>
      <Inputval onsubmit={onsubmit} value={value} />
      <Button onClick={onSubmit}>提交</Button>
      <Contenet />
      <MyRadio
        radioConfig={[
          { value: "1", label: "this" },
          { value: "2", label: "is" },
          { value: "3", label: "my" },
          { value: "4", label: "little" },
          { value: "5", label: "radio" },
        ]}
      />
    </>
  );
};

export default Ts9lifing;
