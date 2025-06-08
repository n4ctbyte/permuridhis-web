/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-purple': '#6A0DAD',
        'saffron-yellow': '#FFB300',
        'lotus-pink': '#EAC5C5',
        'off-white': '#F7F4EF',
        'charcoal': '#333333',
        'purple': {
          900: '#4C1D95',
          800: '#5B21B6',
          700: '#6D28D9',
          600: '#7C3AED',
          500: '#8B5CF6',
        },
        'yellow': {
          500: '#FFB300',
          400: '#FBBF24',
          300: '#FCD34D',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'lotus-glow': 'lotus-glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'lotus-glow': {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(234, 197, 197, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(234, 197, 197, 0.8))' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'buddhist-gradient': 'linear-gradient(135deg, #6A0DAD 0%, #FFB300 100%)',
        'lotus-gradient': 'linear-gradient(45deg, #EAC5C5 0%, #FFB300 50%, #6A0DAD 100%)',
      }
    },
  },
  plugins: [],
};