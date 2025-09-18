import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/Users/bzvelae/dilfscps/favicon.ico' }]],
  title: "DILFYSCPS",
  description: "Scenepack Directory",
  themeConfig: {
    logo: 'https://www.freepnglogos.com/uploads/cum-png/cum-white-splatter-clip-art-clkerm-vector-clip-art-9.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Scenepack Requests (Not Available)', link: '/markdown-examples' }
    ],

  }
})