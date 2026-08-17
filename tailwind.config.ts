import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Identidad de marca — Letreros Corpóreos RD
        brand: {
          azul: "#0F3358", // color principal
          naranja: "#F2661C", // color de acento principal
          rojo: "#E23B2E",
          amarillo: "#F4C430",
          verde: "#2E8B57",
          blanco: "#FFFFFF",
          negro: "#111111",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        sign: "0.25rem", // esquinas casi rectas, look "letrero metálico"
      },
    },
  },
  plugins: [],
};

export default config;
