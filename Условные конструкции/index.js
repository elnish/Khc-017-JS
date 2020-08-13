/* 1 */
x = 0;

if( x > 0) {
	x += 1;
	console.log(x + ' положительное');
} else if ( x < 0 ) {
	x -= 1;
	console.log(x + ' отрецательное');
} else {
	x = 10;
  console.log(x + ' ноль');
}

/* 2 */
var y = 45;

switch (true) {
	case y == 0:
		console.log("нулевое число");
    break;
	case y % 2 == 0 && y > 0:
		console.log("положительное четное числ");
    break;
  case y % 2 == 0 && y < 0:
		console.log("отрецательное четное число");
    break;
  case y % 2 != 0 && y > 0:
		console.log("положительное нечетное число");
    break;
  case y % 2 != 0 && y < 0:
		console.log("отрецательное нечетное число");
		break;
} 

/* 3 */
var a = b = c = 2, d = 3;

if ( a == b && b == c && c != d ) {
	console.log('4');
} else if ( a == b && b == d && d != c ) {
	console.log('3');
} else if ( a == c && c == d && d != b ) {
	console.log('2');
} else if ( b == c && c == d && d != a ) {
	console.log('1');
} else {
	console.log('все равны');
}

/* 4 */
var k = 10;

switch (k) {
	case 1:
		console.log("плохо");
    break;
	case 2:
		console.log("неудовлетворительно");
    break;
  case 3:
		console.log("удовлетворительно");
    break;
  case 4:
		console.log("хорошо");
    break;
  case 5:
		console.log("отлично");
		break;
  default:
  	console.log("ошибка");
} 
