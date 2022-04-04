'use strict';
// Constructor anlayışı və constructor function
// Example 1 
// Faktoriyal funksiya yerinə konstruktor funksiya yaza bilərik. 
function Person(ad, soyad, yas) {
    // this = Person. Bəs niyə Person yox this yazıram? Əgər nəvaxtsa funksiyanın adı dəyişərsə və Person yazmışamsa xəta alacam amma this yazmışamsa avtomatik yeni ada bərabər olacaq.
    this.ad = ad;
    this.soyad = soyad;
    this.yas = yas;
    this.dogumIli = function() {
        return 2022 - this.yas;
    }
}

// new - hikmat adında yeni obyekt yaratdı və return olmadan funksiyanı çağırdı. + this keywordunu yaratdığı obyektə (hikmat) bağladı. Yəni this = hikmat.
const hikmat = new Person('Hikmat', 'Rajabli', 22);
const ali = new Person('Ali', 'Rajabli', 24);

function logsForEx1() {
    console.log(hikmat);
    console.log(hikmat.dogumIli());
    console.log(ali);
    console.log(ali.dogumIli());
    console.log("********");
}