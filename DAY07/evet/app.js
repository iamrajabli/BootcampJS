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

// Example 4 - mouseup [basıb buraxdıqda]
document.querySelector('h1').addEventListener('mouseup', mouseup);

function mouseup(e) {
    console.log(e.target);
}

// Example 5 - mouseenter [üstünə gəldikdə]
document.querySelector('h1').addEventListener('mouseenter', mouseenter);

function mouseenter(e) {
    console.log(e.target);
}

// Example 6 - mouseout [üstündən çəkdikdə]
document.querySelector('h1').addEventListener('mouseout', mouseout);

function mouseout(e) {
    console.log(e.target);
}

// Example 7 - mouseover [üstünə gəldikdə]
document.querySelector('h1').addEventListener('mouseover', mouseover);

function mouseover(e) {
    console.log(e.target);
}

// Example 8 - mouseleave [üstünə gəldikdə]
document.querySelector('h1').addEventListener('mouseleave', mouseleave);

function mouseleave(e) {
    console.log(e.target);
}