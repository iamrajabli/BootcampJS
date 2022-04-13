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