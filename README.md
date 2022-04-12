## Workflow

1. Find a task
3. Create a new branch from the dev branch | [Branch Style](#branch-style)
4. A developer completes the task, making commits sometimes | [Commit Style](#commit-style)
5. When the task is done, create a Pull Request in the dev branch
6. Making Assign on a Reviewer
7. The reviewer checks how the task is completed
8. The reviewer makes notes (Optional)
9. The developer fixes bugs (Optional)
10. The reviewer makes a Merge Request to the dev branch
11. The developer will return to point 1

## Branch Style:
When you create a new branch, you should use the syntax below:

```html
<!-- Style -->
<prefix>/<taskName>
```

> prefix -> one of the options: [feat, bug, ref, doc] -> [feature, refactoring, bug, documentation]

> description -> a short description of the task

```html
<!-- Example: -->
feat/registration
bug/login
ref/settings
doc/help
```

## Commit Style:
When you create a new commit, you should use the syntax below:

```html
<!-- Style -->
<prefix>: <description>
```

> prefix -> one of the options: [feat, ref, fix, doc] -> [feature, refactoring, fixing, documentation]

> description -> a description of what you did for this task

```html
<!-- Example: -->
feat: added translate service
fix: fixed styles for the home page
ref: moved styles to global
doc: added comments for the settings page
```
