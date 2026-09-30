import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1B17",
        tide: "#163A3F",
        "tide-light": "#22525A",
        kelp: "#6B8F71",
        "kelp-deep": "#3F5F46",
        "kelp-pale": "#DCE6D9",
        sand: "#F1ECE0",
        paper: "#FBF8F2",
        gold: "#B9873E",
        "gold-light": "#E4C68C",
        rust: "#8A4B32",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
