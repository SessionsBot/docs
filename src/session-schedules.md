# Session Schedules

The main functionality of Sessions Bot runs on your servers *"Session Schedules"*. 

Each schedule represents a daily event to become available to your server members within your [`Signup Channel`](./server-config.md#signup-channel) at your specified daily [`Post Time`](./server-config.md#post-time).

## Schedule Options

Each session/schedule is configured by the following options.

|   **Option**   |                    **Description**                    |
|----------------|-------------------------------------------------------|
| **Title**      | The title of the session.                             |
| **Location**   | The location of the session. _(URL)_                  |
| **Time**       | The daily time the session takes place.               |
| **Roles**      | Roles users can assign to for this session.           |

### Session Roles <Badge type="tip">*Optional*</Badge>

Sessions can include roles for users to assign/RSVP to once the session becomes available. 

<u> See Example </u>
<img class='image-small border-radium-sm' src="/signup-panel-w-roles.png">

Each role has the follow configuration options:

|    **Option**   |         **Description**         |
|-----------------|---------------------------------|
| **Name**        | The title of the role.          |
| **Description** | The description of the role.    |
| **Emoji**       | An emoji representing the role. |
| **Capacity**    | The max capacity of this role.  |

## Frequency

Each day your sessions will be posted to your server members via a `Signup Panel` message sent to your designated [`Signup Channel`](./server-config.md#signup-channel) at your specified [`Post Time`](./server-config.md#post-time). Currently, session schedules only offers *daily reoccurring schedules*.

## How to Modify

Your servers schedules are initially setup during the [bot setup process](./getting-started.md) and you can later make modifications to any of your schedules by accessing your <a href='https://sessionsbot.fyi/dashboard' target="_blank">bot dashboard</a>.