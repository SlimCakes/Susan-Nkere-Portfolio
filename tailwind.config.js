// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
        accent: '#3b82f6',
      },
      fontFamily: {
        secondary: ['Poppins', 'sans-serif'], // For main page
        primary: ['Playfair Display', 'serif'], // For navbar
        Accent: ['Source Code Pro', 'monospace'], // For code
      },
      
      spacing: {
              '12px': '12px',
              '16px': '16px',
              '20px': '20px',
              '24px': '24px',
              '32px': '32px',
              '64px': '64px',
              '128px': '128px',
            },
            fontSize: {
              '12px': '12px',
              '14px': '14px',
              '16px': '16px',
              '18px': '18px',
              '20px': '20px',
              '24px': '24px',
              '30px': '30px',
              '36px': '36px',
              '48px': '48px',
              '64px': '64px',
              '72px': '72px',
              '96px': '96px',
            },
          },
        },
      };
