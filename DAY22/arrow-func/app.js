'use strict';
// Example 1
// Es 5 function
function funcForEx1() {
    return 'This is ES5 function';
}

console.log(funcForEx1());

// Example 2
// Es 6 function
let funcForEx2 = () => {
    return 'This is ES6 function';
}

console.log(funcForEx2());

// Example 3 
// Es 5 function with params
let funcForEx3 = function(x, y) {
    return x * y;
}
console.log(funcForEx3(6, 10));

// Example 4 
// Es 6 function with params
let funcForEx4 = (x, y) => {
    return x * y;
}
console.log(funcForEx4(6, 10));

// Example 5
// Es 6 function with {} [kod eger bir setir olacaqsa...]
let funcForEx5 = (x, y) => x * y;
console.log(funcForEx5(6, 10));

// Example 6 
// Es 5 split
let funcForEx6 = function(text) {
    return text.split(' ');
}
console.log(funcForEx6('hi world'));

// Example 7 
// Es 6 split
let funcForEx7 = (text) => text.split(' ');
console.log(funcForEx7('hi world'));

// Example 8
// Es 5 return object
let funcForEx8 = function(name, age) {
    return {
        name: name,
        age: age
    }
}
console.log(funcForEx8('Hikmat', 22));

// Example 9
// Es 6 return object [moterizelere diqqet ()]
let funcForEx9 = (name, age) => ({
    name: name,
    age: age
});
console.log(funcForEx9('Hikmat', 22));

// Example 10 
// Es 5 filter
let arr = [1, 2, 3, 4, 1, 123, 123, 2, 66, 423, 14512, 3233];
let funcForEx10 = arr.filter(function(a) {
    return a % 2 == 0;
});
console.log(funcForEx10);

// Example 11 
// Es 5 filter
let funcForEx11 = arr.filter(a => a % 2 == 0);
console.log(funcForEx11);