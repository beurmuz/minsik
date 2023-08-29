import React from "react";

const PageName = (props) => {
  return (
    // font-NotoSerif
    <h1 className="font-Pretendard text-main-blue/80 text-4xl font-bold p-10">
      {props.children}
    </h1>
  );
};

export default PageName;
