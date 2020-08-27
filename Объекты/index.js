"use strict";

// #1

var user = {};
user.name = 'Cris';
user.surname = 'Simons';

user.name = 'Brain';
console.log(user.name);

delete user.name;
console.log(user.name);

// #2

var car1 = new Object();
car1.model = 'Cadillac';
car1.speed = 200;
car1.run = function() {
  return console.log(car1.model + ' едет со скоростью ' + car1.speed);
}

car1.run();

var car2 = {};
car2['model'] = 'Cadillac';
car2['speed'] = 200;
car2['run'] = function() {
  return console.log(car2.model + ' едет со скоростью ' + car2.speed);
}

car2.run();

var car3 = {
  model: 'Cadillac',
  speed: 200,
  run: function() {
    return console.log(this.model + ' едет со скоростью ' + this.speed);
  }
}

car3.run();

// #3

var tv = {
  currentChannel: 1,
  nextChannel: function() {
    return ++this.currentChannel;
  },
  previousChannel: function() {
    return --this.currentChannel;
  },
  setChannel: function() {
    return this.currentChannel = 5;
  }
}

console.log( tv.currentChannel );
console.log( tv.nextChannel() );
console.log( tv.setChannel() );
console.log( tv.nextChannel() );
console.log( tv.previousChannel() );

// #4

var mp3 = {
  model: 'Sony',
  memory: '4 Gb',
  play: false,
  describe: function() {
    return 'MP3 фирмы ' + this.model + ',  встроенная память ' + this.memory;
  },
  ternOn: function() {
    this.play == true;
    return 'play'
  },
  ternOff: function() {
    this.play == false;
    return 'stop'
  }
}

console.log( mp3.describe() );
console.log( mp3.ternOn() );
console.log( mp3.ternOff() );

// #5

// var table = {
//   row: {
//     name: 'John',
//     age: 28,
//     experience: 1,
//     languages: ['Java', 'JavaScript', 'SQL']
//   },
//   row: {
//     name: 'Bill',
//     age: 30,
//     experience: 5,
//     languages: ['HTML', 'CSS', 'JavaScript']
//   },
//   row: {
//     name: 'Mike',
//     age: 32,
//     experience: 4,
//     languages: ['Python', 'SQL']
//   }
// }

var table = {
  column: {
    title: 'Name',
    items: ['John', 'Bill', 'Mike']
  },
  column: {
    title: 'Age',
    items: [28, 30, 32]
  },
  column: {
    title: 'Experience',
    items: [1, 5, 4]
  },
  column: {
    title: 'Languages',
    items: [['Java', 'JavaScript', 'SQL'], ['HTML', 'CSS', 'JavaScript'], ['Python', 'SQL']]
  }
}


// #6 
var obj1 = {};

var obj2 = {
  name: 'some'
}

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

console.log( isEmpty(obj1) );
console.log( isEmpty(obj2) );

// #7

var salaries = {
  John: 100,
  Bill: 300,
  Mike: 250
};

function sum(obj) {
  var sum = 0;
  var items = 0;
  for (var key in obj) {
     sum += obj[key];
     items++;

  }
  return Math.round(sum / items);
}

console.log( sum(salaries) );