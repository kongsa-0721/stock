import { useRef } from "react";
import styled from "styled-components";
import { Button } from "antd";
import SVG from "react-inlinesvg";
import icon from "../Ts14ChangeSvg/icons/icon-7.svg";

//布局方面
const Container = styled.div`
  width: 840px;
  height: 284px;
  background-color: aliceblue;
`;
const Left = styled.div`
  width: calc(49% - 1px);
  height: 100%;
  float: left;
`;
const Drag = styled.div`
  width: 1px;
  height: 100%;
  background-color: #e1e3eb;
  float: left;
  cursor: ew-resize;
`;
const Right = styled.div`
  width: 51%;
  height: 100%;
  background-color: #b4e0e7;
  float: right;
  overflow: auto;
`;
//Tab方面
const Span = styled.span`
  font-family: PingFangSC-Medium;
  font-size: 13px;
  color: #222222;
  line-height: 43px;
  position: relative;
  display: inline-block;
  z-index: 0;
  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 0;
    border: 0.5px solid #06cc6b;
    background-color: #06cc6b;
    border-radius: 2px;
  }
  user-select: none;
`;
const TabDiv = styled.div`
  height: 43px;
  width: 13.17%;
  background-color: #fff;
  text-align: center;
  display: inline-block;
`;
const TabContainer = styled.div`
  height: 44px;
  width: 100%;
  border-bottom: 1px solid #e1e3eb;
`;
//button
const BUT = styled(Button)`
  background: #4965f2;
  border: 1px solid #4965f2;
  border-radius: 4px;
  padding: 0;
  width: 17%;
  height: 24px;
  border: none;
  margin-left: 23px;
`;
const Icon = styled(SVG)`
  transform: translate(180deg);
`;
const Buttonlabel = styled.span`
  font-family: PingFangSC-Medium;
  font-size: 13px;
  color: #ffffff;
  text-align: center;
  line-height: 24px;
`;
const DRAGCOMP = () => {
  const contain = useRef(null);
  const left = useRef(null);
  const drag = useRef(null);
  const right = useRef(null);
  const Move = (e) => {
    var startX = e.clientX;
    var lefttt = drag.current.offsetLeft;
    document.onmousemove = function (e) {
      var endX = e.clientX;
      var moveLen = lefttt + (endX - startX);
      var maxT = contain.current.clientWidth - drag.current.offsetWidth;
      if (moveLen < 300) moveLen = 300;
      if (moveLen > maxT - 300) {
        moveLen = maxT - 300;
      }
      drag.current.style.left = moveLen;
      left.current.style.width = moveLen + "px";
      right.current.style.width =
        contain.current.clientWidth - moveLen - 1 + "px";
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
      drag.current.releaseCapture && drag.current.releaseCapture();
    };
    return false;
  };
  return (
    <>
      <Container ref={contain}>
        <Left ref={left}>
          <TabContainer>
            <TabDiv>
              <Span>query1</Span>
            </TabDiv>
            <TabDiv>
              <Span>属性</Span>
            </TabDiv>
            <TabDiv>
              <Span>高级</Span>
            </TabDiv>
            <BUT>
              <Icon src={icon} />
              <Buttonlabel>运行</Buttonlabel>
            </BUT>
          </TabContainer>
        </Left>
        <Drag ref={drag} onMouseDown={Move} />
        <Right ref={right}></Right>
      </Container>
    </>
  );
};

export default DRAGCOMP;
