import React from "react";
import { getYear } from "../utils/date.js";
import { SITE_CONTAINER } from "../shared/layout";

const Footer = ({ changeColor }) => {
  return (
    <footer className="w-full">
      <div className={`${SITE_CONTAINER} py-8`}>
        <p
          className={`font-NotoSerif text-xs font-medium ${changeColor ? "text-sub-color" : "text-white"}`}
        >
          Contact | fallinta2@gmail.com
        </p>
        <p
          className={`font-NotoSerif text-xs font-medium ${changeColor ? "text-sub-color" : "text-white"}`}
        >
          Copyright | ⓒ 2023-{getYear()} beurmuz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
