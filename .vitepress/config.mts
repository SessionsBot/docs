import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
  appearance: 'force-auto',
  title: "Sessions Bot - Docs",
  description: "Main documentation pertaining to Sessions Bot a Discord event management bot.",

  lastUpdated: true,
  srcDir: "src",
  
  themeConfig: {
    logo: 'https://github.com/SessionsBot/frontend/blob/main/src/assets/sessionsBot.png?raw=true',
    
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/getting-started' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started',
        collapsed: true,
        items: [
          { text: 'Invite the Bot', link: '/getting-started#invite',  },
          { text: 'Setting Up', link: '/getting-started#setup',  }
        ],
      },
      {
        text: 'Server Configuration',
        link: '/server-config',
        collapsed: true,
        items: [
          { text: 'Accent Color', link: '/server-config#accent-color',  },
          { text: 'Admin Roles', link: '/server-config#admin-roles', },
          { text: 'Time Zone', link: '/server-config#time-zone', },
          { text: 'Mention Roles', link: '/server-config#mention-roles', },
          { text: 'Post Time', link: '/server-config#post-time', },
          { text: 'Signup Channel', link: '/server-config#signup-channel', },
        ],
      },
    ],

    socialLinks: [
      { icon: 'safari', link: 'https://sessionsbot.fyi' },
      { icon: 'github', link: 'https://github.com/SessionsBot' }
    ],

    editLink: {
      pattern: 'https://github.com/SessionsBot/docs/edit/main/src/:path',
      text: 'Suggest an edit on GitHub'
    },

    lastUpdated: {
      formatOptions: {
        dateStyle: 'short'
      }
    },

    footer: {
      message: 'Thanks for using Sessions Bot! <br> <a href="https://sessionsbot.fyi/support" target="_blank">Get Support</a>',
      copyright: 'Copyright © SessionsBot'
    }
  },

})
