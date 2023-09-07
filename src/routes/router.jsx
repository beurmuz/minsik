import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Intro } from "../pages/Intro";
import { News } from "../pages/News";
import { Songs } from "../pages/Songs";
import { NotFound } from "../pages/NotFound";
import { Menu } from "../components/Menu";
import { menuStore } from "../shared/store";

const Router = () => {
  const { showMenu } = menuStore((state) => state);

  return (
    <BrowserRouter>
      <div class="App" className="w-screen h-screen bg-white">
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
