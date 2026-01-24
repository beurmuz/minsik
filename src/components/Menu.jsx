import React, { useEffect, useCallback } from "react";
import { menuStore } from "../shared/store";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { showMenu, setShowMenu } = menuStore((state) => state);
  const closeMenu = useCallback(() => {
    if (showMenu) setShowMenu();
  }, [showMenu, setShowMenu]);

  let navigate = useNavigate();
  const gotoPage = (pageName) => {
    closeMenu();
    navigate(`/${pageName}`);
  };

  useEffect(() => {
    // 외부 스크롤 막기
    const $body = document.body;
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";

    // ESC 키로 모달 닫기
    const handleEscape = (e) => {
      if (e.key === "Escape" && showMenu) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      $body.style.overflow = overflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showMenu, closeMenu]);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-99 bg-white/95 animate-menuLoadEffect"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
    >
      <div className="w-full h-full max-w-6xl mx-auto px-6 flex flex-col justify-between">
        <div className="flex flex-row justify-between mt-3">
          <span />
          <button
            type="button"
            aria-label="메뉴 닫기"
            className="hover:cursor-pointer text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded w-10 h-10 flex items-center justify-center font-Pretendard font-medium text-2xl leading-none"
            onClick={closeMenu}
          >
            X
          </button>
        </div>

        {/* navigation */}
        <nav
          className="flex flex-col text-black pb-16"
          id="menu-title"
          aria-label="주요 메뉴"
        >
          <div className="flex flex-col py-7">
            <button
              type="button"
              aria-label="메인 페이지로 이동"
              className="font-Pretendard font-bold text-2xl lg:text-3xl text-left py-1 lg:py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
              onClick={() => gotoPage("")}
            >
              Main
            </button>
            <button
              type="button"
              aria-label="소개 페이지로 이동"
              className="font-Pretendard font-bold text-2xl lg:text-3xl text-left py-1 lg:py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
              onClick={() => gotoPage("intro")}
            >
              Introduce
            </button>
            <button
              type="button"
              aria-label="노래 페이지로 이동"
              className="font-Pretendard font-bold text-2xl lg:text-3xl text-left py-1 lg:py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
              onClick={() => gotoPage("songs")}
            >
              Songs
            </button>
            <button
              type="button"
              aria-label="뉴스 페이지로 이동"
              className="font-Pretendard font-bold text-2xl lg:text-3xl text-left py-1 lg:py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
              onClick={() => gotoPage("news")}
            >
              News
            </button>
          </div>
          {/* SNS */}
          <div className="flex flex-col justify-center text-left text-black py-10">
            <a
              href="https://www.instagram.com/younghotyellow94/"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 Instagram으로 연결됩니다."
              className="font-Pretendard font-bold text-2xl lg:text-3xl py-1 lg:py-2"
            >
              Instagram
            </a>

            <a
              href="https://twitter.com/younghotyellow"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 X로 연결됩니다."
              className="font-Pretendard font-bold text-2xl lg:text-3xl py-1 lg:py-2"
            >
              X
            </a>
            <a
              href="https://www.tiktok.com/@sik.k94"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 TikTok으로 연결됩니다."
              className="font-Pretendard font-bold text-2xl lg:text-3xl py-1 lg:py-2"
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/channel/UCxd-HCJDFkaDjpg-y3PgkEA"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 Youtube로 연결됩니다."
              className="font-Pretendard font-bold text-2xl lg:text-3xl py-1 lg:py-2"
            >
              Youtube
            </a>
            <a
              href="https://soundcloud.com/younghotyellow"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 SoundCloud로 연결됩니다."
              className="font-Pretendard font-bold text-2xl lg:text-3xl text-left py-1 lg:py-2"
            >
              SoundCloud
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
