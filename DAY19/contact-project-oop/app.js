'use strict';
// OOP

class Person {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
};

class Screen {
    constructor() {
        this.name = document.getElementById('name');
        this.surname = document.getElementById('surname');
        this.email = document.getElementById('email');
        this.submit__btn = document.getElementById('submit__btn');
        this.getAllData = new DB();
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

let tas = new DB();
console.log(tas.setDBMeth('salam'));