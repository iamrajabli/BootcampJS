'use strict';

// Example 1 - Click
document.querySelector('h1').addEventListener('click', click);

function click(e) {
    console.log(e.target);
}

// Example 2 - Dblclick
document.querySelector('h1').addEventListener('dblclick', dblclick);

function dblclick(e) {
    console.log(e.target);
}