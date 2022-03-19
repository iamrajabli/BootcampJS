'use strict';

let dayOfWeek = 4;


// Switch Example 1

switch (dayOfWeek) {
    case 1:
        console.log('Bazar ertesi');
        break;

    case 2:
        console.log('Cersembe axsami');
        break;

    case 3:
        console.log('Cersembe');
        break;

    case 4:
        console.log('Cume axsami');
        break;

    case 5:
        console.log('Cume');
        break;

    case 6:
        console.log('Shenbe');
        break;

    case 7:
        console.log('Bazar');
        break;

    default:
        console.log('Bele gun yoxdur!');
}

// Switch Example 2 
// Switch Break nəyə lazımdır? - V8 engine programı yuxarıdan aşağıya oxuyarkən dayOfWeek'in uyğun gələn sətrindən başlayarak gördüyü birinci breakın şərti də daxil olmaqla ekrana yazdırır. Əgər dayOfWeek'in sətirində  break varsa sadəcə o sətiri oxuyur. Əgər dayOfWeek'in sətirindən sonra break olmayan sətir varsa onları yenə də oxumur.

switch (dayOfWeek) {
    case 1:
        console.log('Bazar ertesi');

    case 2:
        console.log('Cersembe axsami');

    case 3:
        console.log('Cersembe');

    case 4:
        console.log('Cume axsami');
        break;

    case 5:
        console.log('Cume');
        break;

    case 6:
        console.log('Shenbe');
        break;

    case 7:
        console.log('Bazar');
        break;

    default:
        console.log('Bele gun yoxdur!');
}