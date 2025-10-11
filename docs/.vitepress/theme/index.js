    // .vitepress/theme/index.js
    import DefaultTheme from 'vitepress/theme'
    import Ticker from './components/Ticker.vue'
    import './custom.css' // Import your custom CSS

    export default {
      ...DefaultTheme,
      //
      Layout: DefaultTheme.Layout,
      enhanceApp({ app }) {
        app.component('Ticker', Ticker)
      }
      
      // You can further enhance the app or override components here if needed
    }
