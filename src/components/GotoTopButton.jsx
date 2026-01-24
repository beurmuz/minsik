import React, { useEffect, useState } from "react";
const GotoTopButton = (props) => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    // Smooth scroll 지원 확인 (구형 Safari 폴백)
    if ('scrollBehavior' in document.documentElement.style) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // 구형 브라우저용 폴백: 즉시 스크롤
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleShowButton = () => {
      // scrollY 폴백 (구형 Safari 지원)
      const scrollY = window.scrollY || window.pageYOffset || 0;
      scrollY > window.innerHeight / 2
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
          aria-label="페이지 상단으로 이동"
          className="w-10 h-10 pointer font-Pretendard text-sm text-white bg-black rounded-full animate-fadeInEffect focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          TOP
        </button>
      </div>
    )
  );
};

export default GotoTopButton;
