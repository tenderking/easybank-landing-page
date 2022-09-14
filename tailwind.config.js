/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"lime-green": "hsl(136, 65%, 51%)",
				"dark-blue": "hsl(233, 26%, 24%)",
				gradOne: "#33D35E",
				gradTwo: "#2AB6D9",
				"lime-cyan-grad": "linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%)",
				"noytral-text": "hsla(231, 26%, 24%, 1)",
				"bright-cyan": "hsl(192, 70%, 51%)",
				"light-gray": "hsl(220, 16%, 96%)",
				"very-light-gray": "hsl(0, 0%, 98%)",
				"gray-text": "hsla(231, 8%, 61%, 1)",
				"overlay-gradOne": "hsla(231, 26%, 24%, 1)",
				"overlay-gradTwo": "hsla(231, 26%, 24%, 0)",
			},
		},
		plugins: [],
	},
};
