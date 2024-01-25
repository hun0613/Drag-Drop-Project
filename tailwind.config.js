/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NMSNeo1: ["NMSNeo1"],
        NMSNeo2: ["NMSNeo2"],
        NMSNeo3: ["NMSNeo3"],
        NMSNeo4: ["NMSNeo4"],
        NMSNeo5: ["NMSNeo5"],
        NMSNeo6: ["NMSNeo6"],
      },
      colors: {
        titleColor: "#385DAC",
        sideBarColor: "#5978B9",
        itemColor: "#F6F6F6",
        listContainerColor: "#EFF4FF",
        inputColor: "#F6F6F6",
        inputBorderColor: "#D9D9D9",
        bgColor: "#F3F3F3",
      },
    },
    screens: {
      desktop: "1024px",
      tablet: "790px",
    },
  },
  plugins: [],
};
