"use strict";

var calculator = {
  a: 1,
  b: 1,
  read: function() {
    this.a = Number(prompt("Enter the first number", ''));
    this.b = Number(prompt("Enter the second number", ''));
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());