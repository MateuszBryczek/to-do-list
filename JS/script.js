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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString +=`
                <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
                    ${task.content}
                </li>
                `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

        const form=document.querySelector("js-form");

        form.addEventListener("submit", (event) => {
            event.preverntDefault();

            const newTaskContent = document.querySelector("js-newTsks").ariaValueMax.trim();
            if (newTaskContent === "") {
                return;
            }

            tasks.push({
                content: newTaskContent,
            });
        });
    };

    init();
};