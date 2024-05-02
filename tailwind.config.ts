import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lightPinkLavender: "#FFF0F0",
      blackGray: "#333333",
      lightGray: "#EAEEF7",
      purple: "#6A3AA2",
      transparent: "transparent",
      white: "#fff",
    },
    extend: {
      backgroundImage: {
        "gradient-purple":
          "linear-gradient(to right bottom, #141333 0%, #202261 44%, #543C97 80%, #6939A1 100%)",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        purple: "2px 2px 6px rgba(84, 60, 151, 0.25)",
        white: "2px 2px 6px rgba(255, 255, 255, 0.25)",
        white2x: "2px 2px 12px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
