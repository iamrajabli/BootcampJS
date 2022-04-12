'use strict';
class Slider {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

}

class Models {
    constructor() {
        this.bmw = new Slider('Bmw 418d', 'img/bmw.jpg');
        this.mazda = new Slider('Mazda CX-3', 'img/mazda.jpg');
        this.volvo = new Slider('Volvo S60', 'img/volvo.jpg');
        this.skoda = new Slider('Skoda Superb', 'img/skoda.jpg');
    }
}

class Screen {
    constructor() {
        this.card__footer = document.querySelector('.card-footer').addEventListener('click', this.controlSlide.bind(this));
        this.card__img__top = document.querySelector('.card-img-top');
        this.allModels = new Models();
        this.models = [this.allModels.bmw, this.allModels.mazda, this.allModels.volvo, this.allModels.skoda];
        this.index = this.models.length - 1;
        this.settings = {
            mood: true,
            duration: 1000
        };
        this.interval(this.settings);
    }

    interval(settings) {
        if (settings.mood) {
            setInterval(function() {
                this.index++;
                this.showSlide(this.index);
            }.bind(this), settings.duration)

        }
    }

    controlSlide(e) {
        if (e.target.classList.contains('fa-arrow-circle-left')) {
            this.index--;
            this.showSlide(this.index);
        } else if (e.target.classList.contains('fa-arrow-circle-right')) {
            this.index++;
            this.showSlide(this.index);
        }
    }

    showSlide(i) {
        this.index = i;

        if (i < 0) {
            this.index = this.models.length - 1;
        }
        if (i > this.models.length - 1) {
            this.index = 0;
        }
        this.card__img__top.setAttribute('src', this.models[this.index].image);

    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Screen();
});