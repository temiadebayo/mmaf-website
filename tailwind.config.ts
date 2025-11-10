import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-white': '#ffffff',
        'sadaqqah': '#f05c25',
        'lafiya': '#46a948',
        'ilimi': '#2b79bd',
        'anoora': '#000000',
      },
    },
  },
  plugins: [],
};

export default config;

