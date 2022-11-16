{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({content: newTaskContent,});
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleDoneTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
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
                toggleDoneTask(taskIndex);
            });
        });
    };
    
    const render = () => {
        let tasksListHTMLContent = "";

        for (const task of tasks) {
            tasksListHTMLContent +=`
                <li 
                    class="list__item${task.done ? " list__item--done" : ""}">
                    
                    <button class="js-done button-toggleDone"></button>
                    <button class="js-remove button-remove"></button>
                    ${task.content}
                </li>
                `;
        }
        document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;

        removeEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
};