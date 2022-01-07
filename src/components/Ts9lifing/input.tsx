import React, { useState } from "react";

const Inputval = (props: any) => {
  const [val, setval] = useState("");
  const handlechange = (e: any) => {
    setval(e.target.value);
  };
  const handlesubmit = () => {
    props.onsubmit(val);
  };
  return (
    <div>
      <input onChange={handlechange} value={val} />
      <button onClick={handlesubmit}>setvalue</button>
    </div>
  );
};

export default Inputval;
