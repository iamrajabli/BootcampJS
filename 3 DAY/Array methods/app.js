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

// Example 4 
// Sonuncu elementin çıxarılması
let deletedName = personNames.pop(); // pop sonuncu elementdir. Yəni;
console.log(deletedName);
console.log(personNames.join(" , "));

// Example 5
// Massivi sola sürüşdürmək. Yəni birinci elementin silmək
personNames.shift();
console.log(personNames);

// Example 6
// Massivi sağa sürüşdürərək solunda açılan yerə element əlavə etmək
personNames.unshift("Yeni ad");
console.log(personNames);

// Example 7
// Massivin istədiyin elementini silmə
// Sildikdə indeks nömrəsi qalır. Sadəcə sildiyi yer boş olaraq işarələnir
delete personNames[1];
console.log(personNames);