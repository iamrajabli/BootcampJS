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

// Verilən massivdəki ədədləri ikiyə vurmaq üçün proqram yazırıq. Amma bizdən ikiyə bölmək üçün də, hər birinin üstünə 5 gəlmək üçün də, hər birindən 3 çıxmaq üçün də proqram istənilir. Bildiyimiz yollarla getsək əgər, məcburuq ki kod təkrarı edək. Ammma higher order və callback anlayışı ilə bu məsələni az kodla həll edə bilərik.