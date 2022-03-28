'use strict';
// ES6 ilə gələn array helper Foreach əslində bir higher order funksiyadır və callback istifadə edir.
// Example 1 - normal yazlışı
let arrNorm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrNorm.forEach(function(item, index) {
    console.log(item, index);
});


console.log("***************");

// Example 2 - Algoritm
let arrAlgoritm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forEachAlgoritm(arrAlgoritm) {
    for (let i = 0; i < arrAlgoritm.length; i++) {
        console.log(arrAlgoritm[i], i);
    }
}
forEachAlgoritm(arrAlgoritm);
console.log("***************");


// Example 3 - Algoritmdə callback istifadəsi
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myForEach(arr, callback) { // funksiyanı parametr olaraq daxil etdik
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i); // funksiyanın parametrinə məlumatları göndərdik
    }
}

myForEach(arr, function(item, index) { // callback parametrinin funkasiyasını yazdıq
    console.log(item, index);
});