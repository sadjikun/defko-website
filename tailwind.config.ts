import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          dark: '#1D4ED8',    // blue-700
          light: '#3B82F6',   // blue-500
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },  
    },
  },
  plugins: [],
} satisfies Config;
