import React from "react";
import List from "./List";
import Form from "./Form";
import { Provider } from "react-redux";
import { store } from "../Ts5redux/store/store";

const Ts5redux = () => {
  return (
    <Provider store={store}>
      <Form></Form>
      <List></List>
    </Provider>
  );
};

export default Ts5redux;
