import { Slider } from "antd";
import { useState } from "react";

export const SliderComp = () => {
  const [value, setValue] = useState(1);
  return (
    <div style={{ width: "200px" }}>
      <Slider
        value={value}
        onChange={(val: number) => {
          setValue(val);
        }}
        // disabled
        max={300}
      />
    </div>
  );
};
