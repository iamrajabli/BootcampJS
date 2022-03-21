'use strict';

let personNames = ['Hikmat', 'Nail', 'Yusif'];

// Bəzi önəmli metodlar
// Example 1
// toString - mətn kimi ekrana çıxarır. Hər veriləndən sonra vergül qoyulur. 
console.log(personNames.toString());

// Example 2
// join - vergüllə deyildə istədiyimiz simvolla ekrana çıxara bilirik.
console.log(personNames.join(" _   "));

// Example 3
// Index nömrəsini yazar deyil, ən son indeksdən sonraki indexə verilən əlavə etmə
console.log(personNames.push("Rajab")); // Push massivin sonuncu elementinin indeksi + 1 dir.
console.log(personNames.join(" , "));