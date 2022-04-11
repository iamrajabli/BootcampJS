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
    static controlForEmpty(...personInfo) {
        let result = true;
        personInfo.forEach(element => {
            if (element < 1) {
                result = false;
                return result
            }
        });

        return result;
    }
}

class Screen {
    constructor() {
        this.name = document.getElementById('name');
        this.surname = document.getElementById('surname');
        this.email = document.getElementById('email');
        this.submit__btn = document.getElementById('submit__btn');
        this.form = document.getElementById('form__contact').addEventListener('submit', this.addOrUpdate);
        // this.getAllData = new DB();
    };

    addOrUpdate(e) {
        e.preventDefault();
        const person = new Person(this.name.value, this.surname.value, this.email.value);
        const result = controlInputs.controlForEmpty(person.ad, person.surname, person.email);

        if (result) {
            console.log(true);
        } else {
            console.log(false);
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
    }
};


document.addEventListener('DOMContentLoaded', function() {
    new Screen();
})