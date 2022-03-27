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

// Example 3 - task

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    if (input.value === '') {
        alert('Empty!');
        return;
    }
    let inputArr;
    if (localStorage.getItem('input') === null) {
        inputArr = [];
    } else {
        inputArr = JSON.parse(localStorage.getItem('input'));
    }

    inputArr.push(input.value);
    localStorage.setItem('input', JSON.stringify(inputArr));

    input.value = '';

})