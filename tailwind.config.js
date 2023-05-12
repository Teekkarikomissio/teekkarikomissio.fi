module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        ligh: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#9B2C2C",
          secondary: "#f6e05e",
          accent: "#2b6cb0",
        }
      }
    ],
  }
};
