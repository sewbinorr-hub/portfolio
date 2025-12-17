/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#46ec13",
        "background-light": "#f6f8f6",
        "background-dark": "#050505",
        "card-dark": "#1A2218",
        "surface-dark": "#1e271c",
        "surface-border": "#2c3928",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-bg": "rgba(20, 20, 20, 0.6)",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "linear-gradient(rgba(44, 57, 40, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(44, 57, 40, 0.2) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
