import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import icon from "../components/Ts14ChangeSvg/icons/icon-7.svg";
import SVG from "react-inlinesvg";

const Container: any = styled.div<{ proportion: number }>`
  display: inline-block !important;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  height: 32px;
  flex: 1 1 30%;
  flex-basis: ${(props) => props.proportion}%;
  /* flex-grow: ${(props) => (props.proportion ? 0 : 1)}; */

  .ant-select-arrow {
    top: 65%;
    right: 8px;
    transform: rotate(180deg);
  }

  .ant-select-item {
    background: #efeff1;
    background-color: #fdfdfd;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: #fdfdfd;
    border: 1.07px solid #d7d9e0;
    border-radius: 4px;
  }

  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #d7d9e0 !important;
    box-shadow: none !important;
  }

  //设置宽度 宽度不会溢出
  .ant-select-single .ant-select-selector .ant-select-selection-item {
    width: 32px;
  }
`;
const Icon = styled(SVG)`
  transform: translate(180deg);
  background-color: aqua;
  display: block;
`;
const SelectDiv = styled.div`
  /* background-color: red; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface IConfig {
  value: string;
  key: string | number;
}

interface Iprops {
  dropConfig: Array<IConfig>;
  changeItem: (
    value: number | string,
    info: { key: string | number; value: string; children?: string }
  ) => void;
  proportion?: number;
}

export const DropDown = (props: Iprops) => {
  const { Option } = Select;
  const { dropConfig, changeItem, proportion } = props;

  function handleSelect(value: any, info: any) {
    changeItem(value, info);
  }

  const selectProps = {
    style: {
      width: "100%",
      minWidth: "120px",
      maxWidth: "485px",
    },
    maxTagCount: "responsive" as const,
  };
  return (
    <Container proportion={proportion}>
      <Select
        defaultValue={dropConfig[0].value}
        onSelect={handleSelect}
        {...selectProps}
        maxTagTextLength={30}
        clearIcon={<Icon src={icon} />}
        suffixIcon={
          <div>
            <Icon src={icon} />
            <Icon src={icon} />
          </div>
        }
      >
        {dropConfig.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Option key={item.key} value={item.value}>
                {/* <SelectDiv> */}
                <Icon src={icon} />
                {item.value}
                <Icon src={icon} />
                {/* </SelectDiv> */}
              </Option>
            </React.Fragment>
          );
        })}
      </Select>
    </Container>
  );
};
