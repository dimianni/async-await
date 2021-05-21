/*-------------------------------------------------------------*/
/* Async/Await is a new feature added to JavaScript in ES8 and it basically allows you to 
// write asynchronous code in a synchronous way.
---------------------------------------------------------------*/

// We use the async keyword in front of our function to declare an asynchronous function
// async returns a promise
async function test2() {
    // returning value will be be available as the resolved value from the promise.
    // If no value is returned, the resolved value will be “undefined”

    try {

        // We use 'await' anytime we would use '.then'. 
        // Such expression pauses the execution of the function and returns the Promise’s value once it resolves.
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json()

        return data

    } catch (error) {
        console.log(error);
    }

}

// console.log(test2()); // promise 

test2()
    .then(res => console.log(res))