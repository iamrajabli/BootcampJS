'use strict';
// ES6 ilə gələn array helper Foreach əslində bir higher order funksiyadır və callback istifadə edir.
// Example 1 - normal yazlışı
let arrNorm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrNorm.forEach(function(item, index) {
    console.log(item, index);
})