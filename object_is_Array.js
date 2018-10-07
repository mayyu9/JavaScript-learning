function objectIsArray(obj){
  return Object.prototype.toString.call(obj) === '[object Array]';
}

var a = {};
var b =[];

console.log(objectIsArray(a));
console.log(objectIsArray(b));


//Method 2:

console.log(Array.isArray(a))
console.log(Array.isArray(b))
