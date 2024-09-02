import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        appear: "appear 3s linear",
      },
      keyframes: {
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
