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
    }
}