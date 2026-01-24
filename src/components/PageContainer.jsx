import React from "react";

const PageContainer = ({ children, className = "" }) => {
  return (
    <main
      className={`w-full max-w-6xl mx-auto px-6 py-10 animate-pageLoadEffect ${className}`.trim()}
    >
      {children}
    </main>
  );
};

export default React.memo(PageContainer);

