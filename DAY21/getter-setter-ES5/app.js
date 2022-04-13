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