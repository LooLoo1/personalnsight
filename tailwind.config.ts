import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#FFF0F0',
      charcoal: '#333333',
      ash: '#EAEEF7',
      accent: '#6A3AA2',
      transparent: 'transparent',
      white: '#fff',
    },
    extend: {
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right bottom, #141333 0%, #202261 44%, #543C97 80%, #6939A1 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        accent: '2px 2px 6px #6a3aa280',
        white: '2px 2px 6px rgba(255, 255, 255, 0.25)',
        charcoal: '2px 2px 12px rgba(255, 255, 255, 0.5)',
      },
      minHeight: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
};
export default config;
