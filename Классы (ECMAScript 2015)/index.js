'use strict';

// 1

class MP3 {
    constructor(model) {
       this._model = model;
       this._state = 'stop';
       this._volume = 0;
    }
    getModel() {
       return this._model;
    }
    setName(model) {
       this._model = model;
    }
    display() {
       console.log(this._model);
    }
    ternOn() {
        return this._state = 'play';
    }
    ternOff() {
        return this._state = 'stop';
    }
    louder() {
        if( this._volume !== 100 ) {
            this._volume += 20;
        } 
    }
    quieter() {
        if( this._volume > 0 ) {
            this._volume -= 20;
        } 
    }
    getVolume() {
        return this._volume;
    }
 }

let sony = new MP3('Sony');
sony.display();
console.log(sony.ternOn());
sony.louder();
sony.louder();
sony.louder();
console.log(sony.getVolume());
sony.quieter();
sony.louder();
console.log(sony.getVolume());

// 2
class Figure {
    constructor(x, y) {
        this._centerX = x;
        this._centerY = y;
    }
    get centerX() {
        return this._centerX;
    }
    get centerY() {
        return this._centerY;
    }
    set centerX(x) {
        this._centerX = x;
    }
    set centerY(y) {
        this._centerY = y;
    }
}



class Circle extends Figure {
    constructor(centerX, centerY, radius) {
        super(centerX, centerY);
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
      
    info() {
        console.log(`Circle with center(x: ${this.centerX}, y: ${this.centerY}) and radius: ${this.radius}px `);
    }
}

class Rectangle extends Figure {
    constructor(centerX, centerY, diagonal) {
        super(centerX, centerY);
        this._diagonal = diagonal;
    }
    get diagonal() {
        return this._diagonal;
    }
    set diagonal(diagonal) {
        this._diagonal = diagonal;
    }
      
    info() {
        console.log(`Rectangle with center(x: ${this.centerX}, y: ${this.centerY}) and diagonal: ${this.diagonal}px `);
    }
}

let circle = new Circle(3, 10, 40);
circle.info();

let rectangle = new Rectangle(0, 0, 100);
rectangle.info();

// 3

class Square {
    constructor(side) {
        this._side = side;
    }
    set side(side) {
        this._side = side;
    }
    get side() {
        return this._side;
    }
    getP() {
        return (this._side + this._side) * 2;
    }
}

// 3.1
// class Cube extends Square {
//     constructor(side) {
//         super(side);
//     }
//     getP(){
//         return this._side * 12;
//     }
// }

// 3.2

class Cube extends Square {
    constructor(side) {
        super(side);
    }
    getP() {
        return super.getP() * 3;
    }
}


const cube = new Cube(20);
console.log(cube.getP());

// 4

class Circle4 {
    constructor(x, y, radius) {
        this._centerX = x;
        this._centerY = y;
        this._radius = radius;
    }
    get centerX() {
        return this._centerX;
    }
    get centerY() {
        return this._centerY;
    }
    get radius() {
        return this._radius;
    }
    set centerX(x) {
        this._centerX = x;
    }
    set centerY(y) {
        this._centerY = y;
    }
    set radius(radius) {
        this._radius = radius;
    }


    getLength() {
        return Math.floor(2 * Math.PI * this._radius);
    }
    
    static getLength(radius) {
        return Math.floor(2 * Math.PI * radius);
    }

    copy() {
        return new Circle4(this._centerX, this._centerY, this._radius);
    }

    static copy(centerX, centerY, radius) {
        return new Circle4(centerX, centerY, radius);
    }

    isPointInCircle(x, y) {
        if( x < this._centerX + this._radius && x > this._centerX - this._radius && 
            y < this._centerY + this._radius && y > this._centerY - this._radius) {
            return true;
        } else {
            return false;
        }

    }

    toString() {
        return `${this._centerX} ${this._centerY} ${this._radius}`;
    }
}

const circ = new Circle4(10, 10, 40);

console.log(circ.getLength());
console.log(circ.isPointInCircle(0, 0));
console.log(circ.isPointInCircle(-200, -100));
console.log(circ.toString());