function format(data, type) {
  if( type == "number" ) {
    format = function() {
      return Number(data);
    }
  } else if( type == "boolean" ) {
    format = function() {
      return Boolean(data);
    }
  } else if( type == "string" ) {
    format = function() {
      return String(data);
    }
  }
}

var originFormat = format;
format('1', 'number');
console.log(format()); // 1
console.log(typeof format()); // 'number';
originFormat('Hello', 'boolean');
console.log(format()); // true
console.log(typeof format()); //'boolean'
originFormat(true, 'string');
console.log(format()); // 'true';
console.log(typeof format()); // 'string'