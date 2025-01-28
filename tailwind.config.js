/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
    },
    fontFamily: {
      sans: "Roborto Mono, monospace ",
    },
  },
  plugins: [],
};
