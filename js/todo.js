const field = document.querySelector(".field");
const btn = document.querySelector(".add");
const list = document.querySelector(".list");

function createTask(value) {
  const task = document.createElement("div");
  task.addEventListener("click", completeTask);

  const taskText = document.createElement("span");
  taskText.classList.add('task')
  taskText.textContent = value;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add('checkbox')

  const removebtn = document.createElement('button')
  removebtn.setAttribute('type', 'button')
  removebtn.classList.add('remove')
  removebtn.textContent = 'Удалить'
  removebtn.addEventListener('click', removeTask)
  

  task.append(taskText);
  task.append(checkbox);
  task.append(removebtn);

  return task;
}

field.addEventListener('keyup', enterTask)

function enterTask(event) {
  if(event.code == 'Enter'){
    addTask();
  }
  
}




function removeTask(event) {
  const target = event.target

  if (target.tagName !== "BUTTON") {
    return
  }

  target.closest("div").remove();

}


function completeTask(event) {
  const target = event.target;

  if (target.tagName !== "INPUT") {
    return;
  }

 const taskContainer = target.closest("div");
  if (target.checked) {
   
    taskContainer.firstElementChild.classList.add("completed");
  } else {
    taskContainer.firstElementChild.classList.remove('completed')
  }
}

function addTask() {
  if (field.value.trim()) {
    const newTask = createTask(field.value);

    list.appendChild(newTask);
    
    field.value = "";
  }
}

btn.addEventListener("click", addTask);


// field.addEventListener("keypress", (keyPressed) => {
//   const keyEnter = 13;
//   if (keyPressed.which == keyEnter) {
//     addTask();
//   }
// });