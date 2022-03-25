'use strict';

// Example1 - Click
document.querySelector('h1').addEventListener('click', click);

function click(e) {
    console.log(e.target);
}