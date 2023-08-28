import React from "react";

const PageName = (props) => {
  return (
    <h3 className="font-NotoSerif text-main-blue/80 text-4xl font-bold p-10">
      {props.children}
    </h3>
  );
};

export default PageName;
