import ReactLazilyComponent from "react-lazily-component";
import MyLink from "./MyLink";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
// import Page1 from "./Page1";

const Page1 = ReactLazilyComponent(() => import("./Page1"));
const Page2 = ReactLazilyComponent(() => import("./Page2"));
const Page3 = ReactLazilyComponent(() => import("./Page3"));

const ShowDiv = styled.div`
  height: 123px;
  width: 200px;
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
    </BrowserRouter>
  );
};

export default RouterShow;
