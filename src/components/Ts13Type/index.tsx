import React from "react";
import styled, { css } from "styled-components";
import { Labelcss } from "./Style";

const Comp = css<{ app: string }>`
  color: #51614d;
  width: 160px;
  height: 300px;
`;
interface App {
  app: string;
  marginleft: number;
}
const Dip = styled.div<App>`
  /* ${Comp}; */
  ${Labelcss}
  display: inline-block;
  background-color: ${(props) => props.app};
  margin-left: ${(props) => props.marginleft}px;
  :hover {
    color: blanchedalmond;
  }
`;
const Thing = styled.div.attrs(() => ({ tabIndex: 0 }))`
  width: 300px;
  color: red;
  background-color: pink;
  &:hover {
    color: green; // <Thing> when hovered
  }
  //中间隔元素的第一个
  & ~ & {
    background: black; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  //兄弟选择器 每一个紧挨着的之后的所有
  & + & {
    background: yellow; // <Thing> next to <Thing>
  }
  //&下面的类的背景
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  //类下面的&的背景
  .something-else & {
    background-color: #ccc;
    border: 1px solid pink; // <Thing> inside another element labeled ".something-else"
  }
`;
interface ICheckbox {
  width: number;
  height: number;
}
const Inoot = styled.input.attrs(() => ({ type: "checkbox" }))<ICheckbox>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
const StyledType = () => {
  return (
    <>
      <React.Fragment>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>
          Don't you think? Don't you think? Don't you think? Don't you think?
          Don't you think?
        </Thing>
        <Thing>Don't you think?</Thing>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
        <Thing>Don't you think?</Thing>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
        <Thing>Don't you think?</Thing>
        <Thing>Don't you think?</Thing>
      </React.Fragment>
      <Inoot width={30} height={30} />
      <Dip app={"#C4B6DC"} marginleft={40}>
        往事只能回味
        <p>asdasdasd</p>
        <div>sdafsdfsda</div>
      </Dip>
      <Dip app={"#C4B6DC"} marginleft={50}>
        往事只能回味
        <p>asdasdasd</p>
        <div>sdafsdfsda</div>
      </Dip>
    </>
  );
};

export default StyledType;
