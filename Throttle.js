/*
    Throttling limits the number of times a function is executed over a cetain time period.
    it enssures that the function is called at a controlled, steady rate, regardless of how frequently the event triggering function occurs.
*/

/*
    Imagine you have a web page with a scrolling event that triggers some action, like loading more content. without throttling, if the user scrolls quickly,
    the action might be triggered multiple times in rapid succession.
    throttling ensure that the action is executed at fixed interval.
*/

function outcome(data){
    console.log("Loading more content")
}

function throttle(func, delay) {
    let lastcall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if(now - lastcall >= delay) {
            func(...args);
            lastcall = now;
        }
    };
}


console.log(throttle(outcome, 300));
