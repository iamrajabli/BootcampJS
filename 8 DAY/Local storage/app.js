// Local storage
// Local storage'in session storage'dən fərqi - Locala əlavə edilən məlumatı sadəcə əllə silmək olar amma sessiona əlavə edilən məlumat brauzer bağlandıqda öz özünə silinir.
// Example 1 - setItem | getItem

localStorage.setItem('newLocal', JSON.stringify(['New local'])); // Məlumat daxil etmə
console.log(JSON.parse(localStorage.getItem('newLocal'))); // Məlumatı çağırma

// JSON.stringify - yazılan məlumatı olduğu kimi locala göndərir.
// JSON.parse - JSON.stringify ilə əlavə edilən məlumatı olduğu kimi çağırır.


// Example 2 - removeItem / clear();

localStorage.setItem('oldLocal', JSON.stringify(['Old local!'])); // Məlumat daxil etmə
localStorage.removeItem('oldLocal'); // seçilən localı silir
localStorage.clear(); // bütün localı seçir