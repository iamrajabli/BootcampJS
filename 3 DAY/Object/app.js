'use strict';
// Object massiv anlayışı

// Example 1
let Hikmat = {
    name: 'Hikmat',
    surname: 'Rajabli',
    birthOfYear: 1999,
    height: 185,
    weight: 85,
    ageCal: function() { // Objectin içində funksiya yazmaq olar.
        return 2022 - this.birthOfYear; // Objectin içində ona aid olan açar sözü çağırmaq üçün "this" mütləq olmalıdır. Və ya Example 2'də daha fərqli istifadə görmək olar.
    }
}
console.log(Hikmat.ageCal());