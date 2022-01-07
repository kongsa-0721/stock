import React from "react";

interface Iprops {
  message: string;
}
interface Istate {
  count: number;
}
//这个泛型 第一个是props 第二个是state
export default class Ts2 extends React.PureComponent<Iprops, Istate> {
  constructor(props: Readonly<Iprops>) {
    super(props);
    this.state = {
      count: 0,
    };
    this.button1 = this.button1.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  //组件卸载的时候清除掉状态 上面定一了一个setInterval；
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  button1() {
    this.setState({
      count: 100,
    });
  }
  button2 = () => {
    console.log("this is button2");
    console.log(this.state.count);
  };
  //类组件传递参数就要这种写法
  button3 = (str: string) => {
    console.log("this is button3");
    console.log(this.state.count);
    console.log(str);
  };
  render() {
    return (
      <div>
        {this.state.count}
        {this.props.message}
        <button onClick={this.button1}>button1</button>
        <button onClick={this.button2}>button2</button>
        <button
          onClick={() => {
            this.button3("button3");
          }}
        >
          button3
        </button>
      </div>
    );
  }
}
