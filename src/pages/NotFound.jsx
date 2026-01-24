import React from "react";
import BackHeader from "../components/BackHeader";
import Footer from "../components/Footer";

const NotFound = (props) => {
  return (
    <div className="bg-white">
      <section className="w-full h-screen flex flex-col">
        <BackHeader />
        <div className="flex flex-col m-auto text-center">
          <p className="m-auto text-black font-Pretendard text-3xl font-bold">
            Oops!
          </p>
          <p className="m-2 font-Pretendard text-base font-medium text-gray-700">
            Sorry, Page Not Found.
          </p>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default NotFound;