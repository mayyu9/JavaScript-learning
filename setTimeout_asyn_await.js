// we have loop starting from 1 till 10. we have to dealy the console for i seconds and they print it
// // try1: setTimeout

function test() {
    console.log('started....');
    for(let i=1; i<=10; i++) {
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }
     console.log('ended....');
}

test();

// o/p of the above
//started...
// ended...
// 1 2 3 4 5 6 7 8  9 10
// this is ot what we needed.

// try 2: using promises

function delay(i) {
    return new Promise(resolve => {
         setTimeout(()=>{
            console.log(i)
        }, i*1000)
    })
}

function test1(){
     console.log('started....');
    for(let i=1; i<=10; i++) {
        const result = delay(i);
        result.then(result => console.log(result));
    }
     console.log('ended....');
}

test1()

// op of the above promise:
// started...
// ended ...
// 1 2 3 4 5 6 7 8 9 10 - this are getting printed with delay but other consoles executed synchronously.


// try3: Async & await

function delay(i) {
    return new Promise(resolve => {
         setTimeout(()=>{
            console.log(i)
        }, i*1000)
    })
}

async function test2(){
     console.log('started....');
    for(let i=1; i<=10; i++) {
        const result = await delay(i);
        console.log(result);
        // result.then(result => console.log(result));
    }
     console.log('ended....');
}

test2()


/*
    Difference between async & await and promises is.
    in case of await entire code executioon is stopped.
    in case of prmosies we have and then block as loop hole
*/