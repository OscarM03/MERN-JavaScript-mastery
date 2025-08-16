// coding practice
// 1. Write from scratch: debounce(func, delay)

// Debounce is a utility function that limits the rate at which a function can fire. This happens by canceling any fires until a specified delay has passed since the last call.

function debounce(func, delay) {
    let timer;
    return function (...args) {  // args keeps track of the arguments passed to the function
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args); // this makes sure the function runs with the arguments
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching for ... ", query);
}, 500);


search("c");
search("ch");
search("che");
search("cher");
search("cherr");
search("cherry");


// Explanation
// Here only the last one is printed because it is the one processed after the debounce delay. When the first fires with only letter c, the debounce set a timer to it and it start delaying for 500ms, but before the ms are over the second fires with 'ch'. Now debounce clears the timer of the first once and start a new timer for the second. This continues until the last one fires which is 'cherry'. Since since there is no other after cherry, the timer for cherry is not cleared and therefore it gets executed.

// Note if delay is 0, the code would still work but it would execute the function immediately without any delay.