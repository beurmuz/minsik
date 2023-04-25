import React from "react";
import { IoIosClose } from "react-icons/io";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";

export const Menu = (props) => {
  return (
    <div class='w-full h-screen bg-black text-white flex flex-col justify-between p-10'>
      <div class='flex flex-row justify-between'>
        <span />
        <button>
          <IoIosClose size='50' />
        </button>
      </div>
      <div class='h-80 flex flex-col justify-between text-5xl font-NotoDisplay font-semibold'>
        <nav>Songs</nav>
        <nav>News</nav>
        <nav>Schedules</nav>
        <nav>Cherring</nav>
      </div>
      <div class='flex flex-row justify-between text-1xl font-NotoDisplay font-medium'>
        <span class='flex flex-row'>
          <span class='p-1'>
            <FaInstagram size='20' />
          </span>
          <a
            href='https://www.instagram.com/younghotyellow94/'
            target='_blank'
            class='pl-1'
          >
            Instagram
          </a>
        </span>
        <span class='flex flex-row'>
          <span class='p-1'>
            <FaTwitter size='20' />
          </span>
          <a
            href='https://twitter.com/younghotyellow'
            target='_blank'
            class='pl-1'
          >
            Twitter
          </a>
        </span>
        <span class='flex flex-row'>
          <span class='p-1'>
            <FaYoutube size='20' />
          </span>
          <a
            href='https://www.youtube.com/channel/UCxd-HCJDFkaDjpg-y3PgkEA'
            target='_blank'
            class='pl-1'
          >
            Youtube
          </a>
        </span>
        <span class='flex flex-row'>
          <span class='p-1'>
            <FaSoundcloud size='20' />
          </span>
          <a
            href='https://soundcloud.com/younghotyellow'
            target='_blank'
            class='pl-1'
          >
            Soundcloud
          </a>
        </span>
      </div>
    </div>
  );
};
