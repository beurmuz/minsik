import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import GotoTopButton from "./GotoTopButton";

const RootLayout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="w-full min-h-screen flex flex-col relative">
            <div className={isHome ? "absolute top-0 left-0 w-full z-10" : ""}>
                <Header changeColor={!isHome} />
            </div>
            <main className="flex-1">
                {children}
            </main>
            <GotoTopButton />
        </div>
    );
};

export default RootLayout;
