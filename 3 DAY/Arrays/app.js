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
// Bu halda 20 ci sıraya əlavə ediləcək. Amma massivin uzunluğu 21 olacaq. Yəni 3 cü sıradan 20 ə qədər boş verilənlər olacaq.

cars[20] = 'Porsche';
console.log(cars);
console.log(cars[10]); // boş olan veriləni çağırmağa çalışdıqda UNDEFINED alarıq.

let salam;
console.log(salam);