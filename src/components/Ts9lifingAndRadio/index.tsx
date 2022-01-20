import { useState } from "react";
import Inputval from "./input";
import Contenet from "./content";
import { Button } from "antd";
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
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Inputval onsubmit={onsubmit} value={value} />
      <Button onClick={onSubmit}>提交</Button>
      <Contenet />
      <MyRadio
        // width={100}
        ChangeFn={handlechange}
        radioConfig={[
          { value: "3", label: "this" },
          { value: "4", label: "is" },
          { value: "5", label: "my" },
          { value: "6", label: "little" },
          { value: "7", label: "radio" },
        ]}
      />
    </>
  );
};

export default Ts9lifing;
