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