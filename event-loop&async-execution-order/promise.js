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

