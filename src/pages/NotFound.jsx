import React from "react";
import { BackHeader } from "../components/BackHeader";
import { Footer } from "../components/Footer";

export const NotFound = (props) => {
  return (
    <div className=" bg-white">
      <section className="w-screen h-screen flex flex-col">
        <BackHeader />
        <div className="flex flex-col m-auto text-center">
          <p className="m-auto text-main-blue font-NotoSerif text-3xl font-bold">
            Oops!
          </p>
          <p className="m-2 font-NotoSerif text-base font-medium">
            Sorry, Page Not Found.
          </p>
        </div>
        <Footer />
      </section>
    </div>
  );
};
