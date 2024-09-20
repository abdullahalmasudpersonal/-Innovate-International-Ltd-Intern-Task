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
        lightGreen: "#A0FCD9 ",
        buttonColor: "#4000FF",
        darkBlue: "#1F3B68",
        whiteBlue: "#4b6286",
        purple: "#A020F0",
        lenierGreen: "#3C805D",
        lenierGreenEnd: "#6BE6A8",
        purplishMagenta: "#980FA7",
        deepIndigo: '#31096A',
        filterColor: "#4000FF",
        galleryPhoto1Gradient: "#3321FA",
        galleryPhoto1GradientEnd: "#3A3665",
        galleryPhoto2Gradient: "#FA6F6F",
        galleryPhoto2GradientEnd: "#A51D1D",
      },
      height: {
        '101': '101px',
        '87': '87px',
        '44': '44px',
        "258": "258px",
        "300": "300px",
        "260": "260px",
        "345": "345px",
        "603": "603px",
        "395": "395px"
      },
      width: {
        '1253': '1253px',
        "20": "20px",
        "298": "298px",
        "300": "300px",
        "235": "235px",
        "1240": "1240px",
        "260": "260px",
        "1263": "1263px",
        "614": "614px",
        "649": "649px",
        "469": "469px",
        "395": "395px"
      },
      margin: {
        '88': '88px',
        "20": "20px",
        "44": "44px",
        "230": "230px",
        "426": "426px"
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
