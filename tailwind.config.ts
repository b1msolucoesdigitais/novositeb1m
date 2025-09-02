import type { Config } from "tailwindcss";
// Removido plugin do HeroUI para evitar import de módulos que exigem Tailwind interno

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Caminho do HeroUI removido
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial da B1M
        primary: "#00193C", // Azul escuro - background principal
        accent: "#F58C3E", // Laranja metálico - CTA e destaques
        white: "#FFFFFF", // Branco - texto e contraste
        cyan: "#23B5D3", // Azul ciano - acentos e ícones
        royal: "#266DD3", // Azul royal - elementos secundários
        
        // Variações
        "primary-light": "#002a5a",
        "primary-dark": "#001225",
        "accent-light": "#ff9d4d",
        "accent-dark": "#e67a2e",
        "cyan-light": "#4dc8e0",
        "cyan-dark": "#1a9bb8",
        "royal-light": "#4a7de0",
        "royal-dark": "#1e5bb8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
