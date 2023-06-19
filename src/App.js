import React from "react";
import { Menu } from "./components/Menu";
import imageURL from "./assets/images/back.jpg";
import { menuStore } from "./shared/store";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const { showMenu } = menuStore((state) => state);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
  ]);

  return (
    <div
      className='App'
      class='w-screen h-screen bg-main-white bg-cover bg-center overflow-x-hidden'
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <RouterProvider router={router} />
      {/* <Home /> */}
      {showMenu ? <Menu /> : ""}
    </div>
  );
};

export default App;
