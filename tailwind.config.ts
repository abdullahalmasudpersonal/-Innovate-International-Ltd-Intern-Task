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
        coustomRed: '#C02424',
        redPink: '#E76666',
        coustomBlue: '#146FE8',
        lightGreen: "#A0FCD9 "
      },
      height: {
        '101': '101px',
        '87': '87px',
        '44': '44px',
        "258": "258px",
        "300": "300px",
        "260": "260px"

      },
      width: {
        '1253': '1253px',
        "20": "20px",
        "298": "298px",
        "300": "300px",
        "235": "235px",
        "1240": "1240px",
        "260": "260px"
      },
      margin: {
        '88': '88px',
        "20": "20px",
        "44": "44px",
        "230": "230px"
      },
      padding: {
        "20": "20px"
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0)',
      },
    },
  },
  plugins: [],
};
export default config;
