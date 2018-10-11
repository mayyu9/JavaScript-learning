function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}


console.log(palindrome('12321'));

//method 2:
function pallindrome(str) {
  if(str === str.split('').reverse().join('')))
    return true;
return false;
}
