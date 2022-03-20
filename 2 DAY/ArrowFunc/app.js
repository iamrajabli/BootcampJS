'use strict';
// ES6 ilə gələn FAT ARROW 

// Example 1 
// Dəyişkənə funksiya tanımlamaq olar. Bu halda dəyişkəni funksiya kimi çağırmaq lazımdır.

const myFunc = function myName(text) {
    console.log(text);
}

myFunc("Hikmat");


// Example 2
// Fat arrow ilə funksiya

const fatArrow = () => {
    console.log('Fat Arrow');
}

fatArrow();