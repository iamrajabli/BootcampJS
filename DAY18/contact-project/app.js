'use strict';

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const form__contact = document.getElementById('form__contact');
const tbody__contact = document.querySelector('.tbody__contact');
const submit__btn = document.getElementById('submit__btn');

let btnStatus = undefined;
form__contact.addEventListener('submit', insert);
tbody__contact.addEventListener('click', editAndDelete);
showAllPerson()

function showAllPerson() {
    let allData = getDB();
    for (let i in allData) {
        addPerson(allData[i]);
    }
}

function insert(e) {
    e.preventDefault();

    const addedPerson = {
        name: name.value,
        surname: surname.value,
        email: email.value
    };

    const result = controlOfData(addedPerson);

    if (result.result) {
        if (btnStatus) {
            resultInfo(result.result, result.message);
            updatePerson(addedPerson, btnStatus.cells[2].textContent);
            empty();
        } else {
            resultInfo(result.result, result.message);
            addPerson(addedPerson);
            setDB(addedPerson);
            empty();
        }
    } else {
        resultInfo(result.result, result.message);
    }

};

function controlOfData(person) {

    for (let i in person) {

        if (person[i] === '') {
            return {
                result: false,
                message: 'Required field!'
            }
        }
    }
    return {
        result: true,
        message: 'Successfuly!'
    }

};

function resultInfo(result, message) {
    const createdDiv = document.createElement('div');
    createdDiv.textContent = message;
    createdDiv.className = 'info';
    createdDiv.classList.add(result ? 'info--success' : 'info--error');
    document.querySelector('.container').insertBefore(createdDiv, form__contact);

    setTimeout(function() {
        createdDiv.remove();
    }, 2000)
};

function editAndDelete(e) {
    const thatTr = e.target.parentElement.parentElement;
    if (e.target.classList.contains('btn--edit')) {
        submit__btn.className = 'btn--danger u-full-width';
        submit__btn.value = 'Edit';
        name.value = thatTr.cells[0].textContent
        surname.value = thatTr.cells[1].textContent
        email.value = thatTr.cells[2].textContent
        btnStatus = thatTr;

    } else if (e.target.classList.contains('btn--delete')) {
        const thatEmail = thatTr.children[2].textContent;

        deleteElement(thatTr, thatEmail.textContent);
        deleteFromDB(thatEmail);
    }
};

function addPerson(person) {

    const createdTr = document.createElement('tr');
    createdTr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.surname}</td>
    <td>${person.email}</td>
    <td>
        <button class="btn btn--delete"><i class="fa-solid fa-trash-can"></i></button>
        <button class="btn btn--edit"><i class="fa-solid fa-pen-to-square"></i></button>
    </td>               
    `;
    tbody__contact.appendChild(createdTr);
};

function updatePerson(person) {
    updateFromDB(person, btnStatus.cells[2].textContent)
    btnStatus.cells[0].textContent = person.name;
    btnStatus.cells[1].textContent = person.surname;
    btnStatus.cells[2].textContent = person.email;

    submit__btn.className = 'button-primary u-full-width';
    submit__btn.value = 'Enter';

};

function deleteElement(deletedTr, deletedEmail) {
    deletedTr.remove();


};

function empty() {
    name.value = '';
    surname.value = '';
    email.value = '';
};


function getDB() {
    let allPerson;
    if (localStorage.getItem('allPerson') === null) {
        allPerson = [];
    } else {
        allPerson = JSON.parse(localStorage.getItem('allPerson'));
    }

    return allPerson
}

function setDB(person) {
    let allPerson = getDB();
    allPerson.push(person)
    localStorage.setItem('allPerson', JSON.stringify(allPerson));
}

function deleteFromDB(personEmail) {
    let allPerson = getDB();
    for (let i in allPerson) {
        if (allPerson[i].email === personEmail) {
            allPerson.splice(i, 1);
        }
    }
    localStorage.setItem('allPerson', JSON.stringify(allPerson));

}


function updateFromDB(person, personOldEmail) {
    let allPerson = getDB();

    for (let i in allPerson) {
        if (allPerson[i].email === personOldEmail) {
            allPerson[i].name = person.name;
            allPerson[i].surname = person.surname;
            allPerson[i].email = person.email;
        }
    }

    localStorage.setItem('allPerson', JSON.stringify(allPerson));
}