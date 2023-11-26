const taskList = document.getElementById("task-list");
let taskItem = document.getElementsByClassName("task-item");
let deleteButtons = document.getElementsByClassName("delete-button");

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
        this.parentElement.remove();
    });
}