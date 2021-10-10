---
sidebar_position: 2
---

# Working with Tasks

## Create tasks

### Create tasks locally

```js
import { Task } from "todoist-rest-client";

let myTask = new Task({ content: "Task name" });
```

### Create tasks in the Todoist Account

```js
const myClient // an authorized client instance

let myTask... // a valid task JSON Object

myClient.task.create(myTask) // Creates the task in the Todoist Servers
```

## Get tasks from the server

### getAll

```js
const myClient // an authorized client instance

myClient.task.getAll().then(res => console.log(res)) // ["task1 content", "task2 content", ...]
```

### getAllJSON

```js
const myClient // an authorized client instance

myClient.task.getAllJSON().then(res => console.log(res)) // [{task1...}, {task2...}, ...]
```

## Get Tasks for today

### getTodayTasks

```js
const myClient // an authorized client instance

myClient.task.getToday().then(res => console.log(res)) // ["task1 content", "task2 content", ...]
```

### getTodayTasksJSON

```js
const myClient // an authorized client instance

myClient.task.getTodayJSON().then(res => console.log(res)) // [{task1...}, {task2...}, ...]
```

## Search tasks

### get(string: id)

```js
const myClient // an authorized client instance

myClient.task.get("valid_id").then(res => console.log(res)) // {task object}
```
