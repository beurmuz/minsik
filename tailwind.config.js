/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSerif: ["Noto Serif", "serif"],
        Pretendard: ["Pretendard"],
      },
      colors: {
        "main-blue": "#144184",
        "main-blue-light": "#1B53AD",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        pageLoad: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marqueeOrigin: "marquee 10s linear infinite;",
        marqueeResponsive: "marquee 5s linear infinite",
        fadeInEffect: "fadeIn 0.2s ease-out",
        fadeOutEffect: "fadeOut 3s ease-out",
        pageLoadEffect: "pageLoad 1.5s ease-out",
      },
    },
  },
  plugins: [],
};
