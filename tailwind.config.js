/** @type {import('tailwindcss').Config} */
export const darkMode = "class"; // ✅ Correct placement
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Poppins", "sans-serif", "Nunito Sans"],
      playfair: ["Playfair Display", "serif"],
      spaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
    colors: {
      customTeal: "#0d9488",
    },
  },
};
export const plugins = [];
