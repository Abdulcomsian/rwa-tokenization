/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ["Montserrat", 'sans-serif'],
        'DM Sans': ["DM Sans", 'sans-serif']
      },
      screens: {
        'xsm': '320px',
        'ysm': '375px',
        'zsm': '425px'
      },
      animation: {
        'bounce-up': 'bounce-up 1s',
      },
      keyframes: {
        'bounce-up': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        h1: { color: "#333333", fontFamily: "Montserrat" },
        h2: { color: "#333333", fontFamily: "Montserrat" },
        h3: { color: "#333333", fontFamily: "Montserrat" },
        h5: { color: "#333333", fontFamily: "DM Sans" },
        p: { color: "#545454", fontFamily: "DM Sans" },
      });
    },
  ],
};
