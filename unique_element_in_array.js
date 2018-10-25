var arr = [1,2,3,1,4,2,1,4];
var arr2 = [1,2,3,1,4,2,1,4,3];

// calcaute the frequqency for each element in the array and return and object with key value
function calFrequency(arr){
  var obj = {}
  var len =arr.length;
  for (var i = 0; i < len; i++) {
   if (obj[arr[i]]) {
      obj[arr[i]]++;
   }
   else {
      obj[arr[i]] = 1;
   }
  }
  return obj;
}

 // iterate over the object and check if value for key is 1, then return that key key element.
function unquieValue(freq){
  for (var key in freq) {
    if(freq[key] === 1)
      //console.log(typeof(freq[key])+ " "+freq[key]+" "+key );
      return key;
  }
}

// based on the return from uniqueValue, show the key value else show null.
function abc(arr){
  var freq = calFrequency(arr);

  var uniqueValue= unquieValue(freq);

  if(uniqueValue)
    return uniqueValue;
  else
    return null;
}


console.log(abc(arr2));

//console.log(freq);

//reduce

// var arr = ['ab','pq','mn','ab','mn','ab'];

// occurrences = arr.reduce(function(occ, item) {
//   occ[item] = (occ[item] || 0) + 1;
//   return occ;
// }, {});

// console.log(occurrences);        // {ab: 3, pq: 1, mn: 2}
// console.log(occurrences['mn']);  // 2

// console.log(calFrequency(arr));
