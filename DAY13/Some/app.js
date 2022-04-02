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
function __controlFromArrEx2(__arr) {
    let _controlArr = [];
    for (let index in __arr) {
        if (__arr[index] > 3) {
            _controlArr.push(__arr[index]); // Kontrol edilməsi üçün arraya əlavə edildi.
        }
    }
    if (_controlArr.length > 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

__controlFromArrEx2(_arr);
console.log("*********");

// Example 3 - callback 
function __controlFromArrEx3(__arr, __callback) {
    let _controlVar; // Dəyişkənin massiv olmamasının səbəbi: callback funksiya ilə kontrol zamanı ilk tapdığı dəyəri döndürdüyü üçün massiv yazaraq onun için kontrol etməyə ehtiyac olmadı.
    for (let index in _arr) {
        _controlVar = __callback(_arr[index]); // return ilə bura true ya da false göndərdik
    }
    if (_controlVar) { // gələn true ya da false ə görə kontrol edilir
        console.log(_controlVar);
    } else {
        console.log(_controlVar);
    }
}

function __callBackForEx3(__arr) {
    return __arr > 2;

}

__controlFromArrEx3(_arr, __callBackForEx3)