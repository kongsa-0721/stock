import React from "react";

const Context = () => {
  let myarr = JSON.parse(localStorage.getItem("information"));
  // if (myarr == null) {
  //   myarr = JSON.parse(JSON.stringify([""]));
  // }
  const ownarr = myarr.filter((item: string) => {
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
