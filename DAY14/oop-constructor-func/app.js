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


// Example 2
// Hər bir obyekt onu yaradan konstruktor funksiyasını çağıra bilər. 
const newArr = [];
const newFunc = function() {};
const newObj = {};

// Buradan da bəlli olur ki əslində array və funksiya da bir obyektdir.
function logsForEx2() {
    console.log(newArr.constructor);
    console.log(newFunc.constructor);
    console.log(newObj.constructor);
    console.log("********");
}

// Example 3
// Beləliklə aydın olur ki, hikmat.constructor = Person olduğu üçün, yəni hikmat obyektinin istehsalçısı Person zavodu olduğu üçün Person əvəzinə hikmat.constructor yazaraq yeni bir obyekt yaratmaq olur.
const randomGuy = new hikmat.constructor('Random', 'Randomov', 85);

function logsForEx3() {
    console.log(randomGuy);
    console.log(randomGuy.dogumIli());
    console.log("********");
}