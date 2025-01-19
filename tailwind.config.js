/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"], // Header - General
        eaglelake: ["Eagle Lake", "sans-serif"], // Header - Title
        roboto: ["Roboto", "sans-serif"], // Normal
      },
      screens: {
        small: "400px",
        medium: "700px",
        large: "850px",
        xlarge: "1050px",
      },
    },
  },
  plugins: [],
};
