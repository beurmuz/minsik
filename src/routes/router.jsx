import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Intro } from "../pages/Intro";
import { News } from "../pages/News";
import { Songs } from "../pages/Songs";
import { NotFound } from "../pages/NotFound";
import { Menu } from "../components/Menu";
import { menuStore } from "../shared/store";
import imageURL from "../assets/images/back.jpg";

const Router = () => {
  const { showMenu } = menuStore((state) => state);

  return (
    <BrowserRouter>
      <div
        className="App"
        class="w-screen h-screen bg-main-white bg-cover bg-center overflow-x-hidden"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/news" element={<News />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {showMenu ? <Menu /> : ""}
      </div>
    </BrowserRouter>
  );
};

export default Router;
