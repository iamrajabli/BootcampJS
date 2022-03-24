'use strict';

// Biraz gəzək
// Example 1 

let node = document.querySelector('ul');

// ul teqləri arasında 4 ədəd li teqi olmasına baxmayarak chilNodes metodundan istifadə etdikdə 9 ədəd element olduğu görünür. 9 ədəd görünməsinin səbəbi li ləri yazarkən hamsının yeni sətirdə yazılmasıdır. Yəni əgər bütün li lər səliqəsiz şəkildə eyni sətirdə yazılsa 4 node olacaq. 
console.log(node.childNodes);

// Bir də nodların tipləri var. Bu tiplərə görə onları ayırd edə bilirik. 
// 1 = element
// 3 = text
// 8 = rəy sətiri
let childNodes = node.childNodes;
childNodes.forEach(element => { // ** NodeList olduqda array kimi davranır. 
    console.log(element.nodeType);
})