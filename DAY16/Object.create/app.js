'use strict';
// call və object.create istifadəsi və məntiqi.
// Example 1 - normal istifadə

function PersonForEx1(ad, soyad) {
    this.ad = ad; // *
    this.soyad = soyad; // *
}

// DRY - Don't repeat yourself.
function StudentsForEx1(ad, soyad, yas, univer) {
    this.ad = ad; // təkrar *
    this.soyad = soyad; // təkrar *
    this.yas = yas;
    this.univer = univer;
}

const hikmatForEx1 = new StudentsForEx1('Hikmat', 'Rajabli', 22, 'KHNUVD');

function logsForEx1() {
    console.log(hikmatForEx1);
    console.log("**********");
}


// Example 2 - call istifadəsi
function PersonForEx2(ad, soyad) {
    this.ad = ad; // *
    this.soyad = soyad; // *
}

// DRY - Don't repeat yourself.
function StudentsForEx2(ad, soyad, yas, univer) {
    PersonForEx2.call(this, ad, soyad); // call metodu sayəsində Person qurucu funksiyasından ad və soyadı çağırdıq. 
    this.yas = yas;
    this.univer = univer;
}

const hikmatForEx2 = new StudentsForEx2('Hikmat', 'Rajabli', 22, 'KHNUVD');

function logsForEx2() {
    console.log(hikmatForEx2);
    console.log("**********");
}
logsForEx2()