'use strict';

/* 1 */

function mul(...rest) {

  let count = 1;
  let counter = 0;
  
  rest.forEach(el => {
      if ( typeof(rest[el]) === "number" ) {
        count *= rest[el];
        counter++;
      }
  });
  
  if ( counter == 0 ) return 0;
    
  return count;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

/* 2 */

let obj = {
  name: "obj",
  print: function () {
     let str = () => console.log(this.name);
     return str;
  }
};

function multiCaller(func, count) {
  for (let i = 0; i < count; i++) {
     func();
  }
}

multiCaller(obj.print(), 3);  // "obj", 3 раза

/* 3 */

let server = {
  data: 0,
  convertToString: function (callback) {
    callback( () =>  this.data + ""  );
  }
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
     this.server.data = data;
     this.server.convertToString(this.notification());
  },
  notification: function () {
    return ( (callback) =>  this.result = callback() );
  }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"