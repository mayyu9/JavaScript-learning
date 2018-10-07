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
