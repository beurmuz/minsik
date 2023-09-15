import React from "react";

const Toolbar = (props) => {
  console.log("🥳 Toolbar 컴포넌트 호출!");
  return (
    <div className="bg-black flex overflow-hidden">
      <div className="font-Pretendard w-screen h-9 flex flex-nowrap m-auto p-1 whitespace-nowrap text-white bg-black animate-marqueeOrigin max-[540px]:animate-marqueeResponsive">
        @younghotyellow94 @younghotyellow94 @younghotyellow94 @younghotyellow94
        @younghotyellow94 @younghotyellow94 @younghotyellow94 @younghotyellow94
        @younghotyellow94 @younghotyellow94 @younghotyellow94 @younghotyellow94
        @younghotyellow94 @younghotyellow94 @younghotyellow94 @younghotyellow94
      </div>
    </div>
  );
};

export default Toolbar;
