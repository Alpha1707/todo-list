let tasks = 0;
function addTask(){
  let inputValue = document.getElementById("task");
    document.getElementById("tasks").innerHTML += `
    <li id="${tasks}">${inputValue.value} <button onclick="deleteTask('${tasks}')">Sil</button> 
<button onclick="finishTask('${tasks}')">Bitir</button>
    </li>
    `;
    tasks++
}

function deleteTask(taskID){
  document.getElementById(taskID).style.display = "none"
}

function finishTask(taskID){
  document.getElementById(taskID).style.textDecoration = "line-through"
}
