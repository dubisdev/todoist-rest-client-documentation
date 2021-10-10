---
sidebar_position: 1
---

# JS Todoist-Rest-Client

This client written in javascript allows you to access the functionalities of the [Todoist Web API](https://developer.todoist.com/rest/v1/) from the Javascript environment quickly and easily.

Before using the client in your project, you must import it from NPM using one of the following commands:

```bash
yarn add todoist-rest-client
#or
npm install todoist-rest-client
```

Now you can import the client, initialize it with a todoist auth token and start handling your tasks.

```js
import Client from "todoist-rest-client";

const myClient = Client("introduce_here_your_todoist_token");
```
