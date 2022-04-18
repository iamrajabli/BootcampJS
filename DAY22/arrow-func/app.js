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
// Es 6 function with {}
let funcForEx5 = (x, y) => x * y;
console.log(funcForEx5(6, 10));

// Example 6 
// Es 5 split
let funcForEx6 = function(text) {
    return text.split(' ');
}
console.log(funcForEx6('hi world'));