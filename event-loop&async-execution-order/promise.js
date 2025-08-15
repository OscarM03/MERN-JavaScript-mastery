// 2. Write experiments with Promise.resolve.

// When it comes to promise.resolve, it is categorized as a microtask. This means that in the execution order, this will have higher priority than those in the callback queue such as setTimeout. So after the synchronous code, the promise will be resolved next, then setTimeout.

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("End");

// Output:
// Start
// End
// Promise resolved
// Timeout

//Explanation:
// The synchronous code runs first, printing "Start" and "End". After that, the promise is resolved, which is a microtask and gets executed before the setTimeout callback. Finally, the setTimeout callback runs, printing "Timeout". This demonstrates the priority of microtasks over macrotasks in the event loop execution order.

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout 1
// Promise inside Timeout

// Here the promise runs after the timeout callback, because the promise does not exist until the timeout fires (it is created inside the timeout). This means:
// The timeout callback itself is scheduled as a macrotask and will run after the current call stack is cleared.
// When that timeout callback executes, it logs "Timeout 1" and then creates the promise.
// The promise’s .then is placed into the microtask queue.
// The event loop will then immediately clear all microtasks before moving on to the next macrotask.
// As a result, the timeout callback runs first, and the promise callback runs right after it, before any other macrotasks.
