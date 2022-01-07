import React from "react";

const Context = (props: any) => {
  const arr = props.value.filter((val: string) => val !== "");
  return (
    <div>
      <ul>
        {arr.map((item: string, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Context;
