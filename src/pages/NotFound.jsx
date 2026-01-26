import React from "react";
import BackHeader from "../components/BackHeader";
import Footer from "../components/Footer";

const NotFound = (props) => {
  return (
    <div className="bg-white">
      <section className="w-full h-screen flex flex-col">
        <BackHeader />
        <div className="flex flex-col m-auto text-center">
          <p className="m-2 font-Pretendard text-xl font-medium text-sub-color">
            Page Not Found.
          </p>
        </div>
        <Footer changeColor={true} />
      </section>
    </div>
  );
};

export default NotFound;
