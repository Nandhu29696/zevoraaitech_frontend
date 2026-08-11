/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#080B16',
        panel: '#080B16',
        line: 'rgba(157, 177, 214, .19)',
        muted: '#9da8bd',
        white: '#f4f7ff',
        blue: '#007BFF',
        cyan: '#34e3ff',
      },
      boxShadow: {
        glow: '0 18px 45px rgba(19, 98, 219, 0.28)',
      },
    },
  },
  plugins: [],
};
