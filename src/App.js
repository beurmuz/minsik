import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import imageURL from "./assets/images/back.jpg";
import { Menu } from "./components/Menu";
import ReactGA from "react-ga";

const App = () => {
  useEffect(() => {
    React.initialize("user id");
  });

  return (
    <div
      className='App'
      class='w-screen h-screen bg-main-white bg-cover bg-center overflow-x-hidden'
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Home />
      {/* <Menu /> */}
    </div>
  );
};

export default App;
