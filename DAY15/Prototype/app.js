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