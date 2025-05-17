// input = "I Love Javascript";
// output = "tpircsavaJ evoL I"


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

//mehtod 2
function rev(str){
  let str1 = str.split('').reverse().join('');
  return str1;
}


//method 3:

function rev(str){
  var str1 = str.split('');
  var len= str1.length;
  var tmp;
  for(let i=0; i< (len)/2; i++){
    tmp= str1[len-1-i]; // gets elemnts from last
    str1[len-1-i]=str1[i];
    str1[i]=tmp;
  }
  return str1.join('');

}

console.log(rev('hello'));
