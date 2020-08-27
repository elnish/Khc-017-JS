"use strict";

var rectangle = {
  x1: 0,
  x2: 20,
  y1: 10,
  y2: 0,
  
  toString: function () {
    return 'x1: ' + this.x1 + ', ' + 'y1: ' + this.y1 + ', ' + 'x2: ' + this.x2 + ', ' + 'y2: ' + this.y2;
  },
  
  valueOf: function () {
    var a = this.x2 - this.x1;
    var b = this.y1 - this.y2;

    return (a + b) * 2;
  }
  
};
  
console.log(String(rectangle)); 
  
console.log(Number(rectangle));