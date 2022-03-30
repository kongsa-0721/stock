import styled from "styled-components";

export const BigButtonStyle = styled.button`
  height: 30px;
  width: 280px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 2px;
  color: #4965f2;
  border: 1px solid #c9d1fc;
  background: #fafbff;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  text-align: center;
  line-height: 13px;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    color: #3377ff;
    border: 1px solid #c2d6ff;
    background: #f9fbff;
    transition: all 0.4s ease;
  }
`;
interface IBigButton {
  label: string;
  onClick: () => void;
}
//蓝色的按钮
export const BlueButton = (props: IBigButton) => {
  const { label, onClick } = props;
  return <BigButtonStyle onClick={onClick}>{label}</BigButtonStyle>;
};
const RedButtonStyle = styled(BigButtonStyle)`
  color: #f73131;
  border: 1px solid rgba(247, 49, 49, 0.2);
  background: rgba(247, 49, 49, 0.05);

  &:hover {
    color: #f73131c7;
    border: 1px solid rgba(247, 49, 49, 0.19);
    background: rgba(247, 49, 49, 0.04);
  }
`;
export const RedButton = (props: IBigButton) => {
  const { label, onClick } = props;
  return <RedButtonStyle onClick={onClick}>{label}</RedButtonStyle>;
};
