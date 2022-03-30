import styled, { css } from "styled-components";

const labelCss: any = css`
  user-select: none;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #222222;
  line-height: 13px;
  :hover {
    cursor: default;
  }
`;

const LabelStyel = styled.span`
  ${labelCss}
  display: inline-block;
  height: 32px;
  margin: 17px 12px 0 16px;
`;
export const Label = (props: { text: string }) => {
  const { text } = props;
  return <LabelStyel>{text}</LabelStyel>;
};
