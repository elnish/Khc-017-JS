"use strict";

function MP3(name) {
  this.name = name;
  this.play = false;
  this.volume = 0;
}

MP3.prototype.getName = function () {
  console.log("MP3 " + this.name);
};

MP3.prototype.on = function () {
  this.play = true;
  return console.log("Play");
};

MP3.prototype.volumeOn = function () {
  return ++this.volume;
};

MP3.prototype.volumeOff = function () {
  return --this.volume;
};

var sony = new MP3("Sony");
sony.getName();
sony.on();
console.log(sony.volumeOn());
console.log(sony.volumeOn());
console.log(sony.volumeOn());
console.log(sony.volumeOff());