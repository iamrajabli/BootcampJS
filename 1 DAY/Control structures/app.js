'use strict';
// IF - ELSE IF - ELSE

// V8 Engine  kodları yuxarıdan aşağı oxuyur.
const myAge = 22;

if (myAge > 30) {
    console.log('true');
} else {
    console.log('false');
}

// If blokunun içində sıfırdan yaradılan variable blokdan kənar çağrıla bilmir. Global scope variable adı ilə Block scope variable adı eyni ola bilər. Variable məlumatları çağrıldığı yerə görə ekranda görünəcək. 

let personName = 'Hikmat';

if (15 > 7) {
    let personName = 'Nail';
    console.log(personName);
}

console.log(personName);

// Həmçinin validate zamanı ; istifadə edə bilərik. Bu zaman V8 avtomatik yeni sətirə keçəcək və yeni sətirdəki kodların heç bir bağlılığı qalmayacaq. 

const myHeight = 185;

if (myHeight < 170) {
    console.log('Orta boy');
} else if (myHeight < 180);

{
    console.log('show');
}