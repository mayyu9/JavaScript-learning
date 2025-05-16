/*
Flatten Array of Array
Deep copy
*/

// Approach 1
let ar = [1, 2, [3,4,5], 6, [7,8,[9,10,11]], 12, 13];

let output = [];

function flatten(a){
    for(let i=0; i<a.length; i++ ){

        if(Array.isArray(a[i])){
            flatten(a[i])
        } else {
            output.push(a[i])
        }
    }

    return output;
}

console.log(flatten(ar));

// Approach 1 - space & time complexity of 0(n)


// Approach -2: using the Linked list

function flattenLL(array, result) {

    if(array.length === 0) return result;

    var head = array[0]; // grab first element;
    var rest = array.slice(1); // grab rest of elements starting from 1st index

    if(Array.isArray(head)){
        // as the head is array obj, so concat all the elements again
        return flattenLL(head.concat(rest), result);
    }
    result.push(head);
    return flattenLL(rest, result);
}

console.log( flattenLL(  [  [  [  1 ]  ] , [ [ 1 ] ], [ 1 ],  1 ],  [] )  )