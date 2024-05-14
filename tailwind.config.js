// tailwind.config.js

const { SassColor } = require("sass");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        navbarSidebar: {
          "0%": {
            transform: "translateY(0rem)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        sidebarShow: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0rem)",
          },
        },
        moveDot: {
          "0%, 100%": {
            transform: "translateY(0rem)",
          },
          "25%": {
            transform: "translateY(-0.5rem)",
          },
          "50%": {
            transform: "translateY(-1rem)",
          },
          "75%": {
            transform: "translateY(-2rem)",
          },
        },
        moveDot1: {
          "0%, 100%": {
            transform: "translateY(-2rem)",
          },
          "25%": {
            transform: "translateY(0.5rem)",
          },
          "50%": {
            transform: "translateY(1rem)",
          },
          "75%": {
            transform: "translateY(0rem)",
          },
        },
        skeleton: {
          "0%": {
            "background-color": "hsl(200, 20%, 70%)",
          },
          "100%": {
            "background-color": "hsl(200, 20%, 95%)",
          },
        },
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        navbarSidebar: "navbarSidebar 1s cubic-bezier(0.4, 0, 0.2, 1)",
        sidebarShow: "sidebarShow 1s ease-in-out",
        moveDot: "moveDot 1s linear infinite",
        moveDot1: "moveDot1 1s linear infinite 2s",
        spin: "spin 1s infinite",
        skeleton: "skeleton 1s linear infinite alternate",
      },
    },
    colors: {
      'main-theme': '#e1bf57',
      'main-dark-theme': '#3c3c3c',
      'background-color': 'rgb(240, 240, 240)',
      'text-color': '#3c3c3c',
      'text-light-color': 'rgb(255, 255, 255)',
      'background-green': 'rgb(53, 245, 53)',
      'button-red': 'rgb(191, 16, 16)'
    }
  },
  plugins: [],
};
