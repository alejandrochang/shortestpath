import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'gunmetal': '#2C2F3A',
      'french-gray': '#CAC9CF',
      'slate-gray': '#6E8787',
      'black-olive': '#3F4337',
      'white': '#FFFFFF',
    },
  },
  plugins: [],
} satisfies Config;
