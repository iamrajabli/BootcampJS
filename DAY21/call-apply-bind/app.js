// call istifadesi
// Example 1
let welcome = function() {
    console.log(`Welcome ${this.name}`);
}
const hikmat = {
    name: 'Hikmat'
}
welcome.call(hikmat /* ** */ );
// hikmat ** funksiyadaki this'e beraber oldu.

// apply istifadesi
// Example 2
// Eger funksiya parametr almirsa apply call'in etdiyini edir. 

const nail = {
    name: 'Nail'
}
welcome.apply(nail)