/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				navbarBg: "#3E505B",
				heroBg: "#BEC5AD",
				heroText: "#454545",
				aboutBg: "#3F88C5",
				techBg: "#ffffff",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
				menuBg: "#004AAD",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
			},
		},
	},
	plugins: [],
};

// #F0EDEE /#FCFAFA /#282e34
