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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#363636',
      },
      height: {
        '101': '101px',
        '87': '87px',
        '44': '44px',
      },
      width: {
        '1253': '1253px',
        "20": "20px",
        "298": "298px",
        "235": "235px"
      },
      margin: {
        '88': '88px',
        "20": "20px",
        "44": "44px",
      },
      padding: {
        "20": "20px"
      }
    },
  },
  plugins: [],
};
export default config;
