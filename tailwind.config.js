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
      },
      animation: {
        marqueeOrigin: "marquee 10s linear infinite;",
        marqueeResponsive: "marquee 5s linear infinite",
      },
    },
  },
  plugins: [],
};
