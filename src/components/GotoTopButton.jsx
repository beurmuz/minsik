import React, { useEffect, useState } from "react";
const GotoTopButton = (props) => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > window.innerHeight / 2
        ? setShowButton(true)
        : setShowButton(false);
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div className="fixed right-5 bottom-20 z-1">
        <button
          onClick={scrollToTop}
          type="button"
          className="w-10 h-10 pointer font-Pretendard text-sm text-white bg-black rounded-full animate-fadeInEffect"
        >
          TOP
        </button>
      </div>
    )
  );
};

export default GotoTopButton;
