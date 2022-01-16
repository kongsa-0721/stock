import React from "react";

const Context = () => {
  let myarr = JSON.parse(localStorage.getItem("information"));
  const ownarr: string[] = myarr.filter((item: string) => {
    return item !== "";
  });
  return (
    <div>
      <ul>
        {ownarr.map((item: string, key: number) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Context;
