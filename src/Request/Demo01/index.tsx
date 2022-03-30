import { Button } from "antd";
import axios from "axios";

const ReqDemo01 = () => {
  const handleSubmit = () => {
    axios
      .get("/api")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

export default ReqDemo01;
