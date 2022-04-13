'use strict';
// Example 1
let a = 10;
let b = a;
a = 15;
console.log(a); // 15
console.log(b); // 10

// Dəyişənlərin aldığı dəyərlər stack'da tutulduğu üçün b'e a'in deyerini artirdiqdan sonra bele a da deyishiklik edildikde bu deyishiklik b'e tesir etmir. 

// Example 2
const obj1 = {
    age: 20
};

const obj2 = obj1;
obj1.age = 25;
console.log(obj1.age);
console.log(obj2.age);

// Obyektler ve massivlerde ise bu biraz ferqlidi. Cunki yuxarida yazilan ornekdeki obj1 stack yaddashda {age:20} yox {age:20}'e aid olan adresi saxlayir. obj2'ni obj1'in deyerlerine beraber etdikde obj2 = {age:20}'e yox obj2 = adresi saxlayir.  Ona gore de hem deyishiklik etdikde ikisinde de o deyishiklik olur hem de const xeta vermir.