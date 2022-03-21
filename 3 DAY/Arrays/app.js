'use strict';

// Verilənləri bir arada tutmaq üçün massivlərdən istifadə olunur
// Example 1 
// Massivlərin indeksi 0 dan başlayır. Yəni 3 dənə veriləni olan massivin indeksi: 0, 1, 2;

let cars = ['Bmw', 'Mercedes', 'Audi'];
console.log(cars);


// Example 2
// Massivin sırasına əlavə edilmə

cars[3] = 'Toyota';
console.log(cars);

// Example 3 
// Massivdə var olan veriləni yeniləmə

cars[0] = 'Hundai';
console.log(cars);

// Example 4 
// Massivdə olmayan sıraya əlavə etmə
// Bu halda 6 ci sıraya əlavə ediləcək. Amma massivin uzunluğu 7 olacaq. Yəni 3 cü sıradan 6 ə qədər boş verilənlər olacaq.

cars[6] = 'Porsche';
console.log(cars);
console.log(cars[5]); // boş olan veriləni çağırmağa çalışdıqda UNDEFINED alarıq.

// Example 5
// For array istifadəsi

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log('****************');
// Example 6 
// For of array istifadəsi

for (let index of cars) {
    console.log(index);
}
console.log('****************');

// İşləmə prinsipi: let ilə yaratdığımız dəyişkən cars massivinin uzunluğunu təyin edir və hər dəfəsində index sırasına görə verilənləri index dəyişkəninə təyin edir. Aşağıdaki kimi:

let indexArr;
let i = 0;

switch (true) {
    case i < cars.length:
        indexArr = cars[i];
        i++;
        console.log(indexArr);

    case i < cars.length:
        indexArr = cars[i];
        i++;
        console.log(indexArr);

    case i < cars.length:
        indexArr = cars[i];
        i++;
        console.log(indexArr);

    case i < cars.length:
        indexArr = cars[i];
        i++;
        console.log(indexArr);

    case i < cars.length:
        indexArr = cars[i];
        i++;
        console.log(indexArr);

    case i < cars.length:
        indexArr = cars[i];
        i++;
        console.log(indexArr);

    case i < cars.length:
        indexArr = cars[i];
        i++;
        console.log(indexArr);

}
console.log('****************');

// Və ya 

i = 0;
while (i < cars.length) {

    indexArr = cars[i];
    console.log(indexArr);
    i++;

}