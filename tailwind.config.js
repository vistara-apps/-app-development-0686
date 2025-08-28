/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220, 20%, 98%)',
        text: 'hsl(220, 15%, 25%)',
        muted: 'hsl(220, 15%, 65%)',
        accent: 'hsl(150, 70%, 50%)',
        primary: 'hsl(220, 95%, 45%)',
        surface: 'hsl(0, 0%, 100%)',
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
      },
    },
  },
  plugins: [],
}