/* 
    Suppose you have a search input field that triggers API call to fetch search results as the user types.
    without debouncing, the API call would be made on every keystroke, causing excessive requests.
    Debouncing ensures that the API call is made only after the user has paused typing.
*/

/* 
    inorder to implement debounce, one should be aware of the below topics
    clousers -> remembers the lexical scoping of the variables even after the function execution has completed.
    hof -> Higher order function, a function which receives another function as parameter.
    callback
*/

function outcome(data){
    console.log("data received from server: ", data);
}

function hofDebounce(func, timeout){
    let timer;
    return function(...args) {

        if(timer)
            clearTimeout(timer); // do this to clear previously invoked calls 
        timer = setTimeout(() => func(args), timeout);
    }
};

console.log(hofDebounce(outcome, 1000));