/** @type {import("tailwindcss").Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        'primary': "#faac28",
        'primary-shadow': "#d5890a",
        'secondary': "#1D232A",
      },
      backgroundImage: {
        // 'body-main': "url('/static/background.svg')",
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },

      container: {
        center: true
      },
      fontFamily: {
        sarpanch: ["Sarpanch", "sans-serif"]
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },

    }
  },
  daisyui: {
    themes: [
      {
        "dark": {
          "primary": "#f59e0b",
          "primary-focus": "#570df8",
          "primary-content": "#000000",
          "secondary": "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          "accent": "#ecae48",
          "accent-focus": "#e1a138",
          "accent-content": "#ffffff",
          "neutral": "#1d232a",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f"
        }
      },
      "light"
    ]
  },

  plugins: [require("daisyui")]
};
