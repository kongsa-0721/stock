import { useMemo } from "react";
import { RgbaStringColorPicker } from "react-colorful";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
//name插件 可以设置green之类的
extend([namesPlugin]);

export const CustomPicker = ({ color, ...rest }) => {
  const rgbaString = useMemo(() => {
    return color.startsWith("raba") ? color : colord(color).toRgbString();
  }, [color]);

  return <RgbaStringColorPicker color={rgbaString} {...rest} />;
};
