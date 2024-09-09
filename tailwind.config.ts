import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "dark-primary": "#121214",
        "dark-secondary": "#1D1D21",
        "white-primary": "#E1E1E6",
      },

      backgroundImage: {
        hero: `url("/background.avif")`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        appear: "appear 3s linear",
        menu: "menu 0.2s ease-in-out",
      },
      keyframes: {
        menu: {
          "0%": {
            opacity: "0",
            transform: "translateY(-80%) scaleY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%) scaleY(1)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "10%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
          "90%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
