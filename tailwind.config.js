/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          one: "#60A5FA",
          two: "#6EE7B7",
          three: "#A7F3D0",
          four: "#94B4CC",
          five: "#272932",
        },

        dark: {
          one: "#3B82F6",
          two: "#059669",
          three: "#047857",
          four: "#D3D5D4",
          five: "#272932",
        },
      },
    },
  },
  plugins: [],
};
