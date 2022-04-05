'use strict';
// Prototip istifadəsi;
// Example 1
function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;

}

// Prototip yaradıldı
Person.prototype.about = function() {
    return `I'm ${this.name} ${this.surname}`;
}

let hikmat = new Person('Hikmat', 'Rajabli', 22);
console.log(hikmat);
console.log(hikmat.about());

// Example 2 - Faiz məsələsi (prototip istifadə etmədən)
/*
 * 5000 ə qədər 10% vergi
 * 7000-10000 ə qədər 20% vergi
 * 10000 + 30% vergi
 */

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;


    this.tax = function() {
        let month = new Date().getMonth() + 1;
        let total = month * this.salary;
        let tax = 0;

        if (total <= 5000) {
            tax = total * 0.1;
        } else if (total > 5000 && total <= 10000) {
            tax = total * 0.2;
        } else {
            tax = total * 0.3;
        }

        return {
            tax: tax,
            paid: total - tax
        }

    }
}

let nail = new Employee('Nail', 2500);
console.log(nail.tax());