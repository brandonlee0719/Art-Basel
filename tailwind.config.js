module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1200px",
      "3xl": "1400px",
      "4xl": "1600px",
    },
    extend: {
      colors: {
        secondary: "#1a1a1a",
        dark: "#06010b",
        green: "#00FF00",
        yellow: "#FFF000",
        blue: "#3300ff",
      },
      fontSize: {
        xs: "11px",
        sm: "12.47px",
        smX: "13.6px",
        base: "15px",
        md: "16px",
        "7xl": "76.5px",
        "8xl": "83.31px",
        "9xl": "120px",
        "10xl": "160px",
        "11xl": "223px",
      },
    },
    fontFamily: {
      neue: ["NeueHaasGroteskDisp Std", "sans-serif"],
      call: ["CallEightOT", "sans-serif"],
      callEightNegativeOT: ["CallEightNegativeOT", "sans-serif"],
    },
  },
  plugins: [],
}