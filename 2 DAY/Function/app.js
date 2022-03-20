'use strict';

// Example 1
// Funksiyasız FOR - 1 dən 100 ə qədər ədədlərin cəmi lazımdır

let calFor = 0;

for (let i = 0; i <= 100; i++) {
    calFor += i;
}
console.log(calFor);

// Example 2
// İndi 0 dan deyildə 5 dən 100 ə qədər deyildə 500 qədər lazımdır. Daha rahat olmağı üçün funksiya ilə yazaq

function calculator(start, end) {
    let calc = 0;
    for (let i = start; i <= end; i++) {
        calc += i;
    }
    console.log(calc);
}

calculator(5, 111);
calculator(52, 142);


// Example 3
// İki ədədin cəmini hesablayan funksiya

function calcT(a, b) {
    console.log(a + b);
}

calcT(2, 4);