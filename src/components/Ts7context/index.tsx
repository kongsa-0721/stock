import React, { Component, ReactNode } from "react";
import { Provider, Consumer, testContext } from "./context";
import "./index.css";

class ChildA extends Component {
  //类组件这样处理
  static contextType?: React.Context<any> | undefined = testContext;
  constructor(props: any) {
    super(props);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }
  add(pro: number) {
    this.context.add(pro);
  }
  minus(less: number) {
    this.context.minus(less);
  }
  render() {
    console.log(this);

    return (
      <div className="childA">
        ChildA
        <button onClick={() => this.add(2)}></button>
        <span>{this.context}</span>
      </div>
    );
  }
}
class ChildB extends Component {
  render() {
    return (
      <div className="childB">
        ChildB
        <ChildC></ChildC>
      </div>
    );
  }
}
const ChildC = (props: any) => {
  return (
    <div className="childC">
      ChildC
      <Consumer>{(value) => <div>{value}</div>}</Consumer>
      <ChildD></ChildD>
    </div>
  );
};
const ChildD = (props: any) => {
  return <div className="childD">ChildD</div>;
};

export default class Ts7context extends Component {
  constructor(props: any) {
    super(props);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }
  state = {
    count: 0,
  };
  add(fig: number): void {
    this.setState({ count: this.state.count + fig });
  }
  minus(fig: number) {
    this.setState({ count: this.state.count - fig });
  }
  render() {
    return (
      <Provider
        value={{ count: this.state.count, add: this.add, minus: this.minus }}
      >
        <button onClick={() => this.add}>add</button>
        <button onClick={() => this.minus}>minus</button>
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    );
  }
}
