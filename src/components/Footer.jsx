import React, { useState, useEffect } from "react";
import { getYear } from "../utils/date.js";
import { SITE_CONTAINER } from "../shared/layout";

const Footer = ({ changeColor }) => {
  // 클라이언트에서만 연도 계산 (hydration 오류 방지)
  const [currentYear, setCurrentYear] = useState(2023);

  useEffect(() => {
    setCurrentYear(getYear());
  }, []);

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
          Copyright | ⓒ 2023-{currentYear} beurmuz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
