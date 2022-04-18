'use strict';
// arrow functionla normal functionun esas ferqi: normal func yeni bir scope yaratdigi halda arrow func yaratmir. 
// Example 1

let list = {
    category: 'phone',
    names: ['samsung', 'iphone', 'realme', 'xiaomi'],
    call: function() { // call metodu yeni bir scope yaradib.
        console.log(this); // list array
        let self = this; // list arrayinin yeni deyiskene atanmasi
        this.names.map(function(name) { // map metodu yeni bir scope yaradib. 
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
list.call();