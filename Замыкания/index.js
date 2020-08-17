/* 1 */
function createArrayIterator(array) {
  var counter = 0;
  function itrArr() {
    counter++;
    return  array[counter - 1]; 
  }
  
  return itrArr;
  
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

/* 2 */
function rect(a, b) {
  var firstSide,
  secondSide;

 
    if ( typeof(a) !== 'number' ||  a < 0 ) {
       firstSide = 'first parament is not a number or 0'
       console.log(typeof(a))
    } else {
      firstSide = a;
      console.log(typeof(a))
    }

    if ( typeof(b) !== 'number'||  b < 0 ) {
       secondSide = 'second parametr is not a number or 0'
       console.log(typeof(b))
    } else {
       secondSide = b;
       console.log(typeof(b))
    }
  


  function p() {
    return 2 * (firstSide + secondSide)
  }

  function s() {
    return firstSide * secondSide
  }

  return [ p(), s(), ];
}

var calc = rect(10, 15);
console.log( 'Периметр = ' + calc[0], 'Площадь = ' + calc[1] );

var calc2 = rect(10, '15');
console.log( 'Периметр = ' + calc2[0], 'Площадь = ' + calc2[1] );