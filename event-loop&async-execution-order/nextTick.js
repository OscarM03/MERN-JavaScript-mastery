// 3. Write experiments with process.nextTick.

// In node js nextTick schedules to run the callback function after the call stack becomes empty. This happens even before the event loop start, thus placing it on top of the microtask queue.

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

process.nextTick(() => {
    console.log("Next tick");
});

console.log("End");

// Output:
// Start
// End
// Next tick
// Promise resolved
// Timeout

// Explanation:
// The synchronous code runs first, printing "Start" and "End". After that, the nextTick callback is executed, followed by the promise resolution (microtask). Finally, the setTimeout callback runs, printing "Timeout". This demonstrates the priority of nextTick callbacks over microtasks and macrotasks in the event loop execution order.
