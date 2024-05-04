/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        palanquin: ['Palanquin', 'sans-serif'],
        nabla:["Nabla","cursive"],
        rightheus:["Righteous", "cursive"],
        kanit:["Kanit", "sans-serif"],
        caveat:["Caveat","cursive"],
        carterone:["Carter One","cursive"],
        alkatra:["Alkatra","cursive"],
        poppins:["Poppins","sans-serif"],
        'jacquard-24-charted-regular': ['Jacquard 24 Charted', 'system-ui'],
      },
    },
  },
  plugins: [],
};
