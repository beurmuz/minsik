import React from "react";

const PageName = (props) => {
  console.log("😉 PageName 컴포넌트 호출");
  return (
    <h2 className="font-Pretendard text-main-blue/80 text-4xl font-bold p-10">
      {props.children}
    </h2>
  );
};

export default PageName;
