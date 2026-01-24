import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuStore } from "../shared/store";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));
const Intro = lazy(() => import("../pages/Intro"));
const News = lazy(() => import("../pages/News"));
const Songs = lazy(() => import("../pages/Songs"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Menu = lazy(() => import("../components/Menu"));

const Router = () => {
  const { showMenu } = menuStore((state) => state);

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
