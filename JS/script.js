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
                <li>
                    ${task.content}
                </li>
                `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
};