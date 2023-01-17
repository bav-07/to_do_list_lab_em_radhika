// const enterButton = document.querySelector("#enter"); 

const taskForm = document.querySelector("task-form");

const addTask = (event) => {
    event.preventDefault();
    const task = document.createElement("li");
    const inputText = document.querySelector("#new-todo");
    task.textContent = event.target.newTask.value;
    const list = document.querySelector("#list");
    list.appendChild(task);
    console.log(inputText);
}

taskForm.addEventListener('submit', addTask);