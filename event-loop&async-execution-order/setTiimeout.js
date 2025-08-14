// Javascript operations are handled using event loop. The event loop manages the execution of synchronous code, microtasks such as promises and macrotasks such as setTimeout.

// All these follow a certain execution order. However, it goes deep to the browser, where we have how these tasks are executed. This where we have the microtask queue and the callback queue, which are pushed to the call stack to execute after the event loop execute the other code and the call stack is empty. However the microtask queue has a higher priority than the callback queue and the tasks inside it are executed first.

// Coding Practice
// .1 Write experiments with setTimeout.

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");


// Output:
// Start
// End
// Timeout

// Explanation:
// The setTimeout function is a macrotask and is placed in the callback queue. After the synchronous code has executed, printing start and end, the event loop checks the microtask queue first (which is empty in this case) and then processes the callback queue, executing the setTimeout callback.