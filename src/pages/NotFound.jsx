import React from "react";
import BackHeader from "../components/BackHeader";
import Footer from "../components/Footer";

const NotFound = (props) => {
  return (
    <div className=" bg-white px-52 max-lg:px-32 max-md:px-0">
      <section className="w-full h-screen flex flex-col">
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

export default NotFound;
