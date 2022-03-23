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