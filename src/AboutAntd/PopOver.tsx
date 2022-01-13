import { Popover, Button, Tooltip } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    .ant-popover-inner-content {
    padding: 0;
  }
  .ant-popover-arrow{
    display: none;
  }
  }
`;
const Laydiv = styled.div`
  height: 200px;
  width: 150px;
  background-color: #c4ebeb;
  padding: 0;
  margin: 0;
`;
const P = styled.p`
  color: #5d5e46;
`;
const content = (
  <div>
    <Laydiv>
      <P>这是一个标签</P>
    </Laydiv>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const PopOver = () => {
  return (
    <>
      <Popover content={content} trigger="click" placement="left">
        <GlobalStyle />
        <Button type="primary">Focus me</Button>
      </Popover>
    </>
  );
};

export default PopOver;
