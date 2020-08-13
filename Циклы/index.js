/* 1 */

var a = 25;
var b = 3;

do {
  a  -= b;
} while ( a >= b );

console.log(a);

/* 2 */
var n = 10;


/* 3 */

var d = 2;
var e = 30;
var sum = 0;

for ( i = d; i <= e; i++ ) {
  sum += i;
}

console.log(sum);

/* 4 */
var num = 2,
rez = 1; 

for (var i = 1; i <= num; i++) { 
	rez *= i; 
}

console.log(rez);

/* 5 */

var arr = [],
value, 
sum2 = 0;

while ( value != '' ) {
    value = prompt('Enter the number', '');
    if( value != '' ) {
        arr.push( Number(value) );
    } 
}

for(var i = 0; i < arr.length; i++ ) {
  sum2 += arr[i];
}

console.log(arr, sum2);

/* 6 */
var x = 2;
var y = 5;

var x = 2;
var y = 5;

for (var i = x + 1; i <= y; i++ ) {
 	
  for(var k = 0; k < i; k++) {
  	console.log(i);
  }
}