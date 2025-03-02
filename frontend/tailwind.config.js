/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-left-right": "move-left-right 5s linear infinite",
      },
    },
  },
  plugins: [],
};
