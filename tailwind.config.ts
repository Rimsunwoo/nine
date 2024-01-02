import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        bolder: '800',
      },
      colors: {
        hover_primary: '#004EEB',
        primary: 'rgba(0, 78, 235, 0.6)',
        logo_color: '#CA5C75',
        sub_color: 'rgba(218, 121, 161)',
      },
      keyframes: {
        upIn: {
          '0%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeIn: {
            from : {
                opacity: '0'
            },
            to : {
                opacity: '1'
            }

        },
      },
    },
  },
  plugins: [],
};
export default config;
