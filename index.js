/* Подключение */
// alert("Alena"); 

/* Переменные */
/* 1 */
var title;
title = "Variables";
console.log(title);
title = "Second title";
console.log(title);

/* 2 */
var a = 25, b = 10;
console.log('a = ' + a, 'b = ' + b);

a = b;
console.log('a = ' + a, 'b = ' + b);

/* Взаимодействие с пользователем */
/* var  someName = prompt('Enter your name', '');
alert(someName); */

/* Операции с переменными */
/* 1 */
var c = 5, s;
s = c * c;
console.log(c);

/* 2 */
var number = 36;
var k = parseInt(number / 10);
var g = number % (k * 10);
console.log('namber = ' + number, "десятки: " + k, "единицы: " + g);

/* 3 */
var d = 2, e = 5, f = 1;
console.log("d > 2 ? " + d > 2);
console.log("e <= 3 ? " + e <= 3);

/* 4 */
console.log("d < e < f ? " +  d < e && e < f);

/* 5 */
var j = 405;
 
console.log(j % 2 !== 0 && j > 100 && (j / 100) % 2 !== 0);

/* Преобразование данных */
var x = 1;
var y = 2;

var res1 = String(x) + y;
console.log(res1);
console.log(typeof res1); 

var res2 = Boolean(x) + String(y);
console.log(res2); 
console.log(typeof res2); 
var res3 = Boolean(x + y);
console.log(res3); 
console.log(typeof res3); 
var res4 = Number(x) - 'y';
console.log(res4); 
console.log(typeof res4);

/* Array */
var arr = [];
arr[0] = 12;
arr[1] = "string";
arr[2] = true;
arr[3] = null;
console.log("Length = " + arr.length);

var z = Number(prompt('Enter the number', ''));
arr[4] = z;
console.log(arr[4]);
