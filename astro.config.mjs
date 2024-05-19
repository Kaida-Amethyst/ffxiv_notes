import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '最终幻想14英文笔记',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Introduction', link: '/introduction/introduction/' },
					],
				},
				{
					label: 'HeavenSword',
					autogenerate: { directory: 'HeavenSword' },
				},
			],
		}),
	],
});
