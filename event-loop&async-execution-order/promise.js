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

// Here the promise runs after the timeout callback, because the promise does not exists untill the timeout fires. (it is inside the timeout). This means the timeout will fire and be added to the callback queue, or macrotask queue, and will be executed after the current stack is cleared. Then the promise will be added to the microtask queue and will run after the timeout macrotask is finished.
