'use strict';
// Map array istifadəsi və öz array metodumuzun yazılma qaydası 
// Example 1 
const arrEx1 = [1, 2, 3, 4];

const arrNewEx1 = arrEx1.map(function(arr) {
    return arr * 2;
});

console.log(arrNewEx1);

// Example 2 
const arrEx2 = [
    { ad: 'Hikmat', soyad: 'Rajabli' },
    { ad: 'Nail', soyad: 'Romanov' },
    { ad: 'Sahil', soyad: 'Aliev' },
]

const arrNewEx2 = arrEx2.map(function(arr) {
    return arr.ad;
});

console.log(arrNewEx2);

// Example 3 - öz map metodumuz
const arrEx3 = [1, 2, 3, 4];

function myMapFunc(arr, process) {
    let arrNewEx3 = [];
    for (let i = 0; i < arr.length; i++) {
        // arrNewEx3.push(process(arr[i])); // push ilə
        arrNewEx3[i] = process(arr[i]); // push'u da özümüz yazaq :D
    }

    console.log(arrNewEx3);
}

myMapFunc(arrEx3, function(int) {
    return int * 5;
})