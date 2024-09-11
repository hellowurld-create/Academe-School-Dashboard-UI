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
      colors: {
        learnOrange: "#FF8A65",
        learnOrangeLight: "#FFCCBC",
        learnNavy: "#003366",
        learnNavyLight: "#336699",
        learnGray: "#4B4B4B",
        learnGrayLight: "#B0B0B0",
      }
    },
  },
  plugins: [],
};
export default config;
