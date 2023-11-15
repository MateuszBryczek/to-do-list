# To-Do-List

Website prepared for the [YouCode](https://youcode.pl/frontend-developer-od-podstaw/) course.
![youcode-logo](https://youcode.pl/wp-content/uploads/2022/02/youcode-logo-ukraine.png)

Website have default polish language.

You can input your tasks and toggle them as done or delete them.

Try it by yourself: >>https://mateuszbryczek.github.io/to-do-list/<<

![](images/to-do-list-gif.gif)

## Code fragment:
```javascript
const renderTasks = () => {
    const tasksListHTMLContent = task =>
        `
            <li 
                class="tasks__item ${task.done && hideDoneTasks ? " tasks__item--hiden" : ""} js-task">

                <button class="tasks__button tasks__button--toggleDone js-toggleDone">
                 ${task.done ? "✔" : ""}
                </button>

                <span class="tasks__content${ task.done ? " tasks__content--done" : ""}">
                 ${task.content}
                </span>

                <button class="tasks__button tasks__button--remove js-remove">
                 🗑
                </button>
            </li>
        `;
```

## Tools used:
- HTML
- CSS
- JavaScript
- Normalize.css
- Flexbox