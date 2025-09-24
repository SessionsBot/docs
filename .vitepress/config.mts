import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
  title: "Sessions Bot - Docs",
  description: "Main documentation pertaining to Sessions Bot a Discord event management bot.",

  cleanUrls: true,
  lastUpdated: true,
  srcDir: "src",
  
  themeConfig: {
    logo: '/SessionsBotLogoNoText.png',
    
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/getting-started' },
    ],

    outline: "deep",

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started',
        collapsed: false,
        items: [
          { text: 'Invite the Bot', link: '/getting-started#invite',  },
          { text: 'Setting Up', link: '/getting-started#setup',  }
        ],
      },
      {
        text: 'Server Configuration',
        collapsed: false,
        items: [
            {text: 'Preferences', link: '/server-config', collapsed: true, items: [
              { text: 'Accent Color', link: '/server-config#accent-color',  },
              { text: 'Time Zone', link: '/server-config#time-zone', },
              { text: 'Mention Roles', link: '/server-config#mention-roles', },
              { text: 'Post Time', link: '/server-config#post-time', },
              { text: 'Signup Channel', link: '/server-config#signup-channel', },
            ]},
            {text: 'Sessions / Schedules', link: '/session-schedules'}
          
        ],
      },
      {
        text: 'Bot Commands',
        collapsed: false,
        items: [
          { text: 'Commands', link: '/commands', collapsed: true, items: [
            { text: '/setup', link: '/commands#setup',  },
            { text: '/my-sessions', link: '/commands#my-sessions',  },
            { text: '/add-assignee', link: '/commands#add-assignee',  },
            { text: '/remove-assignee', link: '/commands#remove-assignee',  },
            { text: '/dashboard', link: '/commands#dashboard',  },
            { text: '/feedback', link: '/commands#feedback',  },
            { text: '/help', link: '/commands#help',  },
          ]},
          { text: 'Permissions', link: '/command-permissions', collapsed: true},
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
      copyright: 'Copyright © Sessions Bot'
    }
  },

  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XEZCMG6EL8' }
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XEZCMG6EL8');
      `
    ]
  ],

  
})
