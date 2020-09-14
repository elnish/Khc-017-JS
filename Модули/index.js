var rectangle = (function () {
  var firstSide;
  var secondSide;
  function parameter() {
     return (firstSide + secondSide) * 2;
  }
  function square() {
    return firstSide * secondSide;
 }
  return {
     setFirstSide: function (number) {
      if( isNaN( number ) !== true && number > 0 ) {
        firstSide = number;
      }
     },
     setSecondSide: function (number) {
        if( isNaN( number ) !== true && number > 0 ) {
          secondSide = number;
        }
     },
     parameter: function () {
        return parameter();
     },
     square: function () {
        return parameter();
     }
  }
}());
