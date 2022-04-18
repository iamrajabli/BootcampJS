'use strict';
let h1 = document.querySelector('h1');
let divs = document.querySelectorAll('div');
let myArr = [];

// Example 1 
// Spread with ES5 

myArr.push(h1);
divs.forEach(function(item) {
    myArr.push(item);
})
console.log(myArr);

// Example 2
// Spread with ES6
myArr = [h1, ...divs];
console.log(myArr);