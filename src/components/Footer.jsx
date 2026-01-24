import React from "react";
import { getYear } from "../utils/date.js";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black">
      <div className="w-full max-w-6xl mx-auto px-6 mt-12 mb-10 flex flex-col justify-center">
      <p className="text-black font-Pretendard text-xs">
        Contact | fallinta2@gmail.com
      </p>
      <p className="text-black font-Pretendard text-xs">
        Copyright | ⓒ 2023-{getYear()} beurmuz. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
