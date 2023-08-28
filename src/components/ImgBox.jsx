import React from "react";
import { img0, img1, img2, img3, img4 } from "../assets/images/intro/intro";

export const ImgBox = () => {
  let imgUrls = [img0, img1, img2, img3, img4];

  return (
    <div className="flex flex-row overflow-x-auto m-8 py-3">
      {imgUrls.map((imgUrl) => {
        return (
          <div className="w-full h-full">
            <div className="w-72 mr-7">
              <img
                className=" h-[30rem] object-cover"
                src={imgUrl}
                alt="profile"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
