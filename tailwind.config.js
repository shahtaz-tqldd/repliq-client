/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        themeRepliq: {
          "primary": "#1B9C85",
          "secondary": "#4C4C6D",
          "accent": "#E8F6EF",
          "neutral": "#FFE194",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

