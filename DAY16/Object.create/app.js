'use strict';
// call və object.create istifadəsi və məntiqi.
// Example 1

function PersonForEx1(ad, soyad) {
    this.ad = ad; // *
    this.soyad = soyad;
}

// DRY - Don't repeat yourself.
function StudentsForEx1(ad, soyad, yas, univer) {
    this.ad = ad; // təkrar *
    this.soya = soyad; // təkrar *
    this.yas = yas;
    this.univer = univer;
}

const hikmatForEx1 = new StudentsForEx1('Hikmat', 'Rajabli', 22, 'KHNUVD');
console.log(hikmatForEx1);