'use strict';
// Filter istifadəsi və öz filter metodumuzun callback ilə yazılışı
// Example 1

let bitkiler = [
    { ad: 'uzum', nov: 'meyve' },
    { ad: 'vezeri', nov: 'terevez' },
    { ad: 'banan', nov: 'meyve' }
];

// Callback olmadan yazılışı
function meyveEx1(arr) {
    let newMeyveArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nov === 'meyve') {
            newMeyveArr.push(arr[i])
        }
    }

    console.log(newMeyveArr);
}

meyveEx1(bitkiler);

console.log("************");