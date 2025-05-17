/*
    A function is said to be pure function. 
    if the otuput returned from the function is same everytime we call with the same input
    if is doesn't rely on external varaibles or modify the global variables is called pure function
    even there shouldn't be console.log or api's calls from the function
    function should be predictable
*/

function pureFn(x,y){
    return x+y
}