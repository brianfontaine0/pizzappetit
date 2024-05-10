import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
    ".next/**/*.{js,ts,jsx,tsx,mdx,html}"
  ],
  theme: {
    extend: {
      colors: {
        "gray-surface": {
          100: "#f9f9f9",
          200: "#9e9e9e",
        },
        primary: "#242428",
        secondary: "#006630",
        tertiary: "#CE2B37",
      },
      fontFamily: {
        "OpenSans": ['var(--font-open-sans)'],
        "Pacifico": ['var(--font-pacifico)'],
      },
    },
  },
  plugins: [],
};
export default config;
