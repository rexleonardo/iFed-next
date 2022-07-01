module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': '{animation-name: fade-in}'
      },
      dropShadow: {
        'custom': '10px 10px 10px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [],
}