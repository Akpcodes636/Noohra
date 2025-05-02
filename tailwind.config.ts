import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans), sans-serif",
        mono: "var(--font-geist-mono), monospace",
        rubik: "var(--font-rubik), sans-serif",
      },
      colors: {
        red:{
        100:"#fce8ee",
        200:"#fbdde5",
        300:"#f6b8c9",
        400:"#e31a50",
        500:"#cc1748",
        600:"#b61540",
        700:"#aa143c",
        800:"#881030",
        900:"#660c24",
        1000:"#4f091c"
        },
        white: {
          100: "var(--color-white-100)",
          300: "var(--color-white-300)",
          400: "var(--color-white-400)",
          500: "var(--color-white-500)",
        },
        black: {
          100: "var(--color-black-100)",
          200: "var(--color-black-200)",
          300: "var(--color-black-300)",
          400: "var(--color-black-400)",
          500: "var(--color-black-500)",
          600: "var(--color-black-600)",
          700: "var(--color-black-700)",
          800: "var(--color-black-800)",
        },
        blue: {
          100: "var(--color-blue-100)",
          200: "var(--color-blue-200)",
          300: "var(--color-blue-300)",
          400: "var(--color-blue-400)",
          500: "var(--color-blue-500)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
      },
      boxShadow: {
        small: "var(--shadow-small)",
        medium: "var(--shadow-medium)",
        large: "var(--shadow-large)",
      },
    },
  },
  plugins: [],
} satisfies Config;
