import React from "react";
import SelectZ from "./Select";

const Ts12Select = () => {
  const handlechange = (value: number | string, info: any) => {
    console.log(info.key);
  };
  return (
    <div>
      <SelectZ
        width={100}
        // ChangeItem={handlechange}
        ChangeItem={() => {
          console.log(1);
        }}
        SelectConfig={[
          { value: "lucy", key: 1 },
          { value: "Jack", key: 2 },
          { value: "purple", key: 3 },
          { value: "black", key: 4 },
        ]}
      />
    </div>
  );
};

export default Ts12Select;
