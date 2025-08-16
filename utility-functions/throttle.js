// 2. Write from scratch: throttle(func, delay)

// Throttle function ensures that a function is called once in a specific interval of time. This is useful for limiting the rate at which a function can fire.
// We can also use setTimeout to achieve this.

function throttle (func, delay) {
    let timeout = null;
    return function (...args) {
        if (!timeout) {
            func.apply(this, args);
            timeout = setTimeout(() => {
                timeout = null; // reset timeout to null once the function is run
            }, delay);
        }
    }
}

const askName = throttle(() => {
    console.log("What is your name");
}, 500);

function sayName (name) {
    console.log(`My name is ${name}`);
}

const sayNameFn = throttle(sayName, 2000);

askName();
askName();
setTimeout(() => {
    askName();
}, 300);

sayNameFn("Alice");

setTimeout(() => {
    sayNameFn("Oscar");
}, 3000);

setTimeout(() => {
    sayNameFn("John");
}, 1000);


// Explanation
// Here we have 2 function, one that asks for the user's name and another that allows the user to say their name. Now, we have set that oncw the function asking the name fires, it will take 500ms untill it is asked again if nobody responds. That why in the output, the question will be asked once even though askNmae has been called 3 times. So first fires, start the delay countdown, second fires immediately and is ignored because the delay is still active. Third fires after 300ms and is also ignored because the delay is still active. That how we end up with only one question being asked.

// As for the answer now. Once a users answers their name, it will take 2000ms or 2 seconds for another user to introduce themselves. Here Alice introduces herself immediately, them Oscar follows. But you will note that when the function is called to intoduce Oscar, it delay for 3000ms, meaning the delay of the thrittle function is already over allowing Oscar to say his name. But John does not introduce himself since he says his name before the delay of the trottle funcion is done, thus he's ignored