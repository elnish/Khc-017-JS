"use strict";

// #1
function mul() {

  var mul = 1,
  count = 0;

  for( var i = 0; i < arguments.length; i++ ) {
    if ( typeof(arguments[i]) === 'number' ) {
      mul *= arguments[i];
      count++;
    }
  }

  if( count === 0 ) {
    mul = 0;
  }

  return mul;
}
console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str', false, true)); // 0

// #2

var country = {
  name: "Украина",
  language: "украинский",
  capital: { 
     name: "Киев",
     population: 2907817,
     area: 847.66
  }
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

format.call(country, '<', '>'); // "<Украина>"
format.apply(country, ['[', ']']); // "[Украина]"
format.call(country.capital, '"', '"'); // ""Киев""
format.apply(country.capital, ['', '']); // "Киев"
