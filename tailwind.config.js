/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          one: "#3590FF",
          two: "#6EE7B7",
          three: "#A7F3D0",
          four: "#94B4CC",
          five: "#272932",
          six: "#2BCDC5",
        },

        dark: {
          one: "#2858A5",
          two: "#206650",
          three: "#00684B",
          four: "#D3D5D4",
          five: "#272932",
          six: "#0C3533",
        },
      },
      backgroundImage: {
        "custom-gradient": `linear-gradient(to bottom, #60a5fa00,  #2BCDC5), linear-gradient(to right, #3590FF, #6ee7b7, #a7f3d0)`,
        "custom-gradient-dark": `linear-gradient(to bottom, #60a5fa00,  #0C3533), linear-gradient(to right, #2858A5, #206650, #00684B)`,
      },
      screens: {
        "custom-md-1200px": "1200px",
      },
    },
  },
  plugins: [],
};
