'use strict';
// Every istifadəsi və yazılış qaydası - bütün şərtlər qarşılamalıdır*
// Example 1
let _arr = [6, 12, 14, 124, 123];

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

// Example 3 - callback
function __controlFromArrEx3(__arr, __callback) {
    let _controlArr = []; // callbackdan göndərilən true / false ləri özündə cəmləyən massiv
    let newResultArr = []; // sadəcə false lərin olub olmadığını kontrol etmək üçün massiv

    for (let index in _arr) {
        _controlArr.push(__callback(_arr[index])); // callbacka dəyər göndərmə və alma məs: [false, false,true, true, false]
    }
    for (let index in _controlArr) {
        if (_controlArr[index] === false) { // _controlArr massivinin içində false olduğunu yoxlamaq
            newResultArr.push(_controlArr[index]); // false varsa false üçün yaradılan massivə push etmək
        }
    }
    if (newResultArr.length > 0) { // falsenin olub olmadığını kontrol etmək üçün uzunluq validatesi
        console.log('false'); // əgər bir dənə belə false var isə demək massivdəki ədədlərin hamsı kontrolu keçmədi
    } else {
        console.log('true');
    }

}

// callback
function __callbackForEx3(__arr) {

    return __arr > 1;

}

__controlFromArrEx3(_arr, __callbackForEx3)