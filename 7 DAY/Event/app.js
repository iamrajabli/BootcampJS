'use strict';

// Example 1 - click [1 dəfə basdıqda]
document.querySelector('h1').addEventListener('click', click);

function click(e) {
    console.log(e.target);
}

// Example 2 - dblclick [2 dəfə basdıqda]
document.querySelector('h1').addEventListener('dblclick', dblclick);

function dblclick(e) {
    console.log(e.target);
}

// Example 3 - mousedown [basıb saxladıqda]
document.querySelector('h1').addEventListener('mousedown', mousedown);

function mousedown(e) {
    console.log(e.target);
}