import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primarySky: "#00aaef", //
        primaryBlack: "#111111", //
        secondaryBlack: "#212529", //
        primaryGray: "#797979", //
        primaryYellow: "#f6c60d", //
        primaryWhite: "#FFFFFF", //
        primaryOrange: "#eb6c40", //
        primaryPurple: "#bd4cec", //
      },
    },
  },
  plugins: [],
} satisfies Config;
