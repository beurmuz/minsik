import React from "react";
import { getYear } from "../utils/date.js";

const Footer = () => {
  return (
    <div className="h-1/8 flex flex-col  justify-center mx-7 mb-10">
      <p className=" text-sky-700 font-NotoSerif text-xs">
        Contact | fallinta2@gmail.com
      </p>
      <p className=" text-sky-700 font-NotoSerif text-xs">
        Copyright | ⓒ {getYear()} beurmuz. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
