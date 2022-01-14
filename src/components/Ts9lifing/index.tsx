import { useState } from "react";
import Inputval from "./input";
import Contenet from "./content";
import { Button } from "antd";

const Ts9lifing = () => {
  const [value, setvalue] = useState("");
  const onsubmit = (val: string) => {
    setvalue(val);
  };
  const [arr, setarr] = useState([""]);
  const onSubmit = () => {
    setarr([...arr, value]);
    setvalue("");
  };
  return (
    <>
      <Inputval onsubmit={onsubmit} value={value} />
      <Button onClick={onSubmit}>提交</Button>
      <Contenet arr={arr} />
    </>
  );
};

export default Ts9lifing;
