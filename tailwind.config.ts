import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // páginas e layouts
    "./components/**/*.{js,ts,jsx,tsx}", // componentes
    "./pages/**/*.{js,ts,jsx,tsx}", // se estiver usando /pages
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
