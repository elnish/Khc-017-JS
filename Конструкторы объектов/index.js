"use strict";

function MP3(model, memory) {
    this.model = model;
    this.memory = memory;
    this.play = false;
    this.describe = function() {
      console.log('MP3 фирмы ' + this.model + ',  встроенная память ' + this.memory + 'GB');
    };
    this.ternOn = function() {
      this.play == true;
      console.log('play');
    };
    this.ternOff = function() {
      this.play == false;
      console.log('stop');
    }
};

var sony = new MP3('Sony', 4);
sony.describe();
sony.ternOn();
sony.ternOff();

