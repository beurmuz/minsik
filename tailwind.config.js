/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSerif: ["Noto Serif", "serif"],
        NotoDisplay: ["Noto Serif Display", "serif"],
        NotoKo: ["Noto Serif KR", "serif"],
        Pretendard: ["Pretendard"],
      },
      colors: {
        "main-white": "#EBEFFA",
        "main-blue": "#144184",
        "main-blue-light": "#1B53AD",
      },
    },
  },
  plugins: [],
};
