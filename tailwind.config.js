/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nova paleta de cores profissional
        'primary': '#00193C',      // Azul Marinho Escuro
        'secondary': '#F58C3E',    // Laranja Vibrante
        'accent': '#23B5D3',       // Azul Turquesa Claro
        'accent-dark': '#266DD3',  // Azul Royal
        'white': '#FFFFFF',        // Branco Puro
        'text-primary': '#00193C', // Azul Marinho para texto principal
        'text-secondary': '#4A5568', // Cinza para texto secundário
        'border': '#E2E8F0',       // Cinza claro para bordas
        'success': '#10B981',      // Verde para sucesso
        'warning': '#F59E0B',      // Amarelo para alertas
        'background': '#F8FAFC',   // Cinza muito claro para fundos
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
