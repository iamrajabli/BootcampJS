'use strict';
// Try catch istifadesi
// Example 1

const hikmet = {
    age: 22,
    lastname: 'rajabli'
}

try {
    console.log(hikmet.name); // undefined;
    if (!hikmet.name) {
        throw new Error('Bele parametr yoxdur')
    }
} catch (error) {
    console.log(error);
}