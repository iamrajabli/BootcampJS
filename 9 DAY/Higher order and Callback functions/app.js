'use strict';

// Higher order and callback functions
// Example 1

const arr = [1, 2, 3];

function ikiyeVur(arr) {
    let localArr = [];
    for (let i = 0; i < arr.length; i++) {
        localArr[i] = arr[i] * 2;
        console.log(localArr[i]);
    }
}

ikiyeVur(arr);
console.log("***************************");
// Verilən massivdəki ədədləri ikiyə vurmaq üçün proqram yazırıq. Amma bizdən ikiyə bölmək üçün də, hər birinin üstünə 5 gəlmək üçün də, hər birindən 3 çıxmaq üçün də proqram istənilir. Bildiyimiz yollarla getsək əgər, məcburuq ki kod təkrarı edək. Ammma higher order və callback anlayışı ilə bu məsələni az kodla həll edə bilərik.
// Yəni;
// Example 2

const arrSecond = [4, 6, 8, 10]; // ***

// Burda function process - higher order function
// parametr callback - callback function
function process(arr, callback) {
    let localArr = [];
    for (let i = 0; i < arr.length; i++) {

        // localArr[i] = arr[i] * 2;

        localArr[i] = callback(arr[i]); // arr[i] = 4,6,8,10 ***

    }

    console.log(localArr);
}

function ikiVur(int) {
    return int * 2;
}

function ikiBol(int) {
    return int / 2;
}

function beshGel(int) {
    return int + 5;
}

function ucCix(int) {
    return int - 2;
}

process(arrSecond, ikiVur);
process(arrSecond, ikiBol);
process(arrSecond, beshGel);
process(arrSecond, ucCix);