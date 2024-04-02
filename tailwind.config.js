/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,cjs,mjs}"],
  theme: {
    extend: {},
    colors: {
      clementine: "#F9A826",
      bgclementine: "rgba(249, 168, 38, .30)",
      stone: "#A5A5A5",
    },
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
    },
    screens: {
      xsm: "639px",
      // => @media (max-width: 639px) { ... }

      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (min-width: 768px) { ... }

      lg: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { max: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
