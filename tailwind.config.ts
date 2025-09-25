import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F0F8F7',
        'brand-primary': '#008080',
        'brand-secondary': '#FF8C00',
        'brand-text': '#333333',
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config