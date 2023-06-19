import React from "react";
import { BackHeader } from "../components/BackHeader";
import { Footer } from "../components/Footer";

export const NotFound = (props) => {
  return (
    <div class=' bg-white'>
      <section class='w-screen h-screen flex flex-col text-center'>
        <BackHeader />
        <div class='flex flex-col m-auto '>
          <p class='m-auto text-main-blue font-NotoSerif text-3xl font-bold'>
            Oops!
          </p>
          <p class='m-2 font-NotoSerif text-base font-medium'>
            Sorry, Page Not Found.
          </p>
        </div>
        <Footer />
      </section>
    </div>
  );
};
