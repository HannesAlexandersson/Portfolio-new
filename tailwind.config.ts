import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'heroBg': 'url("/backgrounds/bg-start.webp")',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'], // Default sans font
        bebas: ['var(--font-bebas)', 'sans-serif'], // Custom font for Bebas Neue
        grandstander: ['var(--font-grandstander)', 'sans-serif'], // Custom font for Grandstander
        ibm: ['var(--font-ibm-plex-sans)', 'sans-serif'], // Custom font for IBM Plex Sans
      },
      width: {
        'line-width': `${(2 * 3 + 4 * 2) * 1.4142135623731}px`,
      },
      boxShadow: {
        bottom: '0 4px 4px -4px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'linkedIn-blue': '#0A66C2',
        "primary-bg": '#081b29',
        "secondary-bg": '#ea4c87ff',
        "primary-accent": '#f3e1c7',
        "default-bg": '#161415',
        "secondary-accent": '#f45325',
      },
    },
  }, 
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config;
