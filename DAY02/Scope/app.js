'use strict';

// Global və Local scope, Shadowed variables

// Example 1 

let personName = "Hikmat"; // Global scope

function Person() {
    console.log(`My name is ${personName}`);
}

Person(personName)

// Example 2 

let personSurname = "Rajabli"; // Global scope

// Funksiyaya parametr vermədikdə, console.log varsa çağırmağa ehtiyac yoxdur
function Person() {
    let personSurname = "Rajabov" // Shadow variable - Global scope ilə eyni adlara sahib ola bilərlər dəyişkənlər. 
    console.log(`My surname is ${personSurname}`);
}