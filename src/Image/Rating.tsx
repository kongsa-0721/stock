import { Rate } from "antd";
import { useState } from "react";

const Rating = () => {
  const [score, setScore] = useState(1);
  return (
    <>
      <Rate
        defaultValue={3}
        value={score}
        allowHalf
        onChange={(score) => {
          setScore(score);
        }}
      />
      {score}
    </>
  );
};

export { Rating };
