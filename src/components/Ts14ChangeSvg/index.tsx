import styled from "styled-components";
import SVG from "react-inlinesvg";
import IIcon1 from "./icons/icon-1.svg";
import { Button as butt } from "antd";

const ICon1 = styled(SVG)<{ color: string }>`
  height: 26px;
  width: 24px;
  border: 1px solid #ccc;
  cursor: pointer;
  & path {
    fill: ${(props) => props.color};
  }
`;
const Div = styled.div`
  border: 2px solid #000;
  &:hover ${ICon1} {
    path {
      fill: red;
    }
  }
`;
const Button = styled(butt)`
  width: 20%;
  padding: 0;
  height: 100%;
`;
const Span = styled.span`
  border: 1px solid #bbbb;
  display: inline-block;
  vertical-align: top;
  line-height: 24px;
  font-size: 13px;
`;
const ChangeSvg = () => {
  return (
    <>
      <Div>
        <ICon1 color={"#007bff"} src={IIcon1} title="MyLogo" />
        <Span>点击</Span>
      </Div>
      <Div>
        <Button icon={<ICon1 color={"#007bff"} src={IIcon1} title="MyLogo" />}>
          <Span>点击</Span>
        </Button>
      </Div>
    </>
  );
};

export default ChangeSvg;
