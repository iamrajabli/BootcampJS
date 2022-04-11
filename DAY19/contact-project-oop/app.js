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

        if (result) {
            this.addPersonToList(person);
            this.getAllData.setDBMeth(person);
            this.resetInputs();
        } else {
            console.log(false);
        }
    }

    deleteOrUpdate(e) {
        const thatTR = e.target.parentElement.parentElement;
        const thatEmail = thatTR.cells[2].textContent;
        console.log(thatEmail);
        if (e.target.classList.contains('btn--delete')) {
            thatTR.remove();
            this.getAllData.deleteFromLs(thatEmail)

        }
    }

}

class DB {
    constructor() {
        this.getDB = this.getDBMeth();
    };

    deleteFromLs(personEmail) {
        // for (let i in this.getDB) {
        //     if (this.getDB[i].email === personEmail) {
        //         this.getDB.splice(i, 1);
        //         localStorage.setItem('allPerson', JSON.stringify(this.getDB));
        //     }
        // }

        this.getDB.forEach((element, index) => {
            if (element.email === personEmail) {
                this.getDB = this.getDB.splice(index, 1);
            }
        });

        localStorage.setItem('allPerson', JSON.stringify(this.getDB));
    }
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


};

document.addEventListener('DOMContentLoaded', function() {
    new Screen();
})