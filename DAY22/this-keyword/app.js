'use strict';
// Example 1

let list = {
    category: 'phone',
    names: ['samsung', 'iphone', 'realme', 'xiaomi'],
    call: function() { // call metodu yeni bir context yaradib.
        console.log(this); // list array
        let self = this; // list arrayinin yeni deyiskene atanmasi
        this.names.map(function(name) { // map metodu yeni bir context yaradib. 
            // console.log(this); // undefined
            // console.log(self); // list array
            console.log(name, self.category);

            // ona gore de call metodunun icinde istifade edilen this ile map metodunun icinde istifade olunan this eyni deyil.

            // Bunun iki helli var: 
            // 1. call funksiyasi icinde let self = this etmek
            // 2. map funksiyasinin sonuna .bind(this) artirmaq
        })
    }
}

// Example 2
let list2 = {
    category: 'phone',
    names: ['samsung', 'iphone', 'realme', 'xiaomi'],

    normalfunc: function() {
        console.log(this); // ozunden yuxaridaki thise baxir 

        function normalfunc_2() {
            console.log(this); // ozunden yuxaridaki scopenin thisine baxir amma onun thisi yoxdu
        }
        normalfunc_2();
    },

    arrowfunc: _ => {
        console.log(this); // ozunden 2 dene yuxari scopedeki thise baxir
    },
}
list2.normalfunc();
list2.arrowfunc();