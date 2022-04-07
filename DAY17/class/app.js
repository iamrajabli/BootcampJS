'use strict';
// class istifadəsi. Js de class, konstruktiv funksiyalari daha oxunaqli shekilde yazmaq ucun yaradilib.
// Example 1

class PersonForEx1 {

    constructor(ad, soyad, yas) { // constructor keywordundan istifade ederek konstruktor funksiya yaradiriq.
        this.ad = ad;
        this.soyad = soyad;
        this.yas = yas;
    }

    dogumTarixi = function() { // metod
        return 2022 - this.yas
    }
};

const hikmatForEx1 = new PersonForEx1('Hikmat', 'Rajabli', 22);

function logsForEx1() {
    console.log(hikmatForEx1);
    console.log(hikmatForEx1.dogumTarixi());
    console.log(typeof hikmatForEx1);
    console.log("************");
};