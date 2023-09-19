import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "main": "#AA9977",
        "main-dark": "#938059",
        "background": "#F8F8F8",
        "text-gray": "#6D6D6D",
        "white": "#FFFFFF",
        "black": "#000000",
        "red": "#FF4F4F",
        "red-dark":"#E34747",
        "red-light": "#FFEDED",
        "green": "#50FA00",
        "green-light": "#DAFCE3",
        "yellow-light": "#FAFBC2",
        "gray-light": "#848484",
      }
    },
  },
  plugins: [],
}
export default config
