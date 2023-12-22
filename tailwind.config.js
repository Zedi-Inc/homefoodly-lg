/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi-Regular", "sans-serif"],
        "satoshi-medium": ["Satoshi-Medium", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
      },
      backgroundPosition: {
        "position-xl": ["50% 0"],
        "position-lg": ["50% 120px"],
        "position-md": ["50% 0"],
        "position-sm": ["50% 250px"],
        "position-xs": ["50% 350px"],
      },
      screens: {
        xs: "380px",
        mdd: "500px",
        xmd: "800px",
        // => @media (min-width: 300px) { ... }
      },
    },
  },
  plugins: [],
};
