/*
    Memoization an optimization technique that can help make heavy computation processes more efficient.

    it does this by storing computation results in cache and retrieving that same information from the cache the next time it's needed
    instead of computing it again.
*/

/*
    memoized function should be a pure function.
    concepts required for memoization
    1. closures
    2. Higher Order Function (hof)
*/

// pure function
function add(x) {
    return x+10;
}

// hof + closure
const memoHOF = (func) => {
    // cache variable
    let cached = {}

    return function(x) { 
        if(cached[x]) {
            console.log('cached result');
            return cached[x];
        } else {
            console.log('calculating the result..');
            const res = func(x);
            cached[x] = res;
            return res;
        }
    }
}

const calculate = memoHOF(add);

console.log(calculate(10));

console.log(calculate(10));


// n arguments
// pure function
function add(...data) {
    return data.reduce( (total, curr) => total+curr);
}

// hof + closure
const memoHOF2 = (func) => {
    // cache variable
    let cached = {}

    return function(...args) { 
        const keys = JSON.stringify(args);

        if(cached[keys]) {
            console.log('cached result');
            return cached[keys];
        } else {
            console.log('calculating the result..');
            const res = func(...args);
            cached[keys] = res;
            return res;
        }
    }
}

const calculate2 = memoHOF2(add);

console.log(calculate2(10, 20, 30));

console.log(calculate2(10, 20, 30));