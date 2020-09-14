/* 1 */

var string = "Login1,LOgin2,login3,loGin4";
var loginsArr = string.toLowerCase().split(',');

console.log(loginsArr);

/* 2 */
var str;
var rez = '';
var hasNumber = /\d/; //google

for ( let i = 0; ; i++ ) {
  str = String( prompt('Enter the text', ''));
  if (str != 'end' ) {
    r = r.concat(str);
  } else {
    break;
  }
  
}

if (hasNumber.test(rez)) {
  console.log('Numbers: ' + rez)
} else {
  console.log('No_Numbers: ' + rez)
}







