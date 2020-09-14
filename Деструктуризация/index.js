'use strict';

// 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// 2
let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray", 
   fourth: "Bob"
};

let { first: f, third: a, fifth = "Name №5" } = names;
console.log(f); // "Tom"
console.log(a); // "Ray"
console.log(fifth); // "Name №5"

// 3
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

