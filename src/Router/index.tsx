import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import MyLink from "./MyLink";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

const ShowDiv = styled.div`
  height: 150px;
  width: 300px;
  background-color: #e7d5d5;
`;

const RouterShow = () => {
  return (
    <BrowserRouter>
      <MyLink to="/page1">page1</MyLink>
      <MyLink to="/page2">page2</MyLink>
      <MyLink to="/page3">page3</MyLink>
      <hr />
      <ShowDiv>
        <Switch>
          <Route path={"/page1"} component={Page1} />
          <Route path={"/page2"} component={Page2} />
          <Route path={"/page3"} component={Page3} />
          <Redirect to="/page1" />
        </Switch>
      </ShowDiv>
      <div>this is a div</div>
    </BrowserRouter>
  );
};

export default RouterShow;
