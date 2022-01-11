import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { axiosGet } from "../../config/http/index";
import "./css/index.css";
import { putdataAction } from "./store/action";

const Form = (props: any) => {
  //网络请求
  const localreq = () => {
    return new Promise((res, rej) => {
      axiosGet({
        url: "/list",
        success(data) {
          res(data.data);
        },
        error(err) {
          rej(err);
        },
      });
    });
  };
  //获取数据
  const getdata = async () => {
    //这种形式只发送了一次网络请求
    if (datasour.loading) {
      const res = await localreq();
      setdatasour({
        datasource: res,
        loading: false,
      });
    }
  };
  const [datasour, setdatasour] = useState<any>({
    datasource: {},
    loading: true,
  });
  useEffect(() => {
    getdata();
    //console.log(datasour.datasource);
    props.putdata({ value, datasour });
  }, [datasour]);
  const [value, setvalue] = useState("");
  const handlesubmit = () => {
    props.putdata({ value, datasour });
    //给这个输入框加一个value 可以清除value
    setvalue("");
  };
  const handlechange = (e: any) => {
    setvalue(e.target.value);
  };
  return (
    <div>
      <Input
        onChange={handlechange}
        value={value}
        id="forminput"
        onPressEnter={handlesubmit}
      />
      <Button onClick={handlesubmit} size="large" type="ghost">
        submit
      </Button>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    putdata(data: any) {
      dispatch(putdataAction(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);