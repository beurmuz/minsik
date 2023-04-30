import React from "react";
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import imageURL from "./assets/images/back.jpg";
import { menuStore } from "./shared/store";
import { Intro } from "./pages/Intro";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/intro",
//     element: <Intro />,
//   },
// ]);

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
      <NotFound />
      {/* <RouterProvider router={router} /> */}
      {/* <Intro /> */}
      {/* <Home /> */}
      {showMenu ? <Menu /> : ""}
    </div>
  );
};

export default App;
