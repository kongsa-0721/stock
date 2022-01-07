import React, { useState } from "react";
import Inputval from "./input";
import Contenet from "./content";

const Ts9lifing = () => {
  const [value, setvalue] = useState([""]);
  const onsubmit = (val: string) => {
    setvalue([...value, val]);
  };
  return (
    <div>
      <Inputval onsubmit={onsubmit}></Inputval>
      <Contenet value={value}></Contenet>
    </div>
  );
};

export default Ts9lifing;
