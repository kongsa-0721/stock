import { Input } from "antd";
import styled from "styled-components";

const MyInput = styled(Input)`
  height: 30px;
  width: 180px;
  border-radius: 3px;
  border: 1px solid #ccc;
  display: inline-block;
`;
const Inputval = (props: any) => {
  const { value, onsubmit } = props;
  const handlechange = (e: any) => {
    onsubmit(e.target.value.toString());
  };
  return (
    <div>
      <MyInput onChange={handlechange} value={value} />
    </div>
  );
};

export default Inputval;
