// UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const deleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let taskArr = ['item 1', 'item 2', 'item 3'];

// call load items
loadItems(taskArr);

// call event listeners
eventListeners();

// event listeners
function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all
    deleteAll.addEventListener('click', deleteAllItems);
}

// create new element
function createNewElement(text) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i';

    // add a to li
    li.appendChild(a);

    // add a to taskList
    taskList.appendChild(li);
}

// add new item
function addNewItem(e) {
    e.preventDefault();
    if (input.value === '') {
        alert('Add new item!');
        return;
    }

    createNewElement(input.value);

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

// delete all items
function deleteAllItems(e) {
    e.preventDefault();

    // taskList.innerHTML = '';

    // for (let i = 0; i < taskList.children.length; i++) {
    //     taskList.children[i].remove();
    // }

    // let i = 0
    // do {
    //     taskList.children[i].remove();
    //     i++
    // } while (i < taskList.children.length);

    if (confirm('Are you sure?')) {
        taskList.childNodes.forEach(item => {
            if (item.nodeType === 1) {
                item.remove();
            }
        })
    }



}