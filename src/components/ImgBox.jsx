import React from "react";
import { img0, img1, img2, img3, img4 } from "../assets/images/intro/intro";

export const ImgBox = () => {
  let imgUrls = [img0, img1, img2, img3, img4];

  return (
    <div className="flex flex-row overflow-x-auto m-10 py-5">
      {imgUrls.map((imgUrl, idx) => {
        return (
          <div className="w-full h-full">
            <div className="w-72 mr-7">
              {/* <img className="w-72 h-96 object-cover" src={imgUrl} /> */}
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
