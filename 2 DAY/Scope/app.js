'use strict';

// Global və Local scope, Shadowed variables

// Example 1 

let personName = "Hikmat"; // Global scope

function Person() {
    console.log(`My name is ${personName}`);
}

Person(personName)