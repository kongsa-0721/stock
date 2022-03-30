import qs from "querystring";
import { useEffect } from "react";

const Item1 = (props: any) => {
  const { id, content } = props.match.params;
  return (
    <div>
      id:{id}
      <br />
      content:{content}
    </div>
  );
};
const Item2 = (props) => {
  const changeRouter = () => {
    props.history.push("/page3/item3");
  };
  useEffect(() => {
    setTimeout(() => {
      changeRouter();
    }, 3000);
  });
  const data = qs.parse(props.location.search.slice(1));
  const { id, content } = data;
  return (
    <div>
      id:{id}
      <br />
      content:{content}
    </div>
  );
};
const Item3 = (props) => {
  //做错误处理 刷新界面state会丢失
  const { id, content } = props.location.state || {};
  return (
    <div>
      id:{id}
      <br />
      content:{content}
    </div>
  );
};

export { Item1, Item2, Item3 };
