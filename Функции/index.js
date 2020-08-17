/* 1 */
function pow(x, n) {
  for( var i = 2; i <= n; i++ ) {
    x *= n;
  }
  return x;
}

pow(3, 3);

/* 2 */

function minMax(x, y) {
  if( x < y) {
    return x;
  } else {
    return y;
  }
}

minMax(10, 5);
minMax(12, 20);

/* 3 */

function sign(x) {
  if (x < 0) {
    return  -1;
  } else if (x == 0) {
    return 0;
  } else {
    return 1;
  }
}

sign(-20);
sign(0);
sign(20);

function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
      break;
    case 2:
      return a * b;
      break;
    case 3:
      return a / b;
      break;
    default:
      return a + b;
  } 
}

calc(10, 5, 1);
calc(10, 5, 2);
calc(10, 5, 3);
calc(10, 5, 6);

/* 5 */

function digitN(k, n) {

}