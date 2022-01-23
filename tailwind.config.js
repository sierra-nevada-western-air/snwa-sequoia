const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			primary: colors.teal,
			secondary: colors.violet,
			tertiary: colors.orange,
			...colors,
		},
	},
	plugins: [],
};
