let input_id = document.getElementById("input_id");
        let add_btn = document.getElementById("add_btn");
        let tasks_container = document.querySelector(".tasks_container");


        let localTodoLists = JSON.parse(localStorage.getItem("taskList")) || [];

        
        const displayTask = (task) => {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            let pElement = document.createElement("li");
            pElement.textContent = task;

            let delete_btn = document.createElement("button");
            delete_btn.textContent = "Delete";

            taskDiv.append(pElement);
            taskDiv.append(delete_btn);

            tasks_container.append(taskDiv);

            delete_btn.addEventListener("click", () => {
                taskDiv.remove();
                localTodoLists = localTodoLists.filter((t) => t !== task);
                localStorage.setItem("taskList", JSON.stringify(localTodoLists));
                alert("Task deleted");
            });
        };

        
        localTodoLists.forEach(task => {
            displayTask(task);
            console.log(task);
        });

        
        const add_task = (e) => {
            if (input_id.value.trim() === "") {
                alert("Please enter a task");
                return;
            }
            e.preventDefault();
            const task = input_id.value.trim();

            if (!localTodoLists.includes(task)) {
                localTodoLists.push(task);
                localStorage.setItem("taskList", JSON.stringify(localTodoLists));
                displayTask(task);
            }

            input_id.value = "";
        };

        add_btn.addEventListener('click', add_task);