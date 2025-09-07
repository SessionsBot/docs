---
 title: Server Configuration
---

# Server Configuration Options

Sessions Bot allows for *various customizations* within your server and our features. Please reference below the available configuration options.

### `Accent Color`
Your servers preferred accent color (hex color) to be used within certain features such as Discord messages, website elements, etc.

<!-- <img src='/accent-color-ex.png'>

> (Signup Panel Message w/ red "Accent Color" set.) -->


### `Admin Roles`
Specify certain roles within your Discord Server to be granted 'admin' permissions to Sessions Bot features.

::: info ℹ️ Please Note:
- Granting users/roles this permission will allow them ***full access*** to change your server configurations such as Session Schedules, Time Zone, Upcoming Sessions, etc.
-  This ***wont*** adjust Discord Slash Command permissions... To do so please go to your *Discord Server > Settings > Integrations > Bots & Apps > Sessions Bot > Commands > Set Permissions* (adjust as you wish).
::: 


### `Time Zone`
Your servers preferred time zone to be used with date related actions such as when to post [`Session Signups`](./session-schedules.md#signup-panels).

### `Mention Roles`
Designate certain roles from your Discord Server to mention/notify within new [`Session Signup`](./session-schedules.md#signup-panels) posts.

### `Post Time`
The time of day to post any new [`Session Signup`](./session-schedules.md#signup-panels) message to your specified [`Signup Channel`](#signup-channel) if there are any sessions scheduled for the day.

### `Signup Channel`
The specified text-chat channel within your Discord Server to post any new sessions or available sign ups for each day.

## How to Modify

Your server's preferences are initially set during the [bot setup process](./getting-started.md). 

You can later make modifications to your preferences by accessing your <a href='https://sessionsbot.fyi/dashboard' target="_blank">bot dashboard</a>.