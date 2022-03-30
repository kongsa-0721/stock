import React from "react";
import Tabs from "./Tabs";
import styled from "styled-components";

const Div = styled.div`
  height: 80px;
  width: 200px;
  background-color: bisque;
`;
const ChildrenItem = (props: any) => {
  return <Div>{props.itemkey}</Div>;
};
const Ts10Tabs = () => {
  const handlechange = () => {};
  return (
    <>
      <Tabs
        onChange={handlechange}
        tabsConfig={[
          { key: "div1", title: "属性" },
          { key: "div2", title: "插入" },
        ]}
        activeKey={"div1"}
      >
        <ChildrenItem itemkey={"div1"}/>
        <ChildrenItem itemkey={"div2"}/>
      </Tabs>
    </>
  );
};

export default Ts10Tabs;
