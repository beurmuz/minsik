import React from "react";
import { Home } from "./pages/Home";
import imageURL from "./assets/images/back.jpg";
// import imageURL from "./assets/images/background.jpg";

const App = () => {
  return (
    <div
      className='App'
      class='w-screen h-screen bg-cover bg-center'
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Home />
    </div>
  );
};

export default App;
