let tasks = [];

const subjectInput = document.getElementById("subject");
const taskInput = document.getElementById("task");
const dueDateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {

    const newTask = {
        id: Date.now(),
        subject: subjectInput.value,
        task: taskInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        status: "To Do"
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
    dueDateInput.value = "";
    priorityInput.selectedIndex = 0;
    subjectInput.selectedIndex = 0;
    console.log(tasks);
}

const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3
};

function sortTasks() {
    tasks.sort(function(a, b){
        if(a.dueDate !== b.dueDate){
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
}

function renderTasks() {

    sortTasks();

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

    const taskCard = document.createElement("div");

    taskCard.classList.add("Task_card");


      taskCard.innerHTML = `
        <div class="Task_subject">
            <div class="Subject_dot"></div>
            ${task.subject}
        </div>

        <div class="Task_name">
            ${task.task}
         </div>

        <div class="Task_due">
            ${task.dueDate}
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
        renderTasks();
    });

    const prioritySelect = taskCard.querySelector(".prioritySelect");
    prioritySelect.addEventListener("change", function () {
        task.priority = prioritySelect.value;
        renderTasks();

    });

    const completeButton = taskCard.querySelector(".Todo_Complete_button");
    completeButton.addEventListener("click", function () {
        task.status = "Complete";
        renderTasks();

    });

    const deleteButton = taskCard.querySelector(".Todo_Delete_button");
    deleteButton.addEventListener("click", function () {
        tasks = tasks.filter(function(currentTask) {
            return currentTask.id !== task.id;
        });
        renderTasks();
    
    });

    });
}