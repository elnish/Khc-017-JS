// 1

var arr = ["Джаз", "Блюз"];
console.log(arr);

arr.push("Рок-н-Ролл");
console.log(arr);

arr.splice( arr.length - 2,  1, "Классика");
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Рэп", "Регги");
console.log(arr);

// 2
var arr2 = [5, 1, 4, 2, 3];
arr2.sort().reverse();

console.log(arr2);

// 3
function deleteEvenNumbers(array) {
  array = array.filter(function(value) {
    return value % 2 != 0;
  })
  return array
}
var arr3 = [1, 2, 3, 4, 5];
var arr3 = deleteEvenNumbers(arr3);
console.log(arr3); // [1, 3, 5]


// 4 

var arr4 = ["Tom", "Sam", "Bob"];

arr4 = arr4.map(function(value) {
  return '<li>' + value + '</li>'
})
console.log(arr4); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]

// 5 
function matrixToArray(matrix) {
  var newArr = [];
  newArr = matrix.reduce(function(accumulator, currentValue) {
    return newArr.concat(accumulator, currentValue)
  });
  return newArr;
}
var arr5 = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr5 = matrixToArray(arr5);
console.log(arr5); // [1, 2, 3, 4, 5, 6, 7, 8, 9]