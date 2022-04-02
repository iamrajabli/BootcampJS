'use strict';
// Find istifadəsi və yazılış qaydası
// Example 1
const arr = [
    { id: 1, ad: 'Hikmat' },
    { id: 2, ad: 'Ali' },
    { id: 3, ad: 'Murad' },
    { id: 4, ad: 'Farid' },
];

const ex1 = arr.find(function(item) {
    return item.id === 1;
});
console.log(ex1);
console.log("*******");

// Example 2
function myArrEx2(arr) {
    for (let newArr in arr) {
        if (arr[newArr].id === 1) {
            console.log(arr[newArr]);
        }
    }
}
myArrEx2(arr);
console.log("*******");



// Example 3 - callback istifadəsi
function myArrEx3(_arr, _callback) {
    for (let index in _arr) {
        const result = _callback(_arr[index]);
        if (result) {
            console.log(_arr[index]);
        }
    }
}

myArrEx3(arr, function(_arr) {
    return _arr.id === 3;
});