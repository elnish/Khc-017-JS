/* 1 */
function createArrayIterator(array) {
  var counter = 0;
  function itrArr() {
    return  array[counter++]; 
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

  function setFirstSide() {
    if ( typeof(a) !== 'number' ||  a < 0 ) {
      return firstSide = 'first parament is not a number or 0'
    } else {
      return firstSide = a;
    }
  }

  function setSecondSide() {
    if ( typeof(b) !== 'number' ||  b < 0 ) {
      return secondSide = 'first parament is not b number or 0'
    } else {
      return secondSide = b;
    }
  }
   
  function p() {
    setFirstSide();
    setSecondSide();
    return 2 * (firstSide + secondSide)
  }

  function s() {
    setFirstSide();
    setSecondSide();
    return firstSide * secondSide
  }

  return [  p(), s(), ];
}

var calc = rect(10, 15);
console.log( 'Периметр = ' + calc[0], 'Площадь = ' + calc[1] );

var calc2 = rect(10, '15');
console.log( 'Периметр = ' + calc2[0], 'Площадь = ' + calc2[1] );