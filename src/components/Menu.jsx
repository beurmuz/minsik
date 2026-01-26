import React, { useEffect, useCallback } from "react";
import { menuStore } from "../shared/store";
import { useNavigate } from "react-router-dom";
import { SITE_CONTAINER } from "../shared/layout";

// 공통 스타일 클래스 상수 (컴포넌트 외부에 정의하여 매 렌더링마다 재생성 방지)
const MENU_BUTTON_CLASS =
  "font-Pretendard font-bold text-2xl lg:text-3xl text-left py-1 lg:py-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded";

const SNS_LINK_CLASS =
  "font-Pretendard font-bold text-2xl lg:text-3xl py-1 lg:py-2";

const Menu = (props) => {
  const { showMenu, setShowMenu } = menuStore((state) => state);
  const navigate = useNavigate();

  const closeMenu = useCallback(() => {
    if (showMenu) setShowMenu();
  }, [showMenu, setShowMenu]);

  const gotoPage = useCallback(
    (pageName) => {
      closeMenu();
      navigate(`/${pageName}`);
    },
    [closeMenu, navigate],
  );

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
  }, [showMenu, closeMenu]);

  return (
    <div
      className="fixed inset-0 w-full h-full z-10 bg-white/90 animate-menuLoadEffect"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
    >
      <div className={`${SITE_CONTAINER} h-full flex flex-col justify-between`}>
        <div className="flex flex-row justify-between pt-12">
          <span />
          <button
            type="button"
            aria-label="메뉴 닫기"
            className="shrink-0 rounded-md w-10 h-10 flex items-center justify-center font-Pretendard font-normal text-2xl leading-none hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-main-color focus:ring-offset-2"
            onClick={closeMenu}
          >
            X
          </button>
        </div>

        {/* navigation */}
        <nav
          className="flex flex-col text-3xl text-main-color pb-16"
          id="menu-title"
          aria-label="주요 메뉴"
        >
          <div className="flex flex-col py-7">
            <button
              type="button"
              aria-label="메인 페이지로 이동"
              className={MENU_BUTTON_CLASS}
              onClick={() => gotoPage("")}
            >
              Main
            </button>
            <button
              type="button"
              aria-label="소개 페이지로 이동"
              className={MENU_BUTTON_CLASS}
              onClick={() => gotoPage("intro")}
            >
              Introduce
            </button>
            <button
              type="button"
              aria-label="노래 페이지로 이동"
              className={MENU_BUTTON_CLASS}
              onClick={() => gotoPage("songs")}
            >
              Songs
            </button>
            <button
              type="button"
              aria-label="뉴스 페이지로 이동"
              className={MENU_BUTTON_CLASS}
              onClick={() => gotoPage("news")}
            >
              News
            </button>
          </div>
          {/* SNS */}
          <div className="flex flex-col justify-center text-left py-10">
            <a
              href="https://twitter.com/younghotyellow"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 X로 연결됩니다."
              className={SNS_LINK_CLASS}
            >
              X
            </a>
            <a
              href="https://www.tiktok.com/@sik.k94"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 TikTok으로 연결됩니다."
              className={SNS_LINK_CLASS}
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/channel/UCxd-HCJDFkaDjpg-y3PgkEA"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 Youtube로 연결됩니다."
              className={SNS_LINK_CLASS}
            >
              Youtube
            </a>
            <a
              href="https://www.instagram.com/younghotyellow94/"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 Instagram으로 연결됩니다."
              className={SNS_LINK_CLASS}
            >
              Instagram
            </a>
            <a
              href="https://soundcloud.com/younghotyellow"
              target="_blank"
              rel="noreferrer"
              aria-describedby="클릭 시 SoundCloud로 연결됩니다."
              className={`${SNS_LINK_CLASS} text-left`}
            >
              SoundCloud
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default React.memo(Menu);
