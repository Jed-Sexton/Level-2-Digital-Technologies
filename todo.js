let tasks = [];

const colours = {
    blue: "#8BB8D9",
    red: "#D99A9A",
    green: "#9BC5A3",
    yellow: "#D9C77E",
    navy: "#8F9CC7",
    purple: "#B39AC9",
    orange: "#D9A77E",
    teal: "#8FC5BE",
    pink: "#D9A1B8"
};

const subjectColours = {
    "Maths": colours.blue,
    "English": colours.red,
    "Biology": colours.green,
    "Chemistry": colours.yellow,
    "Physics": colours.navy,
    "DIT": colours.purple,
    "DVC": colours.orange,
    "PE": colours.teal,
    "Health": colours.green,
    "Music": colours.pink,
    "Geography": colours.green,
    "History": colours.orange,
    "Business": colours.yellow,
    "Spanish": colours.red,
    "Design": colours.orange,
    "Painting": colours.pink,
    "Photography": colours.blue,
    "RE": colours.purple
};

const statusOrder = {
    "To Do": 1,
    "In Progress": 1,
    "Complete": 2
};

const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3
};

const subjectInput = document.getElementById("subject");
const taskInput = document.getElementById("task");
const dueDateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskError = document.getElementById("taskError");

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}

renderTasks();

addTaskButton.addEventListener("click", addTask);

dueDateInput.addEventListener("click", function () {
    this.showPicker();
});

function showError(message) {
    taskError.textContent = "⚠ " + message;
    taskError.style.display = "block";
    setTimeout(function(){
        taskError.style.display = "none";
    }, 3000);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {

    if (subjectInput.value === "") {
        showError("Please select a subject.");
        return;
    }

    if (taskInput.value.trim() === "") {
        showError("Please enter a task.");
        return;
    }
    
    if (dueDateInput.value === "") {
        showError("Please select a due date.");
        return;
    }


    const newTask = {
        id: Date.now(),
        subject: subjectInput.value,
        task: taskInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        status: "To Do"
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
    dueDateInput.value = "";
    priorityInput.selectedIndex = 0;
    subjectInput.selectedIndex = 0;
    console.log(tasks);
}

function sortTasks() {

    tasks.sort(function(a, b){
        if (statusOrder[a.status] !== statusOrder[b.status]) {
            return statusOrder[a.status] - statusOrder[b.status];
        }
        if (a.dueDate !== b.dueDate) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        day: "numeric",
        month: "short",
        year: "numeric"
    };
    return date.toLocaleDateString("en-NZ", options);
}

function isOverdue(task) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);

    return dueDate < today && task.status !== "Complete";
}

function renderTasks() {

    sortTasks();

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

    const taskCard = document.createElement("div");

    taskCard.classList.add("Task_card");

    if (task.status === "Complete") {
        taskCard.classList.add("Completed_task");
    }
    
    if (isOverdue(task)) {
        taskCard.classList.add("Overdue_task");
    }

      taskCard.innerHTML = `
        <div class="Task_subject">
            <div class="Subject_dot"
                style="background-color: ${subjectColours[task.subject]}">
            </div>
            ${task.subject}
        </div>

        <div class="Task_name">
            ${task.task}
        </div>

        <div class="Task_due">
            <input
                type="date"
                class="dueDateInput"
                value="${task.dueDate}">
        </div>

        <div class="Task_priority">
            <select class="prioritySelect">
                <option value="High" ${task.priority === "High" ? "selected" : ""}>High</option>
                <option value="Medium" ${task.priority === "Medium" ? "selected" : ""}>Medium</option>
                <option value="Low" ${task.priority === "Low" ? "selected" : ""}>Low</option>
            </select>
        </div>

        <div class="Task_status">
            <select class="statusSelect" data-id="${task.id}">
                <option value="To Do" ${task.status === "To Do" ? "selected" : ""}>To Do</option>
                <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
                <option value="Complete" ${task.status === "Complete" ? "selected" : ""}>Complete</option>
            </select>
        </div>

        <button class="Todo_Complete_button">
            ✓
        </button>

          <button class="Todo_Delete_button">
            ×
          </button>
    `;


    taskList.appendChild(taskCard);
    const statusSelect = taskCard.querySelector(".statusSelect");
    statusSelect.addEventListener("change", function () {
        task.status = statusSelect.value;
        saveTasks();
        renderTasks();
    });

    const prioritySelect = taskCard.querySelector(".prioritySelect");
    prioritySelect.addEventListener("change", function () {
        task.priority = prioritySelect.value;
        saveTasks();
        renderTasks();

    });

    const dueDateInput = taskCard.querySelector(".dueDateInput");
    dueDateInput.addEventListener("click", function () {
        this.showPicker();
    });

    dueDateInput.addEventListener("change", function () {
        task.dueDate = dueDateInput.value;
        saveTasks();
        renderTasks();
    });

    const completeButton = taskCard.querySelector(".Todo_Complete_button");
    completeButton.addEventListener("click", function () {
        task.status = "Complete";
        saveTasks();
        renderTasks();

    });

    const deleteButton = taskCard.querySelector(".Todo_Delete_button");
    deleteButton.addEventListener("click", function () {
        tasks = tasks.filter(function(currentTask) {
            return currentTask.id !== task.id;
        });
        saveTasks();
        renderTasks();
    
    });

    });
}

[subjectInput, taskInput, dueDateInput, priorityInput].forEach(function(input) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            input.blur();
        }
    });
});