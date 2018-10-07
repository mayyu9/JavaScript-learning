// The slice() method can take 2 arguments:
//
// Argument 1: Required. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array.
//
// Argument 2: Optional. An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array.

var array=[1,2,3,4,5]
console.log(array.slice(2));
// shows [3, 4, 5], returned selected element(s).

console.log(array.slice(-2));
// shows [4, 5], returned selected element(s).
console.log(array);
// shows [1, 2, 3, 4, 5], original array remains intact.

var array2=[6,7,8,9,0];
console.log(array2.slice(2,4));
// shows [8, 9]

console.log(array2.slice(-2,4));
// shows [9]

console.log(array2.slice(-3,-1));
// shows [8, 9]

console.log(array2);
// shows [6, 7, 8, 9, 0]

// If either argument is NaN, it is treated as if it were 0.
var array3=[11,12,13,14,15];
console.log(array3.slice(NaN,NaN));
// shows []

console.log(array3.slice(NaN,4));
// shows [11,12,13,14]

console.log(array3);
// shows [11,12,13,14,15]

// If either argument is greater than the Array’s length, either argument will use the Array’s length
var array4=[16,17,18,19,20];
console.log(array4.slice(23,24));
// shows []

console.log(array4.slice(23,2));
// shows []

console.log(array4.slice(2,23));
// shows [18,19,20]

console.log(array4);
// shows [16,17,18,19,20]
