import styled, { css } from "styled-components";

const ContainerX = styled.div`
  height: 14px;
  width: 14px;
  display: flex;
  flex-direction: column;
  animation: circle infinite 1.75s linear;
  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Container = styled.div`
  height: 7px;
  width: 14px;
  background-color: #0045ff;
  overflow: hidden;
`;
const loadcss = css`
  width: 14px;
  height: 14px;
  border: solid 2.5px transparent;
  border-radius: 999px;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
const Load1 = styled.div`
  ${loadcss}
  background-image: linear-gradient(#0045ff, #0045ff),
  linear-gradient(to left, #ffffff, #ffffff91);
`;
const Load2 = styled.div`
  ${loadcss}
  transform: translateY(-7px);
  background-image: linear-gradient(#0045ff, #0045ff),
  linear-gradient(to right, #ffffffa3, #ffffff1a);
`;
export const Load = (
  <ContainerX>
    <Container>
      <Load1 />
    </Container>
    <Container>
      <Load2 />
    </Container>
  </ContainerX>
);
