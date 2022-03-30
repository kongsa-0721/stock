import { useState } from "react";
import { Input } from "antd";
import { HexColorInput, RgbaStringColorPicker } from "react-colorful";
import { colord, extend } from "colord";

export const Colorful = () => {
  const [color, setColor] = useState("#315efb");
  const [opacity, setOpacity] = useState(1);
  return (
    <>
      <RgbaStringColorPicker
        color={colord(color).grayscale().alpha(opacity).toRgbString()}
        onChange={(e) => {
          setColor(colord(e).toHex().substring(0, 7));
          setOpacity(colord(e).alpha());
        }}
      />
      <HexColorInput
        color={color.substring(1, 7)}
        onChange={(e) => {
          setColor(e);
          console.log(e);
          console.log(colord("#315efb").grayscale().alpha(1).toRgbString());
        }}
      />
    </>
  );
};
//colord("rgba(50, 100, 150, 0.5)").alpha()
