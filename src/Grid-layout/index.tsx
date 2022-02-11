import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
import "../Grid-layout/index.css";
// import { antdbtnstyle } from "./style";
import styled from "styled-components";

import {
  Button,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  DatePicker,
  Card,
  Image,
  Table,
} from "antd";

interface Iprops {
  className: string;
  rowHeight: number;
  onLayoutChange: (layout: any) => {};
  cols: number;
}
interface Istate {
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string;
    minH?: number;
    maxH?: number;
    minW?: number;
    maxW?: number;
    static?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
    resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">;
    isBounded?: boolean;
  }[];
  linearstyles: {};
  mywidth: number;
}
const { Option } = Select;

const Btnantd = styled(Button)`
  .ant-btn {
    height: 100% !important;
    width: 100%;
    font-size: 15px !important;
  }
`;
export default class Gridlayout extends React.PureComponent<Iprops, Istate> {
  static defaultProps = {
    className: "layout",
    rowHeight: 10,
    onLayoutChange: () => {},
    cols: 24,
  };
  constructor(props: Iprops) {
    super(props);
    const layout = [
      {
        x: 0,
        y: 0,
        w: 1,
        h: 3.2,
        minH: 3.2,
        maxH: 3.2,
        minW: 1,
        maxW: 3,
        i: "0",
      },
      {
        x: 0,
        y: 0,
        w: 1,
        h: 3.2,
        minH: 3.2,
        maxH: 3.2,
        minW: 1,
        maxW: 3,
        i: "1",
      },
      {
        x: 0,
        y: 0,
        w: 1,
        h: 3.2,
        minH: 3.2,
        maxH: 3.2,
        minW: 1,
        maxW: 7,
        i: "2",
      },
      {
        x: 0,
        y: 0,
        w: 1.5,
        h: 3.2,
        minH: 3.2,
        maxH: 3.2,
        i: "3",
      },
      {
        x: 0,
        y: 0,
        w: 1.5,
        h: 4.4,
        minH: 4.4,
        maxH: 4.4,
        minW: 1.5,
        maxW: 3,
        i: "4",
      },
      {
        x: 0,
        y: 0,
        w: 1.5,
        h: 4.4,
        minH: 4.4,
        maxH: 4.4,
        minW: 1.5,
        maxW: 3,
        i: "5",
      },
      {
        x: 0,
        y: 0,
        w: 1.5,
        h: 2.3,
        minH: 2.3,
        maxH: 2.3,
        minW: 1.5,
        maxW: 3,
        i: "6",
      },
      {
        x: 0,
        y: 0,
        w: 2,
        h: 3.2,
        minH: 3.2,
        maxH: 3.2,
        minW: 2,
        maxW: 2,
        i: "7",
      },
      {
        x: 3,
        y: 0,
        w: 5,
        h: 22,
        minH: 17,
        maxH: 25,
        minW: 3,
        maxW: 6,
        i: "8",
      },
      {
        x: 3,
        y: 0,
        w: 2,
        h: 14,
        i: "9",
      },
      {
        x: 0,
        y: 0,
        w: 3,
        h: 3.2,
        minH: 3.2,
        maxH: 3.2,
        minW: 3,
        maxW: 7,
        i: "10",
      },
      {
        x: 9,
        y: 0,
        w: 6,
        h: 3.2,
        i: "11",
        minH: 3.2,
        maxH: 3.2,
        minW: 4,
        maxW: 8,
      },
      {
        x: 9,
        y: 0,
        w: 7,
        h: 33,
        minH: 24,
        maxH: 35,
        minW: 5,
        maxW: 10,
        i: "12",
      },
    ];
    this.state = {
      layout,
      linearstyles: {},
      mywidth: document.getElementsByClassName("Grid-layout")[0]
        ?.clientWidth as number
    };
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
  }

  onLayoutChange(layout: any) {
    this.props.onLayoutChange(layout);
  }
  //动态修改width栏
  componentDidMount() {
    var app = document.getElementsByClassName("Grid-layout")[0];
    this.setState({ mywidth: app!.clientWidth });
    var _this = this;
    window.onresize = function () {
      var app = document.getElementsByClassName("Grid-layout")[0];
      _this.setState({ mywidth: app!.clientWidth });
    };
  }
  //布局开始拖动
  onDragStart() {
    this.setState({
      linearstyles: {
        backgroundImage: `repeating-linear-gradient(0deg, rgb(218, 196, 196) 0 .5px, transparent .5px 8px),repeating-linear-gradient(90deg, rgb(218, 196, 196) 0 .5px, transparent .5px ${
          this.state.mywidth ? this.state.mywidth / 24 : 70
        }px)`,
      },
    });
  }
  //布局拖动结束
  onDragStop(): void {
    this.setState({
      linearstyles: {},
    });
  }
  handleChange(value: any): void {
    console.log(`selected ${value}`);
  }
  onChange(e: any): void {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {
    const { Search } = Input;
    //table表格
    const columns: any = [
      {
        title: "Name (all screens)",
        dataIndex: "name",
        key: "name",
        render: (text: any) => <a>{text}</a>,
      },
      {
        title: "Age (medium screen or bigger)",
        dataIndex: "age",
        key: "age",
        responsive: ["md"],
      },
      {
        title: "Address (large screen or bigger)",
        dataIndex: "address",
        key: "address",
        responsive: ["lg"],
      },
    ];
    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        key: "3",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
      {
        key: "4",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ];
    return (
      <div className="Grid-layout" style={this.state.linearstyles}>
        <ReactGridLayout
          layout={this.state.layout}
          onDragStart={this.onDragStart}
          onDragStop={this.onDragStop}
          {...this.props}
          // compactType={"horizontal"}
          verticalCompact={false}
          // allowOverlap={true}
          autoSize={true}
          margin={[0, 0]}
        >
          <div className="antdcom" key={0}>
            <Btnantd>Button</Btnantd>
          </div>
          <div className="antdcom" key={1}>
            <Button>Button</Button>
          </div>
          <div className="antdcom" key={2}>
            <Input />
          </div>
          <div className="antdcom" key={3}>
            <Select defaultValue="lucy" onChange={this.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="antdcom" key={4}>
            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
          </div>
          <div className="antdcom" key={5}>
            <Radio.Group value={1}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </div>
          <div className={["antdcom", "switch-ant"].join(" ")} key={6}>
            <Switch defaultChecked />
          </div>
          <div className="antdcom" key={7}>
            <DatePicker />
          </div>
          <div className={["antdcom", "myantcard"].join(" ")} key={8}>
            <Card
              className="card-antd"
              title="Default size card"
              extra={<a href="#">More</a>}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className="antdcom" key={9}>
            <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </div>
          <div className="antdcom" key={10}>
            <Search />
          </div>
          <div className="antdcom" key={11}>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </div>
          <div className={["antdcom", "table-ant"].join(" ")} key={12}>
            <Table columns={columns} dataSource={data} />
          </div>
        </ReactGridLayout>
      </div>
    );
  }
}
