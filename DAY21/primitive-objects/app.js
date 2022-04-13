'use strict';
/*
Javascript primitiv tipleri;

Number,
String,
Boolean,
Undefined,
Null,
Symbol,
BigInt

Javascript referans tipleri;

Object,
Array,
Functions

*/
// Example 1
let a = 10;
let b = a;
a = 15;
console.log(a); // 15
console.log(b); // 10

// Dəyişənlərin aldığı dəyərlər stack'da tutulduğu üçün b'e a'in deyerini artirdiqdan sonra bele a da deyishiklik edildikde bu deyishiklik b'e tesir etmir. 

// Example 2
const obj1 = {
    age: 20
};

const obj2 = obj1;
obj1.age = 25;
console.log(obj1.age);
console.log(obj2.age);
console.log("*******");

// Obyektler ve massivlerde ise bu biraz ferqlidi. Cunki yuxarida yazilan ornekdeki obj1 stack yaddashda {age:20} yox {age:20}'e aid olan adresi saxlayir. obj2'ni obj1'in deyerlerine beraber etdikde obj2 = {age:20}'e yox obj2 = adresi saxlayir.  Ona gore de hem deyishiklik etdikde ikisinde de o deyishiklik olur hem de const xeta vermir.

// Example 3
let age = 22;
let s = 10;
const me = {
    height: 185
}

function update(a, b) {
    a = 30;
    b.height = 192;
    s = 30;
    console.log(a, b); // 30, 192
}

update(age, me);

console.log(age); // 22
console.log(me.height); // 192

// Primitiv tiplər funksiya icine parametr olaraq elave edildikte hemin deyishkenin kopyasi funksiya icinde yaradilir ve funksiya olmadan cagirildigi zaman ilk basda tanimlanan deyerin getirir. Amma referans tipler her hansi bir kopya yaratmir bir basa oz icindeki deyerin deyismesine imkan verir. Cunki referans tipler stack yaddashda referansTip = adress sheklinde olur. Amma primitiv tipler pritimitvTip = string/number vs. sheklinde olur.