/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "xs": "350px",
      "sm": "500px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "1.5rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      center: true,
    },
    extend: {
      colors: {
        darkBg: "#15161B",
        dark: "#1E1F23",
        darkOpaque: "#00000099",
        red: "#C81313",
        ash: "#666874",
        darkAsh: "#66687442"
      },
      boxShadow: {
        profile: '0 4px 20px rgba(255, 252, 252, 0.25)',
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        lobster: ["'Lobster'", "cursive"]
      },
      animation: {
        rebound: "spring 10s ease-in-out infinite"
      },
      keyframes: {
        spring: {
          "0%, 100%": { transform: "translateX(-95%)" },
          "50%": { transform: "translateX(245%)" }
        }
      },
      spacing: {
        textarea: "calc(100% - 24px)",
        projectHalf: "calc(50% - 1rem)"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
