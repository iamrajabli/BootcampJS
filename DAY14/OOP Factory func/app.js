'use strict';
// Object nədir? 
// Example 1

// Object literal
const person = {
    ad: 'Hikmat',
    soyad: 'Rajabli',
    av: 'subay',
    yas: 22,
    hobbi: ['code', 'web', 'study new language', 'cyber security'], // massiv
    oxuduguYer: function() { // metod (obyektin içindəki funksiyalar metod adlanır) [template literal]
        return 'Xarkov Daxili İşlər Universiteti';
    },
    qisaInfo: function() { // this - olduğu obyekti özündə cəmləyir. 
        return {
            ad: this.ad,
            soyad: this.soyad,
            av: this.av,
            yas: this.yas,
            hobbi: this.hobbi,
        }
    },
    'full-name': 'Hikmat Rajabli' // - var isə '' içində yazılmalıdır.
};

console.log(person["full-name"]);
console.log(person.hobbi[2]);
console.log(person.oxuduguYer());
console.log(person.qisaInfo());
console.log("***********");