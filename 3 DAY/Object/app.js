'use strict';
// Object massiv anlayışı

// Example 1
let Hikmat = {
    name: 'Hikmat',
    surname: 'Rajabli',
    birthOfYear: 1999,
    height: 185,
    weight: 85,
    ageCal: function() { // Objectin içində funksiya yazmaq olar.
        return 2022 - this.birthOfYear; // Objectin içində ona aid olan açar sözü çağırmaq üçün "this" mütləq olmalıdır. Və ya Example 2'də daha fərqli istifadə görmək olar.
    }
}
console.log(Hikmat.ageCal());

// Example 2
let Nail = {
    name: 'Nail',
    surname: 'Rajabli',
    birthOfYear: 1999,
    height: 185,
    weight: 85,
    ageCal: function(year) { // Objectin içində funksiya yazmaq olar.
        return 2022 - year; // Example 3'də daha fərqli istifadə görmək olar.
    }
}
console.log(Nail.ageCal(Nail.birthOfYear));

// Example 3
let Rajab = {
    name: 'Rajab',
    surname: 'Aliev',
    birthOfYear: 2000,
    height: 202,
    weight: 121,
    ageCal: function() { // Objectin içində funksiya yazmaq olar.
        this.age = 2022 - this.birthOfYear;
    }
}
Rajab.ageCal();
console.log(Rajab.age);

// İndi əgər istəsək bu obyetkləri massivlərin içinə ata bilərik. Yəni;
// Example 4
let Person = [Hikmat, Nail, Rajab];
console.log(Person);

// Example 5 
// Fərqli object yaratma üsulu
let newObject = new Object();
newObject.create = 2022;
console.log(newObject.create);