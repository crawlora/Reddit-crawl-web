// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Includes Astro components
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 60s linear infinite",
      },
    },
  },
  plugins: [],
};
