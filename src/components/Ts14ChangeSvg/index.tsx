import styled from "styled-components";
import SVG from "react-inlinesvg";
import IIcon1 from "./icons/icon-1.svg";

interface SVGProps {
  color: string;
}
const ICon1 = styled(SVG)<SVGProps>`
  cursor: pointer;
  width: 24px;
  height: 24px;
  & path {
    fill: ${(props) => props.color};
  }
  & path:hover {
    fill: red;
  }
`;
const ChangeSvg = () => {
  return (
    <>
      <div>this is a tesx</div>
      <ICon1 color={"#007bff"} src={IIcon1} title="MyLogo" />
    </>
  );
};

export default ChangeSvg;
