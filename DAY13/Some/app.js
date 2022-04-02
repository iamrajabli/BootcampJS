'use strict';
// Some istifadəsi və yazılış qaydası - ən az biri şərti qarşılamalıdır*
// Example 1
let _arr = [1, 2, 3, 4, 5, 6];

const _Ex1 = _arr.some(__controlArr => {
    return __controlArr > 10; // false *
});

console.log(_Ex1);
console.log("*********");

// Example 2 - normal yazılışı
function __controlFromArrEx1(__arr) {
    let _control = [];
    for (let index in __arr) {
        if (__arr[index] > 7) {
            _control.push(__arr[index]); // Kontrol edilməsi üçün arraya əlavə edildi.
        }
    }
    if (_control.length > 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

__controlFromArrEx1(_arr)