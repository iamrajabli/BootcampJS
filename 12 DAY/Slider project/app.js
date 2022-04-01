'use strict';
let models = [{
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
    },
    {
        name: 'Volvo S60',
        image: 'img/bmw.jpg',
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
    },
];

let sliderLength = models.length;
let index = 2;
let settings = {
    duration: '1000',
    random: false
}
let interval;

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
    index++;
    showSlider(index);
});

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    index--;
    showSlider(index);
});


function showSlider(i) {
    index = i;

    if (i < 0) {
        index = sliderLength - 1;
    }
    if (i > sliderLength - 1) {
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
}

function init(settings) {
    let prev;
    interval = setInterval(function() {
        if (settings.random) {
            // Random rəqəm və təkrarlanmama kontrolu
            prev = index;
            do {
                index = Math.floor(Math.random() * sliderLength);
            } while (index == prev);

            showSlider(index);

        } else {
            index++;
            showSlider(index)
            console.log(index);
        }
    }, settings.duration);

}

init(settings);