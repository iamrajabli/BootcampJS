'use strict';
// Döngülər təkrar ediləcək işləri bir sətirdə yazmaqda kömək edirlər

// Example 1 
// While algoritim width Switch
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

// While 
let v = 1;

while (v <= 5) {
    console.log(v);
    v++;
}

// Example 2 - Adını 5 dəfə ekrana yazdır
let myName = "Hikmat";

let d = 0;
while (d < 5) {
    d++;
    console.log(myName);
}