import { connect } from "react-redux";
import { Istate } from "./store/reducer";
import { Button } from "antd";
import { updatedataAction } from "./store/action";

const List = (props: any) => {
  const submit = (item: string) => {
    props.updatedata(item);
  };
  return (
    <div>
      <ul>
        {props.list &&
          props.list.map((item: string, index: number) => {
            return (
              <li key={index}>
                {item}
                <Button onClick={() => submit(item)}>delete</Button>
              </li>
            );
          })}
      </ul>
      <ul>
        {props.datasource && (
          <>
            <li>{props.datasource.name}</li>
            <li>{props.datasource.age}</li>
            <li>{props.datasource.msg}</li>
          </>
        )}
      </ul>
    </div>
  );
};
//这个函数可以读取到store里面的数据
const mapStateToProps = (state: Istate) => {
  return {
    list: state.list,
    datasource: state.datasource,
  };
};
//把一个dispatch放到自己的props里面去 可以调用
const mapDispatchToProps1 = (dispatch: any) => {
  return {
    updatedata(item: string) {
      dispatch(updatedataAction(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps1)(List);
