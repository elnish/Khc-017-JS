/* 1 */

function addTwoDays(date) {
  var day = date.getDate();
   date.setDate( day + 2);
   return date;
}


var currentDate = new Date();
addTwoDays(currentDate);
console.log( currentDate  );