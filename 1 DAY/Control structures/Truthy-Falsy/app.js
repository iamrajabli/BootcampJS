'use strict';

// Example 1 - If'in içində yazdığımız bütün şərtlərdən 2 cavab çıxır: True və False

let brithOfYear = 1999;

if (brithOfYear) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

// Example 2 - Dəyər 0 olarsa? - False'in dəyəri 0 olduğu üçün FALSE olacaq

let secondEx = 0;

if (secondEx) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

// Example 3 - Daha maraqlı birşey - V8 Stringlərdə + u toplama kimi yox birləştirmə kimi başa düşdüyü üçün şellənə bilərik

let thirdEx = 'Hi!';

if (thirdEx + 99) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}