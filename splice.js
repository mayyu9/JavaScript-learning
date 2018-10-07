// splice:
//
// Argument 1: Index, Required. An integer that specifies at what position to add /remove items, Use negative values to specify the position from the end of the array.
//
// Argument 2: Optional. The number of items to be removed. If set to 0(zero), no items will be removed. And if not passed, all item(s) from provided index will be removed.
//
// Argument 3…n: Optional. The new item(s) to be added to the array.


var array=[1,2,3,4,5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.

console.log(array);
// shows [1, 2], original array altered.

var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]

console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.

console.log(array2);
// shows [6,7,9,0]

var array3=[11,12,13,14,15];
console.log(array3.splice(2,1,"Hello","World"));
// shows [13]

console.log(array3);
// shows [11, 12, "Hello", "World", 14, 15]

           -5 -4 -3 -2 -1
            |  |  |  |  |
var array4=[16,17,18,19,20];
             |  |  |  |  |
             0  1  2  3  4

console.log(array4.splice(-2,1,"me"));
// shows  [19]

console.log(array4);
// shows [16, 17, 18, "me", 20]


//If Argument(1) is NaN, it is treated as if it were 0.

var array5=[21,22,23,24,25];
console.log(array5.splice(NaN,4,"NaN is Treated as 0"));
// shows [21,22,23,24]

console.log(array5);
// shows ["NaN is Treated as 0",25]

//If Argument(2) is less than 0 or equal to NaN, it is treated as if it were 0.

var array6=[26,27,28,29,30];
console.log(array6.splice(2,-5,"Hello"));
// shows []

console.log(array6);
// shows [26,27,"Hello",28,29,30]

console.log(array6.splice(3,NaN,"World"));
// shows []

console.log(array6);
// shows [26,27,"Hello","World",28,29,30]

//If Argument(1) or Argument(2) is greater than Array’s length, either argument will use the Array’s length.

var array7=[31,32,33,34,35];
console.log(array7.splice(23,3,"Add Me"));
// shows []

console.log(array7);
// shows [31,32,33,34,35,"Add Me"]

console.log(array7.splice(2,34,"Add Me Too"));
// shows [33,34,35,"Add Me"]

console.log(array7);
// shows [31,32,"Add Me Too"]
