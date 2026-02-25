import React, { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // 2.5초 후 페이드 아웃 시작, 3초 후 완료
        const fadeTimer = setTimeout(() => setIsFadingOut(true), 2500);
        const completeTimer = setTimeout(onComplete, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2F2A24] transition-opacity duration-500 ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="flex flex-col items-center">
                {/* Simplified Intro Text */}
                <p className="font-Pretendard font-medium text-sm md:text-lg text-white/70 tracking-[0.4em] overflow-hidden whitespace-nowrap border-r-2 border-white/50 animate-typing">
                    WELCOME TO FL1P WORLD
                </p>
            </div>

            {/* Background Micro-animation: Subtle Grid or Particles could be added here if needed */}
        </div>
    );
};

export default SplashScreen;
