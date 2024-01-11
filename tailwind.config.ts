import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "blue-bg": "#1288FF",
      "blue-highlight": "#0011ff",
      "black": "#000000",
    },
    extend: {
      lineHeight: {
        'sm': '2rem', // text-sm
        'base': '2rem', // text-base
        'lg': '2rem', // text-lg
        'xl': '2rem', // text-xl
        '2xl': '2rem', // text-2xl
        '3xl': '2rem', // text-3xl
        '4xl': '2rem', // text-4xl
        '5xl': '2rem', // text-5xl
        '6xl': '2rem', // text-6xl
        '7xl': '2rem', // text-7xl
        '8xl': '2rem', // text-8xl
      },
      backgroundImage: {
        "chess-bg": "url('/89chess-bg.svg')",
      },
    },
  },
  plugins: [],
}
export default config
