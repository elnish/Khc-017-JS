'use strict';

//1
function Figure() {
   this._x = 0;
   this._y = 0;
}

Figure.prototype.getX = function () {
   return this._x;
};
Figure.prototype.getY = function () {
   return this._y;
};

Figure.prototype.setX = function (x) {
   this._x = x;
};
Figure.prototype.setY = function (y) {
   this._y = y;
};

function Rectangle(d) {
   Figure.call(this);
   this._d = d;
}


Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getDiagonal = function () {
   return this._d;
};

Rectangle.prototype.setDiagonal = function (d) {
   this._d = d;
};

Rectangle.prototype.info = function () {
   return "Center " + [this.getX(), this.getY()] + ", diagonal - " + this.getDiagonal();
};

function Circle(radius) {
   Figure.call(this);
   this._radius = radius;
}

Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getRadius = function () {
   return this._radius;
};

Circle.prototype.setRadius = function (radius) {
   this._radius = radius;
};

Circle.prototype.info = function () {
   return "Center " + [this.getX(), this.getY()] + ", radius - " + this.getRadius();
};


var rect = new Rectangle(10);
console.log(rect.getDiagonal());
rect.setX(10);
rect.setY(10);
rect.setDiagonal(15);
console.log(rect.info());


var circle = new Circle(20);
console.log(circle.getRadius());
circle.setX(0);
circle.setY(0);
circle.setRadius(40);
console.log(circle.info());


//2

function Square(side) {
   this._side = side;
}

Square.prototype.setSide = function (side) {
   this._side = side;
};

Square.prototype.getSide = function () {
   return this._side;
};

Square.prototype.getPer = function () {
   return (this._side + this._side) * 2;
};

var square = new Square(20);
console.log(`square p - ${square.getPer()}`);

function Cube() {
   Square.call(this);
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

// 2.1
Cube.prototype.getPer = function () {
   return this._side * 12;
};

// 2.2
Cube.prototype.getPerimetr = function () {
   return Square.prototype.getPer.call(this) * 3;
};

var cube = new Cube();
cube.setSide(25);
console.log(cube.getPer());
console.log(cube.getPerimetr());

