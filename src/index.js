import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");

if (container.hasChildNodes()) {
  // react-hydratable로 미리 렌더링된 HTML이 있으면 hydration 사용
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  // 미리 렌더링된 HTML이 없으면 일반 렌더링
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
