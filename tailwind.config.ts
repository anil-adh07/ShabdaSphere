import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreeen: "#89b592",
        lightorange: "#ffbcbc",
        lightyellow: "#ffdf61",
        lightpurple: "#c4c8ee",
        dimgreen: "#c4dac8",
        dimyellow: "#ffefb0",
        dimorange: "#fadfca",
        dimpurple: "#e1e3f6",
        dark: "#252422",
        lightgray: "#a3a3a3",
        dimgray: "#e6e6e6",
        lightwhite: "#fff8f0",
      },
      fontFamily: {
        sora: "var(--font-sora)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
