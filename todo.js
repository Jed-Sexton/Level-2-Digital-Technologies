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
    console.log(tasks);
}

function renderTasks() {

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
              ${task.priority}
          </div>

          <div class="Task_status">
              ${task.status}
          </div>

          <button class="Todo_Complete_button">
              ✓
          </button>

          <button class="Todo_Delete_button">
              ×
          </button>
      `;


      taskList.appendChild(taskCard);

  });

}