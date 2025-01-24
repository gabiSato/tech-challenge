import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "Inter Fallback"],
    },
    container: {
      center: true,
      screens: {
        xl: "1200px",
      },
      padding: {
        DEFAULT: "24px",
        xl: "0px",
      },
    },
    fontSize: {
      xs: ["13px", "0.983rem"],
      sm: ["16px", "1.21rem"],
      md: ["18px", "1.736rem"],
      lg: ["20px", "1.5125rem"],
      xl: ["25px", "1.891rem"],
      "2xl": ["31px", "2.345rem"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      neutral: {
        "100": "#f5f5f5",
        "200": "#F8F8F8",
        "300": "#CBCBCB",
        "400": "#8B8B8B",
        "500": "#444444",
      },
      orange: {
        "100": "#FF5031",
      },
      green: {
        "100": "#E4EDE3",
        "200": "#47A138",
      },
      cyan: {
        "100": "#DEE9EA",
        "200": "#024D60",
        "300": "#004D61",
      },
    },
    spacing: {
      0: "0",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      48: "48px",
      60: "60px",
    },
    extend: {
      borderRadius: {
        DEFAULT: "8px",
      },
      animation: {
        spin: ".75s linear infinite spin",
      },
    },
  },
  plugins: [],
} satisfies Config;
