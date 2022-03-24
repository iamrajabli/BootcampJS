'use strict';

// Bir class adı fərqli teqlərdə ola bilər. Yəni id kimi bir dəfə istifadə olunmalı deyil. Əgər normal getElementById və ya querySelector ilə seçməyə çalışsaq bu class adına sahib olan ilk element çağırılacaq. 
// 1. Metod getElementsByClassName
// Example 1

const itemsClassName = document.getElementsByClassName('item-group');
// getElementsByClassName ilə çağırılan teqlər tam olaraq array kimi davranmırlar. Çünki onlar HTMLCollection olaraq gəlirlər. Buna görə də forEach deyil for istifadə edə bilərik. 
// for (let i = 0; i < itemsClassName.length; i++) {
//     console.log(itemsClassName[i]);
// }

// Amma əgər lazım olarsa bu HTMLCollection'u array edərək forEach ilə çağıra bilərik. 
// Yəni;

// Metod 1
let itemsArrM1 = Array.from(itemsClassName); // Array.from - hazır metod
itemsArrM1.forEach(element => {
    console.log(element);
})

// Metod 2
let itemsArrM2 = [];
for (let i = 0; i < itemsClassName.length; i++) {
    itemsArrM2.push(itemsClassName[i]); // push - hazır metod
}

// Metod 3
let itemsArrM3 = [];
for (let i = 0; i < itemsClassName.length; i++) {
    itemsArrM3[i] = itemsClassName[i]; // 0'dan yazılan metod
}

itemsArrM3.forEach(element => {
    console.log(element);
})
console.log("*********************");