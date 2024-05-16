/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
      fontFamily: {
        'abc':['Ubuntu Sans','sans-serif'],
        'bcd':['Kalam','cursive']
      },
  },
  plugins: [],
}

