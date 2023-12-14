/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}