import React from "react";
import { getYear } from "../utils/date.js";
import { SITE_CONTAINER } from "../shared/layout";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className={`${SITE_CONTAINER} mb-10`}>
        <p className=" text-sky-700 font-NotoSerif text-xs">
          Contact | fallinta2@gmail.com
        </p>
        <p className=" text-sky-700 font-NotoSerif text-xs">
          Copyright | ⓒ 2023-{getYear()} beurmuz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
