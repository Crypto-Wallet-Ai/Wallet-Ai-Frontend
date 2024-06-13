import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        darkest: 'var(--darkest)',
        'very-dark': 'var(--very-dark)',
        dark: 'var(--dark-800)',
        'dark-700': 'var(--dark-700)',
        'dark-600': 'var(--dark-600)',
        medium: 'var(--medium)',
        light: 'var(--light)',
        'very-light': 'var(--very-light)',
        white: 'var(--text-white)',
      },
      minHeight: {
        'minus-header': 'calc(100vh - 69px)',
      },
    },
  },
  plugins: [],
};
export default config;
