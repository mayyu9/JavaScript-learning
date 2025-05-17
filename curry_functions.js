// function add(a){
//   return function(b){
//     return a+b;
//   }
// }

function add(a,b){
        var ddd = function (b){return a+b;};
        if(typeof b =='undefined'){
            return ddd;
        }else{
            return ddd(b);
        }
    }


console.log('add: ',add(2)(3));
console.log('add1: ',add(4,3));

function mul(a,b){
  var mul1 = function(b){return a*b};
  if(typeof b == 'undefined'){
    return mul1;
  }else{
    return mul1(b)
  }
}

console.log('mul: ',mul(2)(3));
console.log('mul1: ',mul(4,3));

// currying example. currying works because of clouser
function sum(x) {
  return function(y) {
    return x+y;
  }
}

console.log(sum(5)(10))

// this not an example of currying. 
// currying is only when the function takes only one argument at a time.
// this is concept of Partial application
function multiply(a) {
  return (b,c) => a*b*c
}
console.log(multiply(2,(4,5)));

// use cases of currying
