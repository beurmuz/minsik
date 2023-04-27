import React from "react";
import { IoIosClose } from "react-icons/io";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";
import { menuStore } from "../shared/store";

export const Menu = (props) => {
  const { showMenu, setShowMenu } = menuStore((state) => state);
  const closeMenu = () => {
    if (showMenu) setShowMenu();
  };

  return (
    <div class='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-500/50 flex justify-center align-middle'>
      <div class='w-5/6 h-5/6 fixed top-0 bottom-0 left-0 right-0 m-auto text-center z-99 bg-main-white flex flex-col justify-between rounded'>
        <div class='flex flex-row justify-between'>
          <span />
          <button
            class='hover:cursor-pointer text-main-blue mt-7 mr-5'
            onClick={closeMenu}
          >
            <IoIosClose size='60' />
          </button>
        </div>
        <div class='h-full flex flex-col justify-center text-left text-4xl text-main-blue'>
          <span class='ml-7 my-3'>
            <button class='font-NotoSerif font-semibold'>Songs</button>
          </span>
          <span class='ml-7 my-3'>
            <button class='font-NotoSerif font-semibold'>News</button>
          </span>
          <span class='ml-7 my-3'>
            <button class='font-NotoSerif font-semibold'>Schedules</button>
          </span>
          <span class='ml-7 my-3'>
            <button class='font-NotoSerif font-semibold'>Cherring</button>
          </span>
        </div>
        <div class='flex flex-row justify-start text-1xl text-main-blue-light'>
          <span class='flex flex-row'>
            <a
              href='https://www.instagram.com/younghotyellow94/'
              target='_blank'
              rel='noreferrer'
              class='mb-7 ml-7 font-NotoSerif font-semibold'
            >
              <FaInstagram size='30' />
            </a>
          </span>
          <span class='flex flex-row'>
            <a
              href='https://twitter.com/younghotyellow'
              target='_blank'
              rel='noreferrer'
              class='mb-7 ml-7 font-NotoSerif font-semibold'
            >
              <FaTwitter size='30' />
            </a>
          </span>
          <span class='flex flex-row'>
            <a
              href='https://www.youtube.com/channel/UCxd-HCJDFkaDjpg-y3PgkEA'
              target='_blank'
              rel='noreferrer'
              class='mb-7 ml-7 font-NotoSerif font-semibold'
            >
              <FaYoutube size='30' />
            </a>
          </span>
          <span class='flex flex-row'>
            <a
              href='https://soundcloud.com/younghotyellow'
              target='_blank'
              rel='noreferrer'
              class='mb-7 ml-7 font-NotoSerif font-semibold'
            >
              <FaSoundcloud size='30' />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
