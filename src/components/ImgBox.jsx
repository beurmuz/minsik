import React from "react";
import { img0, img1, img2, img3, img4 } from "../assets/images/intro/intro";
import baseImg from "../assets/images/base_intro.png";

const ImgBox = () => {
  let imgUrls = [img0, img1, img2, img3, img4];
  const onErrorImg = (e) => {
    e.target.src = baseImg;
  };

  console.log("😛 ImgBox 컴포넌트 호출");

  return (
    <article className="flex flex-row overflow-x-auto m-8 py-3">
      {imgUrls.map((imgUrl) => {
        return (
          <div key={imgUrl} className="w-full h-full">
            <div className="w-72 mr-7">
              <img
                className=" h-[30rem] object-cover"
                src={imgUrl}
                alt="식케이 사진"
                onError={onErrorImg}
              />
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default ImgBox;
