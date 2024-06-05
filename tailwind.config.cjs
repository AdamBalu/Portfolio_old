/** @type {import("tailwindcss").Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'primary': "#faac28",
        'primary-shadow': "#d5890a",
        'secondary': "#1D232A",
        'primary-dark': '#fdc45d',
        'primary-shadow-dark': '#e3a739',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'color': 'color',
        'background': 'background-color'
      },

      container: {
        center: true
      },
      fontFamily: {
        sigmarOne: ["Sigmar One", "sans-serif"],
      },
    }
  },
  plugins: [require("daisyui")]
};
