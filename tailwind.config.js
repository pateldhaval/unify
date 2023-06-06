/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [],
	corePlugins: {
		// [Remove global resets]
		// preflight: false
	}
};
