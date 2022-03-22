// UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const deleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

// call load items
loadItems(items);

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

// load items
function loadItems(items) {

    array = getItemFromLS();
    array.forEach(items => {
        createNewElement(items);
    })
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
    setItemToLS(input.value);

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
            deleteItemFromLS(li.textContent);
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

    // if (confirm('Are you sure?')) {
    //     taskList.childNodes.forEach(item => {
    //         if (item.nodeType === 1) {
    //             item.remove();
    //         }
    //     })
    // }

    if (confirm('Are you sure?')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }



}

// get item from local storage
function getItemFromLS() {

    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    return items;
}

// set item to local storage
function setItemToLS(text) {
    items = getItemFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}