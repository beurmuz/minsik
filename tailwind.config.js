/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSerif: ["Noto Serif", "serif"],
        NotoDisplay: ["Noto Serif Display", "serif"],
        Pretendard: ["Pretendard"],
      },
    },
  },
  plugins: [],
};
