import { useState } from "react";
import styled from "styled-components";
import { BigButtonStyle } from "../AboutAntd/BigButton";
import { CustomModal } from "./modal";

const Container = styled.div`
  width: 296px;
  background-color: aliceblue;
  padding-top: 16px;
`;
const Title = styled.p`
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #222222;
  line-height: 16px;
  margin: 0;
`;
const Detail = styled.p`
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #b8b9bf;
  line-height: 13px;
  margin: 12px 0px;
`;
const Comp = styled(BigButtonStyle)`
  height: 36px;
  width: 280px;
  margin: 4px 0px;
  background: #ffffff;
  border: 1.07px solid #d7d9e0;
  color: #333333;
  &:hover {
    font-family: PingFangSC-Medium;
    background: #fdfdfd;
    border: 1.07px solid #8b8fa3;
    color: #333333;
  }
  &:focus {
    font-family: PingFangSC-Medium;
    background: #fdfdfd;
    border: 1.07px solid #8b8fa3;
    color: #333333;
  }
`;
const DelBtn = styled(BigButtonStyle)`
  width: 88px;
  height: 28px;
  color: #f73131;
  background: #fef4f4;
  border: 1px solid #fccdcd;
  &:hover {
    color: #f73131;
    background: #feecec;
    border: 1px solid #fccdcd;
  }
  &:focus {
    color: #f73131;
    background: #feecec;
    border: 1px solid #fccdcd;
  }
`;
const Tiptext = styled.p`
  margin-top: 40px;
  margin-bottom: 70px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  line-height: 14px;
`;
interface Iprops {
  comps: string[];
  onChange: (item: string) => void;
  delete: () => void;
}
const SelectedComps = (props: Iprops) => {
  const { comps, onChange } = props;
  const [vis, setvis] = useState(false);
  return (
    <Container>
      <Title>{comps.length}个组件被选中</Title>
      <Detail>点击一个组件可查看其属性</Detail>
      {comps.map((item, index) => {
        return (
          <Comp
            key={index}
            onClick={() => {
              onChange(item);
            }}
          >
            {item}
          </Comp>
        );
      })}
      <CustomModal
        visible={vis}
        title="删除组件"
        destroyOnClose
        onCancel={() => {
          setvis(false);
        }}
        onOk={() => {
          props.delete();
          setvis(false);
        }}
        showOkButton={true}
        showCancelButton={true}
        width="368px"
        children={<Tiptext>{"确定要删除选中的" + comps.length + "个组件？"}</Tiptext>}
      ></CustomModal>
      <DelBtn
        onClick={() => {
          setvis(true);
        }}
      >
        批量删除
      </DelBtn>
    </Container>
  );
};
export default SelectedComps;
