'use strict';
// funksiyadan funksiya return etmek
// Example 1
function question(hobby) {

    switch (hobby) {
        case 'Car':
            return function(name) {
                console.log(`Hi, ${name}! Do you have a car?`);
            }
        case 'Book':
            return function(name) {
                console.log(`Hi, ${name}! What is your favoriute books`);
            }

        case 'Software':
            return function(name) {
                console.log(`Hi, ${name}! are you interested in js?`);
            }
        default:
            return function(name) {
                console.log(`Hi, ${name}! how are you?`);
            }
    }
};

let myHobbyCar = question('Car');
let myHobbyBook = question('Book');
let myHobbySoftware = question('Software');
let IamNotAHobby = question('not');

myHobbyCar('Hikmat');
myHobbyBook('Hikmat');
myHobbySoftware('Hikmat');
IamNotAHobby('Hikmat');