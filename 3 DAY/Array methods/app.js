'use strict';

let personNames = ['Hikmat', 'Nail', 'Yusif'];

// Bəzi önəmli metodlar
// Example 1
// toString - mətn kimi ekrana çıxarır. Hər veriləndən sonra vergül qoyulur. 
console.log(personNames.toString());

// Example 2
// join - vergüllə deyildə istədiyimiz simvolla ekrana çıxara bilirik.
console.log(personNames.join(" _   "));

// Example 3
// Index nömrəsini yazar deyil, ən son indeksdən sonraki indexə verilən əlavə etmə
console.log(personNames.push("Rajab")); // Push massivin sonuncu elementinin indeksi + 1 dir.
console.log(personNames.join(" , "));

// Example 4 
// Sonuncu elementin çıxarılması
let deletedName = personNames.pop(); // pop sonuncu elementdir. Yəni;
console.log(deletedName);
console.log(personNames.join(" , "));

// Example 5
// Massivi sola sürüşdürmək. Yəni birinci elementin silmək
personNames.shift();
console.log(personNames);

// Example 6
// Massivi sağa sürüşdürərək solunda açılan yerə element əlavə etmək
personNames.unshift("Yeni ad");
console.log(personNames);

// Example 7
// Massivin istədiyin elementini silmə
// Sildikdə indeks nömrəsi qalır. Sadəcə sildiyi yer boş olaraq işarələnir
delete personNames[1];
console.log(personNames);

// Example 8 
// Splice istifadəsi
// İlk parametr hansı indeksdən başlayacağını göstərir. İkinci parametr başlanğıc nöqtəsindən hansı indeksə qədər siləcəyini göstərir. Üçüncü parametr isə nə əlavə edəcəyini göstərir. 
// İlk iki parametr yeni bir dəyişkən yaradır və üçüncü parametr o dəyişkənə uyğun işləyir. Yəni;
let newArr = [1, 2, 3, 4, 5, 6];
let shorArr = newArr.splice(5, 1, '20');
console.log(newArr);
console.log(shorArr); // 6

// Example 9
// Concat istifadəsi
// İki massivi birləşdirir və yeni dəyişkənə atır. Yəni;
let twoArray = newArr.concat(personNames);
console.log(twoArray);

// Example 10
// Slice istifadəsi
// İstədiyin aralıqdan elementləri seçib bir dəyişkən yaradır
let threeArr = twoArray.slice(1, 6);
console.log(threeArr);