import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MyLinkStyle = styled(NavLink)`
  color: #eeabab;
  background-color: #faa6fa66;
  display: inline-block;
  height: 23px;
  width: 50px;
  text-align: center;
  &.Green {
    color: green;
  }
  :hover {
    color: #6b6baf;
    background-color: #f3bcbc;
  }
`;

const MyLink = (props: any) => {
  return (
    <>
      <MyLinkStyle activeClassName="Green" {...props}></MyLinkStyle>
      &nbsp;
    </>
  );
};

export default MyLink;
