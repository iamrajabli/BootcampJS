'use strict';
// Döngülər təkrar ediləcək işləri bir sətirdə yazmaqda kömək edirlər

// Example 1 
// For algoritim width Switch
let i = 0;

switch (true) {
    case i < 5:
        i = 1;
        console.log(i);

    case i < 5:
        i = 2;
        console.log(i);

    case i < 5:
        i = 3;
        console.log(i);

    case i < 5:
        i = 4;
        console.log(i);

    case i < 5:
        i = 5;
        console.log(i);

}

// For 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2 - Adını 5 dəfə ekrana yazdır
let myName = "Hikmat";

for (let i = 0; i < 5; i++) {
    console.log(myName);
}

// Example 3
// Sonsuz loop? 
// For 3 parametr ala bilir. Dəyər, şərt, addım
// Amma dəyəri global scope olaraq da tanımlamaq olar. 
// Hətta addımı (i++)-sızda yazmaq olar. Addımı block scope kimi tanımlamaq olar
// Hətta hamsın silmək olar...

// for (;;) {

// }


// Example 4 - break

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}