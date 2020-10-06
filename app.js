//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners
loadEventListener();

//Load all event listeners
function loadEventListener(){
    //Add task event
    form.addEventListener('submit',addTask);
}

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    
    // Create li document
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create text node and apend to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new list element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class ="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);

    // Append li to ui

    taskList.appendChild(li);

    //Clear input
    taskInput.value = '';
    
    e.preventDefault();
}