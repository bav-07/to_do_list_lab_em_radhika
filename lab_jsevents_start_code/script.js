const enterButton = document.querySelector("#enter"); 

const taskForm = document.querySelector("task-form");

const addTask = (event) => {
    event.preventDefault();
    console.log(event.target.newTask.value);
    const task = document.createElement("li");
    const inputText = document.querySelectorAll("input[type=text]");
    task.textContent = event.target;
    console.log(inputText);

    const list = document.querySelector("#list");
    list.appendChild(task);
    console.log(inputText);
}

enterButton.addEventListener('button', addTask);

