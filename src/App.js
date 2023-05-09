import React from "react";
import { Menu } from "./components/Menu";
import imageURL from "./assets/images/back.jpg";
import { menuStore } from "./shared/store";
import { News } from "./pages/News";
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
      <Intro />
      {showMenu ? <Menu /> : ""}
    </div>
  );
};

export default App;
