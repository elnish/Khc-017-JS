/* 1 */

var a = 25;
var b = 3;

do {
  a  -= b;
} while ( a >= b );

console.log(a);

/* 2 */
var n = 20;

while( (n / 10 ) > 0) {
  console.log( n % 10 );
  n = (n - n % 10) / 10;
}



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
var arr = [];
var sum2 = 0;
for( var i = 0; ; i++ ){
    arr[i] = Number( prompt('Enter the number', '') );
    if (arr[i] == '' || arr[i] == undefined || isNaN( arr[i] ) == true) {
      break;
    }  
}

for( var i = 0; i < arr.length; i++ ) {
  sum2 += arr[i];
}

console.log( arr, sum2 );

/* 6 */
var x = 2;
var y = 5;

for (var i = x; i < y; i++ ) {
 	
  for(var k = x; k <= i; k++) {
  	console.log(i);
  }
}