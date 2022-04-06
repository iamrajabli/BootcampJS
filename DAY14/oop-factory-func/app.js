'use strict';
// Object nədir? 
// Example 1

// Object literal
const hikmat = {
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

function logsForEx1() {
    console.log(hikmat["full-name"]);
    console.log(hikmat.hobbi[2]);
    console.log(hikmat.oxuduguYer());
    console.log(hikmat.qisaInfo());
    console.log("***********");
};

logsForEx1();

// Example 1'də hərşey normaldı amma əgər biz 1 person deyildə 500 person əlavə etmək istəsək? Onda deməli bir obyekt üçün 20 sətir kod yazdıqsa 500 üçün də 500*20 yazmalıyıq? Həm də bu qədər kod təkrarı? 

// DRY - Don't repeat yourself!

// Example 2 - factorial functions
function students(ad, soyad, yas, hobbi, universitet) {
    return {
        isim: ad,
        soyad: soyad,
        yas: yas,
        hobbi: hobbi,
        universitet: universitet,

        ozunuTanit: function() {
            return `Salam! Mənim adim ${this.isim}, ${this.yas} yashim var`;
        }
    }

}

// Faktoriyal funksiya sayəsində istədiyimiz qədər person istehsal edə bilərik. Bu funksiyanı zavod kimi fikirləşə bilərik
function logsForEx2() {
    const amin = students('Amin', 'Farajov', 28, ['kitab', 'velosiped'], 'ATU');
    console.log(amin.ozunuTanit());
    console.log("***********");
}
logsForEx2();