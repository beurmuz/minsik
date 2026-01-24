import React from "react";
import { SITE_CONTAINER } from "../shared/layout";

const PageContainer = ({ children, className = "" }) => {
  return (
    <main
      className={`${SITE_CONTAINER} py-10 animate-pageLoadEffect ${className}`.trim()}
    >
      {children}
    </main>
  );
};

export default React.memo(PageContainer);
