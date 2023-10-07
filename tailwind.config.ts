import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          base: "var(--color-primary-base)",
          1: "var(--color-primary-1)",
          2: "var(--color-primary-2)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
  darkMode: ["class", '[data-theme="dark"]'],
};
export default config;
