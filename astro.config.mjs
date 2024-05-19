import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: '最终幻想14英文笔记',
    customCss: [
      './src/tailwind.css',
    ],
    social: {
      github: 'https://github.com/Kaida-Amethyst/ffxiv_notes'
    },
    sidebar: [{
      label: 'Introduction',
      items: [{
        label: 'Introduction',
        link: '/introduction/introduction/'
      }]
    }, {
      label: 'HeavenSword',
      autogenerate: {
        directory: 'HeavenSword'
      }
    }]
  }), tailwind()]
});
