import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Active le mode sombre via .dark
  theme: {
    extend: {
      colors: {
        primary: "#1e1e2e",
        secondary: "#584966",
        "secondary-transparent": "#1e1e2e73",
        gray: "#ababab",
        background: "#1e1e2e",
        text: "#fff",
        link: "#ffffffc8",
        "link-hover": "#ffffff",
        border: "#ababab",
      },
      fontFamily: {
        title: ["Lora", "serif"],
        text: ["Poppins", "sans-serif"],
        special: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
