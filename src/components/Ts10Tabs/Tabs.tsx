import React, { useEffect, useState } from "react";

const Tabs = (props: any) => {
  const { tabsConfig, children, onChange, activeKey } = props;
  return (
    <>
      Tabs
      <div onClick={onChange}>{tabsConfig[0].title}</div>
      <div onClick={onChange}>{tabsConfig[1].title}</div>
      {tabsConfig.map((item, index) => {
        return <div key={index}>{}</div>;
      })}
      <div>{children[0]}</div>
      <div>{children[1]}</div>
    </>
  );
};

export default Tabs;

{
  /**
  console.log(props.children[0].props.itemkey);
  console.log(props.children instanceof Array);
  const [arr, setarr] = useState([]);
  useEffect(() => {
    Setdata();
  }, []);
  const Setdata = () => {
    setarr([...arr, ...Getdata()]);
  };
  const Getdata = () => {
    const arrr = [];
    for (let index = 0; index < props.children.length; index++) {
      arrr.push(props.children[index].props.itemkey);
    }
    return arrr;
  }; */
}
