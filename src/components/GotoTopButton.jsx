import React, { useEffect, useState } from "react";

const GotoTopButton = () => {
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
      // 스크롤 위치가 200px 이상이면 표시
      setShowButton(scrollY > 200);
    };

    // 초기 스크롤 위치 확인 (약간의 지연)
    const timer = setTimeout(() => {
      handleShowButton();
    }, 100);

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleShowButton, { passive: true });
    // resize 이벤트도 추가
    window.addEventListener("resize", handleShowButton, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleShowButton);
      window.removeEventListener("resize", handleShowButton);
    };
  }, []);

  if (!showButton) return null;

  return (
    <div className="fixed right-5 bottom-20 z-[100]">
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="페이지 상단으로 이동"
        className="w-10 h-10 pointer font-Pretendard text-sm text-white bg-black rounded-full animate-fadeInEffect focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        TOP
      </button>
    </div>
  );
};

export default GotoTopButton;
