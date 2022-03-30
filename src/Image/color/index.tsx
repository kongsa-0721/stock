import { Input } from "antd";
import { useState } from "react";
import { CustomPicker } from "./cust";
import { colord } from "colord";
import { HexColorInput } from "react-colorful";

export default function AppColor() {
  const [color, setColor] = useState("orange");

  return (
    <div style={{ marginLeft: "600px" }}>
      <CustomPicker color={color} onChange={setColor} />
      <div className="value">
        {JSON.stringify(color) + "---------------" + colord(color).toHex()}
      </div>

      <div style={{ width: "200px" }}>
        <HexColorInput color={color} onChange={setColor} />
        <Input value={colord(colord(color).toRgbString()).alpha()} />
      </div>
    </div>
  );
}
