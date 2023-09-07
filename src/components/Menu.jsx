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
      <nav className="w-5/6 h-4/6 fixed top-0 bottom-0 left-0 right-0 m-auto text-center z-99 bg-main-white flex flex-col justify-between rounded-md">
        <div className="flex flex-row justify-between pt-7 px-4">
          <span />
          <button
            type="button"
            name="close menu"
            className="hover:cursor-pointer text-main-blue"
            onClick={closeMenu}
          >
            <IoIosClose size="60" />
          </button>
        </div>
        <div className="h-full flex flex-col justify-center text-4xl text-main-blue">
          <button
            type="button"
            name="go to Introduce Page"
            className="font-NotoSerif font-semibold text-left ml-7 my-3"
            onClick={() => gotoPage("intro")}
          >
            Introduce
          </button>
          <button
            type="button"
            name="go to Songs Page"
            className="font-NotoSerif font-semibold text-left ml-7 my-3"
            onClick={() => gotoPage("songs")}
          >
            Songs
          </button>
          <button
            type="button"
            name="go to News Page"
            className="font-NotoSerif font-semibold text-left ml-7 my-3"
            onClick={() => gotoPage("news")}
          >
            News
          </button>
        </div>
        <div className="flex flex-row justify-center text-1xl text-main-blue-light p-3">
          <a
            href="https://www.instagram.com/younghotyellow94/"
            target="_blank"
            rel="noreferrer"
            className="m-2 p-1"
          >
            <FaInstagram size="30" />
          </a>
          <a
            href="https://twitter.com/younghotyellow"
            target="_blank"
            rel="noreferrer"
            className="m-2 p-1"
          >
            <FaTwitter size="30" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCxd-HCJDFkaDjpg-y3PgkEA"
            target="_blank"
            rel="noreferrer"
            className="m-2 p-1"
          >
            <FaYoutube size="30" />
          </a>
          <a
            href="https://soundcloud.com/younghotyellow"
            target="_blank"
            rel="noreferrer"
            className="m-2 p-1"
          >
            <FaSoundcloud size="30" />
          </a>
        </div>
      </nav>
    </div>
  );
};
