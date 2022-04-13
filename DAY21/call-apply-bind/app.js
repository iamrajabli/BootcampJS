'use strict';
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
welcome.apply(nail);

// bind istifadesi
// Example 3
// bind yeni kohne funksiyani referans alaraq yeni funskiya yaradir

const newHikamt = welcome.bind(hikmat);
newHikamt();

// Example 4 - call ve apply ferqi
let welcome_2 = function(age) {
    console.log(`Welcome ${this.name}, are you ${age} old?`);
}

// Example 4_1
// call ile parametr istifadesi
welcome_2.call(hikmat, 22);


// Example 4_2
// apply ile parameter istifadesi
welcome_2.apply(hikmat, [22])

// Netice: apply ile parametr istifade ederken mutleq massiv formasinda parametr daxil etmek lazimdir.

// Example 4_3
// bind ile parametr istifadesi
const newNail = welcome_2.bind(nail);
newNail(22);

// Example 5 task with call and apply

// Example 5_1 standart yazilis
const num = {
    min: 0,
    max: 100,

    controlOfNum(value) {
        if (typeof value !== 'number') {
            return false;
        } else {
            return value >= this.min && value <= this.max
        }
    }
}


console.log(num.controlOfNum(100));

// Example 5_2 call yazilis

const num_1 = {
    min: 0,
    max: 100,
}

function controlOfNum(value) {
    if (typeof value !== 'number') {
        return false;
    } else {
        return value >= this.min && value <= this.max
    }
}

console.log(controlOfNum.call(num_1, 130));

// Example 5_3 apply ile yazilis
console.log(controlOfNum.apply(num_1, [30]));