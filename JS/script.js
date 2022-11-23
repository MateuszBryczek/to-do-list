{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks, {content: newTaskContent,}
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex +1),
        ];
        render();
    };

    const toggleTasksDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
            ...tasks[taskIndex], 
            done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex +1)
        ];
        render();
    };

    const toggleAllTasksDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));
        render();
    };

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };

    const removeEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

        const toggleDoneEvents = () => {
            const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButtons, taskIndex) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTasksDone(taskIndex);
            });
        });
    };

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

        
        const tasksElement = document.querySelector(".js-tasks");
        tasksElement.innerHTML = tasks.map(tasksListHTMLContent).join("");
    };

    const renderButtons = () => {
        const buttonsElement = document.querySelector(".js-buttons");

        if (tasks.length === 0) {
            buttonsElement.innerHTML = "";
            return;
        }

        buttonsElement.innerHTML =
        `
            <button class="buttons js-toggleHideDoneTasks">
                ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone zadania
            </button>
            <button class="buttons js-toggleAllTasksDone"
                ${tasks.every(({ done }) => done ) ? " disabled" : ""}>
                Ukończ wszystkie
            </button>
        `;
    };

    const bindButtonsEvents = () => {
        const toggleAllDoneButton = document.querySelector(".js-toggleAllTasksDone");

        if (toggleAllDoneButton) {
           toggleAllDoneButton.addEventListener("click", toggleAllTasksDone);
        }

        const toggleHideDoneButton = document.querySelector(".js-toggleHideDoneTasks");

        if (toggleHideDoneButton) {
            toggleHideDoneButton.addEventListener("click", toggleHideDoneTasks);
        }
    };
    
    const render = () => {
        renderTasks();
        renderButtons();
        removeEvents();
        toggleDoneEvents();
        bindButtonsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent =newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
};