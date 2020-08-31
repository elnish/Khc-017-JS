"use strict";

// #1

function createMP3(model, memory) {
  return {
    model: model,
    memory: memory,
    play: false,
    describe: function() {
      console.log('MP3 фирмы ' + this.model + ',  встроенная память ' + this.memory + 'GB');
    },
    ternOn: function() {
      this.play == true;
      console.log('play');
    },
    ternOff: function() {
      this.play == false;
      console.log('stop');
    }
  
  }
};

var sony = createMP3('Sony', 4);
sony.describe();
sony.ternOn();
sony.ternOff();

// #2

function getArithmeticMean(obj) {
  return {
    object: obj,
    sum: function() {
      var sum = 0;
      var items = 0;
      for (var key in this.object) {
        sum += this.object[key];
        items++;
      }
      return Math.round(sum / items);
    }
  }
}


var salaries = {
  John: 100,
  Bill: 300,
  Mike: 250
};

var employees = getArithmeticMean(salaries);

console.log( employees.sum() );
