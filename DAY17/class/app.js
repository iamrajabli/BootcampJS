'use strict';
// class istifadəsi. Js de class, konstruktiv funksiyalari daha oxunaqli shekilde yazmaq ucun yaradilib.
// Example 1

class PersonForEx1 {

    constructor(ad, soyad, yas) { // constructor keywordundan istifade ederek konstruktor funksiya yaradiriq.
        this.ad = ad;
        this.soyad = soyad;
        this.yas = yas;
    }

    dogumTarixi = function() { // prototip
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

// Example 2 - extends, super (call)
class StudentsForEx2 extends PersonForEx1 {
    constructor(ad, soyad, yas, sinif) {
        super(ad, soyad, yas);
        this.sinif = sinif;
    }

    dogumTarixi = function() { // prototip (parentden gelen prototipi ezdim)
        return 2021 - this.yas
    }
}

const ramin = new StudentsForEx2('Ramin', 'Azimli', 22, 11);

function logsForEx1() {
    console.log(ramin);
    console.log(ramin.dogumTarixi());
    console.log("************");
};