import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuStore } from "../shared/store";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import News from "../pages/News";
import Songs from "../pages/Songs";
import NotFound from "../pages/NotFound";
import Menu from "../components/Menu";

const Router = () => {
  const { showMenu } = menuStore((state) => state);

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <div className="w-full min-h-screen bg-white overflow-x-hidden">
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
