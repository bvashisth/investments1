/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "sky-blue": "#8ecae6",
        "blue-green": "#219ebc",
        "prussian-blue": "#023047",
        "selective-yellow": "#ffb703",
        "ut-orange": "#fb8500",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#219ebc", // blue-green as primary
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#023047", // prussian-blue as secondary
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#8ecae6", // sky-blue as muted
          foreground: "#023047", // prussian-blue as muted foreground
        },
        accent: {
          DEFAULT: "#ffb703", // selective-yellow as accent
          foreground: "#023047", // prussian-blue as accent foreground
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-top": "linear-gradient(0deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
        "gradient-right": "linear-gradient(90deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
        "gradient-bottom": "linear-gradient(180deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
        "gradient-left": "linear-gradient(270deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
        "gradient-top-right": "linear-gradient(45deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
        "gradient-bottom-right": "linear-gradient(135deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
        "gradient-top-left": "linear-gradient(225deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
        "gradient-bottom-left": "linear-gradient(315deg, #8ecae6, #219ebc, #023047, #ffb703, #fb8500)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
