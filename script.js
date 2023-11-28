const taskList = document.getElementById("task-list");
let taskItem = document.getElementsByClassName("task-item");
let deleteButtons = document.getElementsByClassName("delete-button");

const taskInput = document.getElementById("task-input");
const inputButton = document.getElementById("input-button");

const pendingTasks = document.getElementById("task-pending");

const clearButton = document.getElementById("clear-button");   

var numberOfTasks = [];

// Update Number of Tasks

function UpdateTasks(task) {
    if (task != null) {
        const index = numberOfTasks.indexOf(task)
        if (index > -1) {
            numberOfTasks.splice(index, 1); 
        }
    }

    pendingTasks.innerText = "You have " + numberOfTasks.length + " pending tasks";
}

UpdateTasks();

// Create Tasks

function CreateTask(TaskName) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.className = "delete-button";
    taskDeleteButton.innerText = "X";
    taskDeleteButton.addEventListener("click", function() {
        this.parentElement.remove();
        UpdateTasks(this.parentElement);
    });
    
    const taskText = document.createElement("p");
    taskText.innerHTML = TaskName;

    taskList.appendChild(taskItem);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDeleteButton);

    numberOfTasks.push(taskItem);

    UpdateTasks();
}

inputButton.addEventListener("click", function() {
    if (taskInput.value != "") {
        CreateTask(taskInput.value);
    }
});

// Delete Tasks
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
        this.parentElement.remove();
        UpdateTasks(this.parentElement);
    });
}

// Clear all button
clearButton.addEventListener("click", function() {
    if (numberOfTasks.length > -1) {
        for (task in numberOfTasks) {
            console.log(numberOfTasks[task]);
            numberOfTasks[task].remove();
        }
    
        numberOfTasks = [];
        pendingTasks.innerText = "You have 0 pending tasks";
    }
});