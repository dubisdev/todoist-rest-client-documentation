---
sidebar_position: 2
---

# Todoist Resource Objects

We call "Todoist Resources" to all the Todoist elements that can be managed through their API:

🗒 Projects <br/>
🗒 Sections <br/>
🗒 [<strong>Tasks</strong>](/docs/Tasks/tasks-objects/) <br/>
🗒 Comments <br/>
🗒 Labels <br/>

## Resource Schemas

Every of these resources has its own properties (each task has its content, date, ...). The client you some classes that allow you to create these elements **without having errors in their schemas**. The classes can be imported directly from the package.

```js
// we can import the classes from the package
import { Task, Project } from "todoist-rest-client";

let myTask = new Task({ content: "Task content" });

let errorTask = new Task();

console.log(myTask);
console.log(errorTask);

/*
{   content: "Task content"   }
{   content: "_NO_CONTENT_"   }
*/
```

:::tip

The client creates a "_No_Content_" task to avoid errors when creating the task in the server.

:::

:::caution

With this classes you are only creating JSON objects, they are not being created in the Todoist Servers!
To do that you must use the `client._resource_type_.create()` method.

:::
