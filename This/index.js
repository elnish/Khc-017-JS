"use strict";

var calculator = {
  a: this.a,
  b: this.b,
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