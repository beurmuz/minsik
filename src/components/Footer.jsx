import React from "react";
import { getYear } from "../utils/date.js";
import { SITE_CONTAINER } from "../shared/layout";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className={`${SITE_CONTAINER} py-7`}>
        <p className=" text-white font-NotoSerif text-xs font-medium">
          Contact | fallinta2@gmail.com
        </p>
        <p className=" text-white font-NotoSerif text-xs font-medium">
          Copyright | ⓒ 2023-{getYear()} beurmuz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
