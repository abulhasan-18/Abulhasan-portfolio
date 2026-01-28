import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { 
        center: true, 
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "IBM Plex Sans", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9e9ff",
          200: "#b3d2ff",
          300: "#85b7ff",
          400: "#5596ff",
          500: "#2b79ff",
          600: "#175de6",
          700: "#1249b4",
          800: "#0f3b8f",
          900: "#0d3275",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
