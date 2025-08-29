/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(230, 25%, 98%)',
        text: 'hsl(230, 20%, 20%)',
        muted: 'hsl(230, 15%, 60%)',
        accent: 'hsl(170, 80%, 45%)',
        primary: 'hsl(260, 90%, 55%)',
        secondary: 'hsl(290, 80%, 60%)',
        surface: 'hsl(0, 0%, 100%)',
        'surface-dark': 'hsl(230, 20%, 10%)',
        'surface-accent': 'hsl(230, 30%, 97%)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, hsl(260, 90%, 55%), hsl(290, 80%, 60%))',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(220, 15%, 25%, 0.08)',
      },
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slideUp 250ms cubic-bezier(0.22,1,0.36,1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'typing': 'typing 2s steps(20, end), blink-caret .5s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      },
    },
  },
  plugins: [],
}
