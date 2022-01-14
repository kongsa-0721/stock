import React from "react";

const Context = (props: any) => {
  const { arr } = props;
  const ownarr = arr.filter((item: string) => {
    return item !== "";
  });
  return (
    <div>
      <ul>
        {ownarr.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Context;
