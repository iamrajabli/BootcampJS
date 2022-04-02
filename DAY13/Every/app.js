'use strict';
// Every istifadəsi və yazılış qaydası - bütün şərtlər qarşılamalıdır*
// Example 1
let _arr = [1, 2, 3, 4, 5, 6];

const result = _arr.every(__controlArr => {
    return __controlArr > 3;
});

console.log(result);
console.log("*********");

// Example 2 - normal yazılışı
// Algoritm: Massivin içindəki dəyərlər kontrol edildi və true olanlar yeni massivə əlavə edildi. Sonra köhnə massivlə yeni massivin uzunluqları müqayisə edilidi. Əgər bərabərdirsə demək bütün dəyərlər şərti yerinə gətirir.
function __controlFromArrEx2(__arr) {
    let _controlArr = [];
    for (let index in _arr) {
        if (_arr[index] > 0) {
            _controlArr.push(_arr[index]);
        }
    }

    if (__arr.length === _controlArr.length) {
        console.log('true');
    } else {
        console.log('false');
    }
}

__controlFromArrEx2(_arr);
console.log("*********");