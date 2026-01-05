import React, { useEffect } from "react";
import { menuStore } from "../shared/store";
import { useNavigate } from "react-router-dom";
import closeIcon from "../assets/images/icons/closeIcon.webp";

const Menu = (props) => {
  const { showMenu, setShowMenu } = menuStore((state) => state);
  const closeMenu = () => {
    if (showMenu) setShowMenu();
  };

  let navigate = useNavigate();
  const gotoPage = (pageName) => {
    closeMenu();
    navigate(`/${pageName}`);
  };

  useEffect(() => {
    // 외부 스크롤 막기
    const $body = document.querySelector("body");
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
      $body.ariaHidden = false;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showMenu]);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-99 bg-white/95 flex flex-col justify-between align-middle animate-menuLoadEffect px-52 max-lg:px-32 max-md:px-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
    >
      <div className="flex flex-row justify-between pt-12 px-12">
        <span />
        <button
          type="button"
          aria-label="메뉴 닫기"
          className="hover:cursor-pointer text-main-blue focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2 rounded"
          onClick={closeMenu}
        >
          <img
            src={closeIcon}
            className="w-10 h-10"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
      {/* navigation */}
      <nav
        className="flex flex-col text-3xl text-main-blue px-12 pb-16"
        id="menu-title"
        aria-label="주요 메뉴"
      >
        <div className="flex flex-col py-10 border-b border-main-blue">
          <button
            type="button"
            aria-label="소개 페이지로 이동"
            className="font-Pretendard font-bold text-left py-2 focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2 rounded px-2"
            onClick={() => gotoPage("intro")}
          >
            Introduce
          </button>
          <button
            type="button"
            aria-label="노래 페이지로 이동"
            className="font-Pretendard font-bold text-left py-2 focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2 rounded px-2"
            onClick={() => gotoPage("songs")}
          >
            Songs
          </button>
          <button
            type="button"
            aria-label="뉴스 페이지로 이동"
            className="font-Pretendard font-bold text-left py-2 focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2 rounded px-2"
            onClick={() => gotoPage("news")}
          >
            News
          </button>
        </div>
        {/* SNS */}
        <div className="flex flex-col justify-center font-3xl text-left text-main-blue/75 py-10">
          <a
            href="https://www.instagram.com/younghotyellow94/"
            target="_blank"
            rel="noreferrer"
            aria-describedby="클릭 시 Instagram으로 연결됩니다."
            className="font-Pretendard font-bold py-2"
          >
            Instagram
          </a>

          <a
            href="https://twitter.com/younghotyellow"
            target="_blank"
            rel="noreferrer"
            aria-describedby="클릭 시 Twitter로 연결됩니다."
            className="font-Pretendard font-bold py-2"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/channel/UCxd-HCJDFkaDjpg-y3PgkEA"
            target="_blank"
            rel="noreferrer"
            aria-describedby="클릭 시 Youtube로 연결됩니다."
            className="font-Pretendard font-bold  py-2"
          >
            Youtube
          </a>
          <a
            href="https://soundcloud.com/younghotyellow"
            target="_blank"
            rel="noreferrer"
            aria-describedby="클릭 시 SoundCloud로 연결됩니다."
            className="font-Pretendard font-bold text-left py-2"
          >
            SoundCloud
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
