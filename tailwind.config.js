/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        blue: '#5158c0',
        orange: '#F99746',
        offWhite: '#f8f9f5',
        gray: '#e0dede',
        lightGray: '#f5f5f5',
        darkerGray: '#c4c4c4',
        darkGray: '#18191A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        nunito: ['"Nunito"', 'serif'], // Adiciona Nunito como uma opção
      },
      fontSize: {
				'80': '80%',
        xs: '10px',
        sm: '12px',
        bs: '14px',
        rg: '16px',
        lg: '18px',
        xl: '22px',
        '2xl': '24px',
        '3xl': '35px',
      },
    },
  },
  plugins: [
		require('tailwind-scrollbar')
	],
};
