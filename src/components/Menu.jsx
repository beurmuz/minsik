import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";
import { menuStore } from "../shared/store";
import { useNavigate } from "react-router-dom";

export const Menu = (props) => {
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
    return () => {
      $body.style.overflow = overflow;
    };
  });

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-500/50 flex justify-center align-middle">
      <div className="w-5/6 h-4/6 fixed top-0 bottom-0 left-0 right-0 m-auto text-center z-99 bg-main-white flex flex-col justify-between rounded-md">
        <div className="flex flex-row justify-between">
          <span />
          <button
            className="hover:cursor-pointer text-main-blue mt-7 mr-4"
            onClick={closeMenu}
          >
            <IoIosClose size="60" />
          </button>
        </div>
        <div className="h-full flex flex-col justify-center text-left text-4xl text-main-blue">
          <span className="ml-7 my-3">
            <button
              className="font-NotoSerif font-semibold"
              onClick={() => gotoPage("intro")}
            >
              Introduce
            </button>
          </span>
          <span className="ml-7 my-3">
            <button
              className="font-NotoSerif font-semibold"
              onClick={() => gotoPage("songs")}
            >
              Songs
            </button>
          </span>
          <span className="ml-7 my-3">
            <button
              className="font-NotoSerif font-semibold"
              onClick={() => gotoPage("news")}
            >
              News
            </button>
          </span>
        </div>
        <div className="flex flex-row justify-start text-1xl text-main-blue-light">
          <span className="flex flex-row">
            <a
              href="https://www.instagram.com/younghotyellow94/"
              target="_blank"
              rel="noreferrer"
              className="mb-7 ml-7 font-NotoSerif font-semibold"
            >
              <FaInstagram size="30" />
            </a>
          </span>
          <span className="flex flex-row">
            <a
              href="https://twitter.com/younghotyellow"
              target="_blank"
              rel="noreferrer"
              className="mb-7 ml-7 font-NotoSerif font-semibold"
            >
              <FaTwitter size="30" />
            </a>
          </span>
          <span className="flex flex-row">
            <a
              href="https://www.youtube.com/channel/UCxd-HCJDFkaDjpg-y3PgkEA"
              target="_blank"
              rel="noreferrer"
              className="mb-7 ml-7 font-NotoSerif font-semibold"
            >
              <FaYoutube size="30" />
            </a>
          </span>
          <span className="flex flex-row">
            <a
              href="https://soundcloud.com/younghotyellow"
              target="_blank"
              rel="noreferrer"
              className="mb-7 ml-7 font-NotoSerif font-semibold"
            >
              <FaSoundcloud size="30" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
