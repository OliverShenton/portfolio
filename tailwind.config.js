/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        plafair: ["Playfair Display", "sans-serif"],
        cormorant: ["Cormorant Garamond", "sans-serif"],
      },
      screens: {
        xsmall: "300px",
        small: "490px",
        medium: "768px",
        large: "1040px",
        xlarge: "1440px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease forwards",
      },
      borderRadius: {
        "custom-bottom": "50% 20%",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
