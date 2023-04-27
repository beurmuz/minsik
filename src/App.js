import React from "react";
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import imageURL from "./assets/images/back.jpg";
import { menuStore } from "./shared/store";
import { Intro } from "./pages/Intro";

const App = () => {
  const { showMenu } = menuStore((state) => state);

  return (
    <div
      className='App'
      class='w-screen h-screen bg-main-white bg-cover bg-center overflow-x-hidden'
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Home />
      {showMenu ? <Menu /> : ""}
      {/* <Intro /> */}
    </div>
  );
};

export default App;
