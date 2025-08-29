# Bot Commands
The Sessions Bot Discord Application has quite a few different commands to utilize. Below is a detailed reference
of the current bot commands available to you.

## `/setup` {#setup}

> **Used For:**

Starting the initial bot setup process for Sessions Bot. This command will redirect you to our website to configure your server.

::: tip ℹ️ This command is no longer needed once setup is completed for your server!

::: details Want to disable/hide this command after setup?
Feel free to disable it anytime, *see: [disabling commands](./command-permissions#disable-commands)*.
:::

> **How to Use:**
``` 
/setup
```

> **Required Permissions:**
- `MANAGE SERVER`

*see: [`Adjusting Command Permissions`](./command-permissions#adjust-permissions)*


## `/my-sessions` {#my-sessions}

> **Used For:**

Viewing recent or upcoming sessions assigned to the user who ran the command. 

Also provides the option through interaction to ***unassign from upcoming sessions*** that haven't already occurred.

> **How to Use:**
```
/my-sessions
```

> **Required Permissions:**
- `NONE`

*see: [`Adjusting Command Permissions`](./command-permissions#adjust-permissions)*


## `/add-assignee` {#add-assignee}

> **Used For:**

Used to assign a specified user to a specified session role.

> **How to Use:**
```
/add-assignee [user] [session] [role]
```

> **Options:**
- `User`: The user to assign a new role to.
- `Session`: The session to assign the user to.
- `Role`: The role to assign the user to.


> **Required Permissions:**
- `MODERATE MEMBERS`

*see: [`Adjusting Command Permissions`](./command-permissions#adjust-permissions)*

## `/remove-assignee` {#remove-assignee}

> **Used For:**

Used to remove a specified user from *ANY* role(s) withing a specified session.

> **How to Use:**
```
/remove-assignee [user] [session]
```

> **Options:**
- `User`: The user to remove from the session.
- `Session`: The session to remove the user from.


> **Required Permissions:**
- `MODERATE MEMBERS`

*see: [`Adjusting Command Permissions`](./command-permissions#adjust-permissions)*

## `/feedback` {#feedback}

> **Used For:**

To send your user feedback regarding Sessions Bot and it's features. If you have explicit bug reports please do so [here](https://github.com/SessionsBot/backend/issues).

> **How to Use:**
```
/feedback
```

> **Required Permissions:**
- `NONE` 

*see: [`Adjusting Command Permissions`](./command-permissions#adjust-permissions)*

