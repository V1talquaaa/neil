/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px", // mobile
      md: "768px", // tablet
      lg: "1440px", // desktop
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "heroMob": "url(/heroMob.png)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "40px",
          lg: "80px",
        },
      },
      colors: {
        mainBlue: '#1237D8',
        mainWhite: '#FDFEFF',
        mainBlack: '#0C0C0D',
      },
      
    },
  },
  plugins: [],
};
