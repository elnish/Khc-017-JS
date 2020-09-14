'use strict';

// 1

function sumSliceArray(arr, first, second) {
    
   if ( isNaN(first) == true && isNaN(secons) == false ) {
      throw new Error ("First index isn't a number");
   } else if ( isNaN(first) == false && isNaN(second) == true  ) {
      throw new Error ("Second index isn't a number");
   } else if ( isNaN(first) == true && isNaN(second) == true  ) {
      throw new Error ("Both indexes aren't  numbers");
   } else if (first > arr.length ){
      throw new Error ("The first index aren't array's index");
   } else if (second > arr.length ){
      throw new Error ("The second index aren't array's index");
   } else{
      return arr[first - 1] + arr[second - 1];
   }
}


try {
    var sum = sumSliceArray( [1,2,3,4] , 1, 2 );
    console.log(sum);
} catch (error) {
    console.log(error.message);
}

try {
   var sum2 = sumSliceArray( [1,2,3,4] , 1, 8 );
   console.log(sum);
} catch (error) {
   console.log(error.message);
}

// 2

function sumSliceArray2(arr, first, second) {
    
   if ( isNaN(first) == true && isNaN(secons) == false ) {
      throw new Error ("First index isn't a number");
   } else if ( isNaN(first) == false && isNaN(second) == true  ) {
      throw new Error ("Second index isn't a number");
   } else if ( isNaN(first) == true && isNaN(second) == true  ) {
      throw new Error ("Both indexes aren't  numbers");
   } else if (first > arr.length ){
      throw new Error ("The first index aren't array's index");
   } else if (second > arr.length ){
      throw new Error ("The second index aren't array's index");
   } else{
        return arr[first - 1] + arr[second - 1];
    }
}

var array = [1, 30, 3, 90 ];
var arrLength = array.langth;


function isNumber(number) {
   if ( isNaN(number) == true || number > arrLength ) {
      number = 1;
   } 
   return number;
}

console.log(sumSliceArray2(array, isNumber(1), isNumber(2)));
