import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import MyLink from "../MyLink";
import { Item1, Item2, Item3 } from "./Item";

const Page3Div = styled.div`
  width: 200px;
  height: 100px;
  background-color: #fff;
`;
const Data = [
  { id: 1, content: "conten1" },
  { id: 2, content: "conten2" },
  { id: 3, content: "conten3" },
];
const Page3 = (props: any) => {
  return (
    <Page3Div>
      <MyLink to={`/page3/item1/${Data[0].id}/${Data[0].content}`}>
        item1
      </MyLink>
      <MyLink to={`/page3/item2/?id=${Data[1].id}&content=${Data[1].content}`}>
        item2
      </MyLink>
      <MyLink
        to={{
          pathname: "/page3/item3",
          state: { id: Data[2].id, content: Data[2].content },
        }}
      >
        item3
      </MyLink>
      <Page3Div>
        <Switch>
          <Route path={"/page3/item1/:id/:content"} component={Item1}></Route>
          <Route path={"/page3/item2"} component={Item2}></Route>
          <Route path={"/page3/item3"} component={Item3}></Route>
          <Redirect to={"/page3/item3"} />
        </Switch>
      </Page3Div>
    </Page3Div>
  );
};

export default Page3;
