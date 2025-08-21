import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  appearance: 'dark',
  lastUpdated: true,
  title: "Sessions Bot - Docs",
  description: "Main documentation pertaining to Sessions Bot a Discord event management bot.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/SessionsBot/frontend/blob/main/src/assets/sessionsBot.png?raw=true',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/getting-started' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'safari', link: 'https://sessionsbot.fyi' },
      { icon: 'github', link: 'https://github.com/SessionsBot' }
    ],

    editLink: {
      pattern: 'https://github.com/SessionsBot/docs/edit/main/:path',
      text: 'Suggest an edit on GitHub'
    }
  }
})
