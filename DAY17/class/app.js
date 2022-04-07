'use strict';
// class istifadəsi. Js de class, konstruktiv funksiyalari daha oxunaqli shekilde yazmaq ucun yaradilib.
// Example 1

class PersonForEx1 {

    constructor(ad, soyad, yas) { // constructor keywordundan istifade ederek konstruktor funksiya yaradiriq.
        this.ad = ad;
        this.soyad = soyad;
        this.yas = yas;
    }

    dogumTarixi() { // prototip
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

    dogumTarixi() { // prototip (parentden gelen prototipi ezdim)
        return 2021 - this.yas
    }
}
const raminForEx2 = new StudentsForEx2('Ramin', 'Azimli', 22, 11);

function logsForEx2() {
    console.log(raminForEx2);
    console.log(raminForEx2.dogumTarixi());
    console.log("************");
};

// Example 3 - static
const title = 'Aze';
class StudentsForEx3 {
    constructor(ad, sinif, yas) {
        this.ad = ad;
        this.sinif = sinif;
        this.yas = yas;
    }

    dogumTarixi() { // prototip
        return 2021 - this.yas
    }

    static showTitle = title;
}

const raminForEx3 = new StudentsForEx3('Ramin', 11, 16);

function logsForEx3() {
    console.log(raminForEx3);
    console.log(raminForEx3.dogumTarixi());
    console.log(StudentsForEx3.showTitle);
    console.log("************");
};
logsForEx3()