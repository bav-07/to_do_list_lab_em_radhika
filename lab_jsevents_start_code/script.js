let numOfTask = 1;

const enterButton = document.querySelector("#enter"); 

const taskForm = document.querySelector("#task-form");

const addTask = (event) => {
    event.preventDefault();
    //console.log(event.target.newTask.value);

    //Make task
    const task = document.createElement("li");
    task.setAttribute('id', `${numOfTask}-task`);
    const inputText = document.querySelectorAll("#new-todo");
    task.textContent = event.target.newTask.value;
    //console.log(inputText);

    //Show Date

    const showDate = () => {
        const showDate = document.createElement("#date"); 
        showDate.value.toggle("show-date"); 
        console.log(showDate)

    }
 
    // Grab List
    const list = document.querySelector("#list");

    // // Trying making task with button
    // const taskText = event.target.newTask.value;
    // const listItemWithButton = `<li class=""><div>${taskText}</div><button onclick="deleteTask(this)">Delete</button></li>`;
    // list.textContent += listItemWithButton;

    // Make delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('id', `${numOfTask}-delete`);
    const buttonText = document.createTextNode("delete");
    deleteButton.appendChild(buttonText);

    // Add button to task, then task to list
    task.appendChild(deleteButton);

    list.appendChild(task);
    console.log(inputText);

    // Increment task number
    numOfTask++;
    console.log(numOfTask);
}

// deleteTask = (event) => {
//     console.log("bye");
// }

function deleteTask(element) {
    element.parentElement.remove();
}

taskForm.addEventListener('submit', addTask);

deleteButton.addEventListener('click', deleteTask);

// REMOVE BUTTON 

// function removeAll(){
//     document.getElementById("checkList").textContent = "";
// }
// function removeItem(item){
//     var itemToRemove = document.getElementById(item);
//     itemToRemove.parentNode.removeChild(itemToRemove);
// }
