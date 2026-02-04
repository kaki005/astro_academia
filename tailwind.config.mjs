/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["catppuccin-mocha"],
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		// "./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [
		require("daisyui"),
		require("tailwindcss-animate")
	],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
			"dim",
			"nord",
			"sunset",
			{
				"catppuccin-mocha": {
					primary: "#89b4fa",
					secondary: "#f5c2e7",
					accent: "#a6e3a1",
					neutral: "#1e1e2e",

					"base-100": "#1e1e2e",
					"base-200": "#181825",
					"base-300": "#11111b",

					info: "#74c7ec",
					success: "#a6e3a1",
					warning: "#f9e2af",
					error: "#f38ba8",

					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--border-btn": "1px",
					"--tab-border": "1px",
				},
			},
			{
				"catppuccin-latte": {
					primary: "#1e66f5",
					secondary: "#ea76cb",
					accent: "#40a02b",
					neutral: "#4c4f69",

					"base-100": "#eff1f5",
					"base-200": "#e6e9ef",
					"base-300": "#dce0e8",

					info: "#209fb5",
					success: "#40a02b",
					warning: "#df8e1d",
					error: "#d20f39",

					"--rounded-box": "1rem",
					"--rounded-btn": "0.5rem",
					"--border-btn": "1px",
					"--tab-border": "1px",
				},
			},
		],
	},
	// darkMode: ['selector', '[data-theme="synthwave"]']
};
