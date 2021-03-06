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
});

// Example 2 
console.log(node.firstChild); // Burda da eynən nodeList məntiqidir. 
console.log(node.firstElementChild); // Amma burda hər hansı sətir sayılmır və normal şəkildə ilk element ekrana çıxır.

// first olduğu üçün last da var :)
console.log(node.lastChild);
console.log(node.lastElementChild);
console.log("************");

// Example 3  - children
// children bir başa teqlərin övladılarını göstərir. 
let children = document.querySelector('ul');
for (let i = 0; i < children.children.length; i++) {
    console.log(children.children[i]);
}

// Example 4 - nextElementSibling, previousElementSibling, parentElement
console.log(children.children[1].nextElementSibling);
console.log(children.children[1].previousElementSibling);
console.log(children.children[1].parentElement);