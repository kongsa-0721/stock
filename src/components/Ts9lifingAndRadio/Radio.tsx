import { Radio } from "antd";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 6px;
  display: inline-block !important;
  padding: 2px;
  background-color: #efeff1;
  //大框架的背景色和字体颜色
  .ant-radio-button-wrapper {
    font-family: PingFangSC-Medium;
    background-color: #efeff1;
    font-size: 12px;
    color: #8b8fa3;
    border: none;
    height: 24px;
    line-height: 24px;
    width: 90px;
    text-align: center;
  }
  //被点击的item的圆角
  .ant-radio-button-wrapper-checked {
    border-radius: 6px;
  }
  //被点击的背景色 字体颜色
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    font-family: PingFangSC-Medium;
    color: #333333;
    background-color: #ffffff;
    border: none;
  }
  //伪类 中间的一条蓝色的竖线
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: transparent !important;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    border-radius: 6px;
  }
  //改变shadow 不然会有一个蓝色的shadow
  .ant-radio-button-wrapper:focus-within {
    box-shadow: none;
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: transparent;
  }
`;
interface Iradioconfig {
  label: string;
  value: string;
}
interface Iprops {
  radioConfig: Array<Iradioconfig>;
  ChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const MyRadio = (props: Iprops) => {
  const { radioConfig, ChangeFn } = props;
  function Change(e: any) {
    ChangeFn(e);
  }
  return (
    <>
      <Container>
        <Radio.Group onChange={Change} defaultValue={radioConfig[0].value}>
          {radioConfig.map((item, index) => {
            return (
              <Radio.Button key={index} value={item.value}>
                {item.label}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Container>
    </>
  );
};

export { MyRadio };

// import { Radio } from "antd";
// import styled from "styled-components";

// const Container = styled.div`
//   border-radius: 6px;
//   display: inline-block !important;
//   padding: 2px;
//   background-color: #efeff1;
//   //大框架的背景色和字体颜色
//   .ant-radio-button-wrapper {
//     font-family: PingFangSC-Medium;
//     background-color: #efeff1;
//     font-size: 12px;
//     color: #8b8fa3;
//     border: none;
//     height: 24px;
//     line-height: 24px;
//     width: 60px;
//     text-align: center;
//   }
//   //被点击的item的圆角
//   .ant-radio-button-wrapper-checked {
//     border-radius: 6px;
//   }
//   //被点击的背景色 字体颜色
//   .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
//     font-family: PingFangSC-Medium;
//     color: #333333;
//     background-color: #ffffff;
//     border: none;
//   }
//   //伪类 中间的一条蓝色的竖线
//   .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
//     background-color: transparent !important;
//   }
//   .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
//     border-radius: 6px;
//   }
//   //改变shadow 不然会有一个蓝色的shadow
//   .ant-radio-button-wrapper:focus-within {
//     box-shadow: none;
//   }
//   .ant-radio-button-wrapper:not(:first-child)::before {
//     background-color: transparent;
//   }
// `;
// const MyRadio = () => {
//   function onChange(e) {
//     console.log(`radio checked:${e.target.value}`);
//   }
//   return (
//     <>
//       <Container>
//         <Radio.Group onChange={onChange} defaultValue="a">
//           <Radio.Button value="a">左侧</Radio.Button>
//           <Radio.Button value="b">顶部</Radio.Button>
//           <Radio.Button value="c">右侧</Radio.Button>
//         </Radio.Group>
//       </Container>
//     </>
//   );
// };

// export { MyRadio };
