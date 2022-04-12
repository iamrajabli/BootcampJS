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