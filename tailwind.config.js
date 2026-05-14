/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        accent: {
          50:  '#f0fdf9',
          100: '#ccfbef',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        surface: {
          900: '#080a0e',
          800: '#0d1117',
          700: '#111827',
          600: '#1c2333',
          500: '#27272a',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'cursor':     'cursor 1s step-end infinite',
        'float':      'float 6s ease-in-out infinite',
        'scan':       'scan 3s linear infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        glowPulse: { '0%,100%': { boxShadow: '0 0 20px rgba(16,185,129,0.15)' }, '50%': { boxShadow: '0 0 40px rgba(16,185,129,0.35)' } },
        cursor:    { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        scan:      { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
      },
    },
  },
  plugins: [],
};
