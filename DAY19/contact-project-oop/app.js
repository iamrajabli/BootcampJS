'use strict';
// OOP

class Person {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
};

class controlInputs {
    static controlForEmpty(personInfo) {
        let result = true;
        for (let i in personInfo) {
            if (personInfo[i] === '') {
                result = false;
                return result;
            }
        }

        return result;
    }
}

class Screen {
    constructor() {
        this.name = document.getElementById('name');
        this.surname = document.getElementById('surname');
        this.email = document.getElementById('email');
        this.submit__btn = document.getElementById('submit__btn');
        this.form = document.getElementById('form__contact').addEventListener('submit', this.addOrUpdate.bind(this));
        this.tbody__contact = document.querySelector('.tbody__contact');
        this.tbody__contact.addEventListener('click', this.deleteOrUpdate.bind(this));
        this.getAllData = new DB();
        this.showAllPersonInScreen(this.getAllData.getDB);
        this.updateStatus = false;
    };


    showAllPersonInScreen(getDB) {
        for (let i in getDB) {
            this.addPersonToList(getDB[i]);
        }
    }

    resetInputs() {
        this.name.value = ''
        this.surname.value = ''
        this.email.value = ''
    };

    addPersonToList(person) {
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
        this.tbody__contact.appendChild(createdTr);
    };

    addOrUpdate(e) {
        e.preventDefault();
        const person = new Person(this.name.value, this.surname.value, this.email.value);
        const result = controlInputs.controlForEmpty(person);

        if (!this.updateStatus) {

            if (result) {
                this.addPersonToList(person);
                this.getAllData.setDBMeth(person);
                this.resetInputs();
            } else {
                console.log(false);
            }
        } else {
            this.updatePerson(person);

        }
    }

    updatePerson(person) {
        this.getAllData.updateFromLs(person, this.updateStatus.cells[2].textContent);
        this.updateStatus.cells[0].textContent = person.name;
        this.updateStatus.cells[1].textContent = person.surname;
        this.updateStatus.cells[2].textContent = person.email;
        this.resetInputs();
        this.updateStatus = false;
        this.submit__btn.className = 'button-primary u-full-width';
        this.submit__btn.value = 'Enter';

    }

    deleteOrUpdate(e) {
        const thatTR = e.target.parentElement.parentElement;

        if (e.target.classList.contains('btn--delete')) {
            const thatEmail = thatTR.children[2].textContent
            this.getAllData.deleteFromLs(thatEmail);
            thatTR.remove();
        } else if (e.target.classList.contains('btn--edit')) {
            this.submit__btn.className = 'btn--danger u-full-width';
            this.submit__btn.value = 'Edit';
            this.updateStatus = thatTR;
            this.name.value = thatTR.cells[0].textContent;
            this.surname.value = thatTR.cells[1].textContent;
            this.email.value = thatTR.cells[2].textContent;

        }
    }

}

class DB {
    constructor() {
        this.getDB = this.getDBMeth();
    };


    getDBMeth() {
        let allPerson;
        if (localStorage.getItem('allPerson') === null) {
            allPerson = [];
        } else {
            allPerson = JSON.parse(localStorage.getItem('allPerson'));
        }
        return allPerson;
    };

    setDBMeth(person) {
        this.getDB.push(person);
        localStorage.setItem('allPerson', JSON.stringify(this.getDB));
    };

    deleteFromLs(personEmail) {
        for (let i in this.getDB) {
            if (this.getDB[i].email === personEmail) {
                this.getDB.splice(i, 1);
                localStorage.setItem('allPerson', JSON.stringify(this.getDB));
            }
        }

        localStorage.setItem('allPerson', JSON.stringify(this.getDB));
    }

    updateFromLs(person, personOldEmail) {
        for (let i in this.getDB) {
            if (this.getDB[i].email === personOldEmail) {
                this.getDB[i].name = person.name;
                this.getDB[i].surname = person.surname;
                this.getDB[i].email = person.email;
            }
        }
        localStorage.setItem('allPerson', JSON.stringify(this.getDB));

    }

};

document.addEventListener('DOMContentLoaded', function() {
    new Screen();
})

// Completed!