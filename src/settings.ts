// 環境変数を見て、GitHub Actions 上で実行されているか判定する
export const profile = {
	fullName: 'Soshi Kakio',
	shortBio: 'working on data mining research',
	title: '',
	institute: 'SANKEN, The university of Osaka',
	author_name: 'Soshi Kakio', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

const isPublish = true
export const template = {
	website_url: isPublish ? 'https://kaki005.github.io/' : 'https://localhost:4321',
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: 'astro_academia' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/social-preview.png',
}
