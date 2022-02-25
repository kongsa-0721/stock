import styled from "styled-components";

const Div3 = styled.div`
  background-color: #2d6596;
  height: 300px;
  width: 300px;
`;
const Div4 = styled.div`
  background-color: #accce7;
  height: 100px;
  width: 100px;
`;
const Div2 = styled.div`
  background-color: #accce7;
  height: 100px;
  width: 100px;
  &:hover ~ ${Div3} {
    border: 10px solid black;
  }
  &:hover + ${Div4} {
    border: 10px solid black;
  }
  &:hover {
    border: 10px solid black;
  }
`;
const Div1 = styled.div`
  background-color: aliceblue;
  height: 300px;
  width: 300px;
  &:hover {
    border: 2px solid saddlebrown;
  }
  &:hover${Div3} {
    border: 10px solid black;
  }
`;
const Div5 = styled.div.attrs({ tabindex: 0 })`
  height: 300px;
  width: 300px;
  background-color: aliceblue;
  &:focus {
    background-color: aqua;
  }
`;
/**同级的元素之间可以传导hover 父子组件也不可以 */
const TsStyled = () => {
  return (
    <>
      <Div1>
        <Div2></Div2>
        <Div4></Div4>
      </Div1>
      <Div3></Div3>
      <Div5>123213</Div5>
    </>
  );
};

export default TsStyled;
