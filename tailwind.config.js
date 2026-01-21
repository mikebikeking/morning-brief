
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        caveat: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: '#FCFAF7',
        midnight: '#0F172A',
        ultraviolet: '#8B5CF6',
        'orange-red': '#FF4500',
        paper: '#FCFAF7', // Alias for cream
      },
      animation: {
        'ticker': 'ticker 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
