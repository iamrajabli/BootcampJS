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


// Example 3 - object.create
function PersonForEx3(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
}

// Bu prototipi StudentsForEx3 üçün də tətbiq etmək üçün object.create metodundan istifadə etmək lazımdır.
PersonForEx3.prototype.qisaBilgi = function() {
    return `Salam, mənim adım: ${this.ad}'dir`;
}

function StudentsForEx3(ad, soyad, yas, univer) {
    PersonForEx3.call(this, ad, soyad); // call metodu sayəsində Person qurucu funksiyasından ad və soyadı çağırdıq. 
    this.yas = yas;
    this.univer = univer;
}

StudentsForEx3.prototype = Object.create(PersonForEx3.prototype); // Eyni prototipə sahib oldular. StudentsForEx3.prototype = PersonForEx3.prototype
StudentsForEx3.prototype.constructor = StudentsForEx3; // əgər bunu yazmasaq studentsForEx3 PersonFor3 olacaqdi. Bu da o demekdirki studentsForEx3 den yaradilan obyektlerin konstruktoru PersonForEx3 sayilacaqdi. 

const hikmatForEx3 = new StudentsForEx3('Hikmat', 'Rajabli', 22, 'KHNUVD');

function logsForEx3() {
    console.log(hikmatForEx3);
    console.log(hikmatForEx3.qisaBilgi());
    console.log("**********");
}

logsForEx3()

// Example 4 - Prototype sayəsində Array a öz metodumuzu (map) artıraq.
const ArrFor4 = [1, 2, 3, 4];
const myNewArr = ArrFor4.map(items => {
    return items + 2;
});

console.log(myNewArr);
console.log("**********");

Array.prototype.myMapMethod = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }
    return newArr;
}

let x2 = ArrFor4.myMapMethod(item => {
    return item * 2;
});

let x3 = ArrFor4.myMapMethod(item => {
    return item * 3;
});

console.log(x2);
console.log(x3);
console.log("**********");

// Example 5 - map metodunu prototipsiz ozel konstruktor ucun yazaq
function PersonForEx5(ad, soyad, hobbi) {
    this.ad = ad;
    this.soyad = soyad;
    this.hobbi = hobbi;

    this.hobbiSort = function(callback) {
        let myNewArr = [];
        for (let i = 0; i < this.hobbi.length; i++) {
            myNewArr.push(callback(this.hobbi[i]));
        }
        return myNewArr;
    }
}

const hikmatForEx5 = new PersonForEx5('Hikmat', 'Rajabli', ['kitab', 'kod', 'boks']);
const aliForEx5 = new PersonForEx5('Ali', 'Rajabli', ['dis', 'tibb', 'trade']);

let hikmatForEx5_2 = hikmatForEx5.hobbiSort(function(item) {
    return `hobbi: ${item}`;
});

let aliForEx5_2 = aliForEx5.hobbiSort(function(item) {
    return `AlininHobbisi: ${item}`;
});


function logsForEx5() {
    console.log(hikmatForEx5_2);
    console.log(aliForEx5_2);
    console.log("**********");
}


// Example 6 - map metodunu prototiple ozel konstruktor ucun yazaq

function PersonForEx6(ad, soyad, hobbi) {
    this.ad = ad;
    this.soyad = soyad;
    this.hobbi = hobbi;
}

PersonForEx6.prototype.hobbiSort = function(callback) {
    let myNewArr = [];
    for (let i = 0; i < this.hobbi.length; i++) {
        myNewArr.push(callback(this.hobbi[i]));
    }
    return myNewArr;
}

const hikmatForEx6 = new PersonForEx6('Hikmat', 'Rajabli', ['kitab', 'kod', 'boks']);

let hikmatForEx6_2 = hikmatForEx6.hobbiSort(function(item) {
    return `hobbi: ${item}`;
});

function logsForEx6() {
    console.log(hikmatForEx6_2);
    console.log("**********");
}