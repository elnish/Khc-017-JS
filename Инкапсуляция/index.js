"use strict";

// #1
function AudioPlayer(volume) {
  this.__volume = 0; 
  if (this.__volumeValid(volume)) {
     this.__volume = volume;
  }
}

AudioPlayer.prototype.__volumeValid = function (volume) {
  if (volume >= 0 && volume <= 100 ) {
     return true;
  } else {
     return false;
  }
};

AudioPlayer.prototype.getVolume = function () { 
  return this.__volume;
};

AudioPlayer.prototype.setVolume = function (volume) { 
  if (this.__volumeValid(volume)) {
     this.__volume = volume;
  }
};

// Единный геттер-сеттер
AudioPlayer.prototype.volume = function (volume) {
  if (volume === undefined) {
     return this.__volume;
  } else {
     if (this.__volumeValid(volume)) {
        this.__volume = volume;
     }
  }
};

var player = new  AudioPlayer(10);
console.log( player.getVolume() );
player.setVolume(100);
console.log( player.getVolume() );
// Единный геттер-сеттер
player.volume(33);
console.log( player.volume() );

// #2

// function Adder(firstNumber, secondNumber) {
//   this.__firstNumber = 0; 
//   this.__secondNumber = 0; 

//   if (this.__valueValid(firstNumber)) {
//     this.__firstNumber = firstNumber; 
//     .__calc
//   }

//   if (this.__valueValid(secondNumber)) {
//     this.__secondNumber = secondNumber; 
//   }
// }

// Adder.prototype.__valueValid = function (value) {
//   if ( isNaN(value) !== false ) {
//      return true;
//   } else {
//      return false;
//   }
// };

// Adder.prototype.result = 0;

// Adder.prototype.__calc = function(){
//   this.result = this.__firstNumber + this.__secondNumber;
//   return this.result;
// }



// Adder.prototype.volume = function (volume) {
//   if (volume === undefined) {
//      return this.__volume;
//   } else {
//      if (this.__volumeValid(volume)) {
//         this.__volume = volume;
//      }
//   }
// };
