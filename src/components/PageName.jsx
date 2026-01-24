import React from "react";

const PageName = (props) => {
  return (
    <h2 className="font-Pretendard text-black text-2xl font-bold mb-6">
      {props.children}
    </h2>
  );
};

export default PageName;
