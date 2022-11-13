{
    const tasks = [
        {
            content: "zjeść",
            done: true,
        },
        {
            content: "iść spać",
            done: false,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, Index) => {
            removeButton.addEventListener("click", () => {
                removeTask(Index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButtons, Index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(Index);
            });
        });
    }
    
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=`
                <li 
                    class="list__item${task.done ? " list__item--done" : ""}">
                    <button class="js-done button-done">zrobione</button>
                    <button class="js-remove button-remove">usuń</button>
                    ${task.content}
                </li>
                `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
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