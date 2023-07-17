/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html, js, svelte, ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			blue: '#5158c0',
			orange: '#F99746',
			offWhite: '#f8f9fa',
			
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		fontSize: {
			xs: '10px',
			sm: '12px',
			bs: '14px',
			rg: '16px',
			lg: '18px',
			xl: '22px',
			'2xl': '24px',
			'3xl': '35px'
		}
	},
	plugins: []
};
