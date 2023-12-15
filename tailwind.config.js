/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#0d6efd",
        // secondary: "#6f42c1",
        // info: "#0dcaf0",
        // warning: "#fd7e14",
        authBgS: '#FEB206',
        authBgE: "#f9cb33",
        btnBg: '#feaf00',
        navBg: '#f2eae1',
        mainBg:'#fdfdfd',

      }
    },
  },
  plugins: [],
}

