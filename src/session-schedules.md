# Session Schedules

The main functionality of Sessions Bot runs on your servers *"Session Schedules"*. 

Each schedule represents a daily event to become available to your server members within your [`Signup Channel`](./server-config.md#signup-channel) at your specified daily [`Post Time`](./server-config.md#post-time).

## Schedule Options

Each session/schedule is configured by the following options.

|   **Option**           |   **Description**                                                |
|------------------------|------------------------------------------------------------------|
| **Title**              | The title of the session.                                        |
| **Location**           | The location of the session. _(URL)_                             |
| **Time of Day**        | The daily time the session takes place.                          |
| **Days of Week**       | The days of the week the session reoccurs.                       |
| **Roles**              | Roles users can assign to for this session.                      |

> Currently Sessions Bot only allows control of schedule frequency by day of the week.

### Session Roles <Badge type="tip">*Optional*</Badge>

Sessions can include roles for users to assign/RSVP to once the session becomes available. 

Each role has the follow configuration options:

|    **Option**   |         **Description**         |
|-----------------|---------------------------------|
| **Name**        | The title of the role.          |
| **Description** | The description of the role.    |
| **Emoji**       | An emoji representing the role. |
| **Capacity**    | The max capacity of this role.  |

## Signup Panels

Signup Panels are the main feature of Sessions Bot! They provide your server members with details of the current days upcoming sessions.

<u> See Example w/ Roles: </u>
<img class='image-small border-radium-sm' src="/signup-panel-w-roles.png">

<u> See Example w/o Roles: </u>
<img class='image-small border-radium-sm' src="/signup-panel-wo-roles.png">

### Frequency

Each day any scheduled sessions will be posted to your server members via a *Signup Panel* message sent to your designated [`Signup Channel`](./server-config.md#signup-channel) at your specified [`Post Time`](./server-config.md#post-time). 

## How to Modify

Your servers schedules are initially setup during the [bot setup process](./getting-started.md). 

You can later make modifications to any of your schedules by accessing your <a href='https://sessionsbot.fyi/dashboard' target="_blank">bot dashboard</a>.