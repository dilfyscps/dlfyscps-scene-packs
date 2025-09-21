// .vitepress/config.js
import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'My Awesome Project',
  description: 'A VitePress Site',

  themeConfig: {
    // Logo for the site
    logo: '/logo.svg',

    // Navigation links
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],

    // Sidebar configuration
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Customization', link: '/guide/customization' }
          ]
        }
      ]
    },

    // Optional: Edit link on GitHub
    editLink: {
      pattern: 'https://github.com/your-org/your-repo/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Optional: Last updated timestamp
    lastUpdatedText: 'Last Updated'
  }
});
