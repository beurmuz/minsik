import React, { useState } from "react";
import Router from "./routes/router.jsx";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Router />
    </>
  );
};

export default App;
