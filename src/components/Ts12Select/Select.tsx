import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import Pack from "./icon-Pack-up.svg";

const Container = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: #fdfdfd;
    border: 1.07px solid #d7d9e0;
    border-radius: 4px;
  }
  .ant-select-open {
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input).ant-select-selector {
      display: none;
      border-color: transparent !important;
      box-shadow: none !important;
    }
  }
`;
interface IConfig {
  value: string;
  key: string | number;
}
interface Iprops {
  SelectConfig: Array<IConfig>;
  width: number;
  ChangeItem: (value: number | string, info: any) => void;
}
const SelectZ = (props: Iprops) => {
  const { Option } = Select;
  const { SelectConfig, width, ChangeItem } = props;
  function handleSelect(value, info) {
    ChangeItem(value, info);
  }
  return (
    <div>
      <Container>
        <Select
          defaultValue="sad"
          style={{ width: width }}
          onSelect={handleSelect}
          showArrow={false}
          suffixIcon={Pack}
        >
          {SelectConfig.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Option key={item.key} value={item.value}>
                  {item.value}
                </Option>
              </React.Fragment>
            );
          })}
        </Select>
      </Container>
      <img src={Pack} />
    </div>
  );
};

export default SelectZ;
