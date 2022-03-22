// UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const deleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

// call Event Listeners
eventListeners();

// Event Listeners
function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all
    deleteAll.addEventListener('click', deleteAllItems);
}

// add new item
function addNewItem(e) {
    e.preventDefault();
    if (input.value === '') {
        alert('Add new item!');
        return;
    }

    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i';

    // add a to li
    li.appendChild(a);

    // add a to taskList
    taskList.appendChild(li);

    // clear input
    input.value = '';
}

// delete an item 
function deleteItem(e) {
    e.preventDefault();

    const li = e.target.parentElement.parentElement;

    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure?')) {
            li.remove();
        }
    }
}