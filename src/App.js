import React from "react";
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import imageURL from "./assets/images/back.jpg";
import { menuStore } from "./shared/store";

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
      {showMenu ? <Menu /> : <Home />}
    </div>
  );
};

export default App;
