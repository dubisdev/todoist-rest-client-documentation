---
sidebar_position: 1
---

# Tasks JSON Objects

The [official API documentation](https://developer.todoist.com/rest/v1/#tasks) shows us the outline of a complete task:

```js
{
   "assignee": 2671142,
   "assigner": 2671362,
   "comment_count": 10,
   "completed": True,
   "content": "Buy Milk",
   "description": "",
   "due": {
       "date": "2016-09-01",
       "datetime": "2016-09-01T09:00:00Z",
       "recurring": False,
       "string": "tomorrow at 12",
       "timezone": "Europe/Moscow"
   },
   "id": 2995104339,
   "label_ids": [
       2156154810,
       2156154820,
       2156154826
   ],
   "order": 1,
   "priority": 1,
   "project_id": 2203306141,
   "section_id": 7025,
   "parent_id": 2995104589,
   "url": "https://todoist.com/showTask?id=2995104339&sync_id=2995104344"
}
```
