'use strict';

// Javacript'ə aid olan bütün məlumatlar window içindədir
let itemWindow = window;
console.log(itemWindow);

// DOM - Document Object Model - window'un içində yer alır
// Document sayəsində brauzerdəki HTML teglərinə bağlanmaq olar
let itemDocument = document;

// Bir neçə əməliyyat

// Example 1 - Linkləri gətirmək
itemDocument = document.links;

// Example 2 - Formları gətirmək
itemDocument = document.forms;

// Example 3
// Links və forms nə qədər ki [] köməyi ilə idarə olunsa da tam olaraq Array deyil. Ona görə forEach istifadə etmək mümkün deyil. Amma Array.from ilə array edərək forEach istifadə etmək mümkündür
let docArr = Array.from(itemDocument);

docArr.forEach(item => {
    console.log(item);
})

console.log(itemDocument);