'use strict';
// Getter ve setter
// Example 1
const PersonForEx1 = {
    firstName: 'Hikmat',
    lastName: 'Rajabli',

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(PersonForEx1.getFullName()); // Hikmat Rajabli
// Eger men colden obyektin icindeki melumati deyishmek isteyiremse:
PersonForEx1.firstName = 'Nail';
console.log(PersonForEx1.getFullName()); // Nail Rajabli
console.log("*************");

// Example 2: melumatlari iceriden deyishmek isteyiremse:
const PersonForEx2 = {
    firstName: 'Hikmat',
    lastName: 'Rajabli',

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    setFullName: function(value) {
        const newArr = value.split(" ");
        this.firstName = newArr[0];
        this.lastName = newArr[1];


    }
}

PersonForEx2.setFullName('Ahmet Rajabli');
console.log(PersonForEx2.getFullName());