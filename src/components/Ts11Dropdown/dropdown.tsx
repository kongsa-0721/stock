import { Menu, Dropdown } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

//表格内的小型下拉框
const MyDropdown: any = styled(Dropdown)`
  display: inline-block;
  height: 32px !important;
  width: ${(props: any) => props.width} !important;
  background: #fdfdfd;
  border: 1.07px solid #d7d9e0;
  border-radius: 6px;
  margin-left: ${(props: any) => props.marginleft};
  margin-top: 7px;
  margin-bottom: 10.5px;
`;
//下拉框的文字
const DropdownLabel = styled.span`
  line-height: 32px;
  font-size: 13px;
  font-family: PingFangSC-Regular;
  color: #333333;
  margin-left: 12px;
`;
interface IConfig {
  label: string;
  key: string;
  onChange: (val: string) => void;
}
interface IDropDown {
  DropConfig: Array<IConfig>;
  label: string;
  width: string;
  marginleft: string;
}
//下拉菜单默认的值
const value = (props: any) => {
  return (
    <Menu>
      {props.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Menu.Item
              onClick={() => {
                item.onChange(item.key);
              }}
              key={item.key}
            >
              <p>{item.label}</p>
            </Menu.Item>
          </React.Fragment>
        );
      })}
    </Menu>
  );
};
export const DropDown = (props: IDropDown) => {
  const { label, width, marginleft, DropConfig } = props;
  return (
    <>
      <MyDropdown
        width={width}
        marginleft={marginleft}
        overlay={value(DropConfig)}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <DropdownLabel>{label}</DropdownLabel>
        </a>
      </MyDropdown>
    </>
  );
};
