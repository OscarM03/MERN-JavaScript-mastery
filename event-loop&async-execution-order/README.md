# Event Loop and Async Execution Order

In JavaScript, the **event loop** is the mechanism that manages the execution of synchronous and asynchronous code. It ensures that operations happen in the right sequence without blocking the main thread.

The key idea is that **synchronous code runs first**, line by line, while asynchronous tasks are scheduled to run later. These async tasks are placed into different queues depending on their type, and the event loop decides when to bring them back for execution.

---

## Components

- **Call Stack**  
  All normal (synchronous) code is pushed here and executed immediately. Nothing else runs until the stack is empty.

- **Web APIs / Task Sources**  
  Functions like timers, network requests, or DOM events register here and wait until they are ready to send results back.

- **Callback Queue (Macrotasks)**  
  After the stack clears, tasks like `setTimeout`, `setInterval`, or DOM events are placed here and executed in order.

- **Microtask Queue**  
  Promises and mutation observers go here. Microtasks always run before macrotasks once the call stack is empty.

---

## Event Loop Steps

The event loop continuously checks:

1. **Is the call stack empty?**
2. **If yes, are there microtasks?**  
   Run all microtasks.
3. **If no microtasks remain,** move to the macrotask queue and run the next task.

---

## Execution Order

This strict order guarantees that synchronous code executes first, followed by microtasks, and then macrotasks. That’s why promises often resolve before timeouts, even if the timeout has a zero delay.

In short:

1. Sync first.  
2. Then microtasks.  
3. Then macrotasks.  

---

## `process.nextTick` (Node.js Only)

- `process.nextTick` is a special queue in Node.js that has **higher priority than other microtasks**.  
- It executes immediately after the current operation ends, **before the event loop continues to other microtasks or macrotasks**.  
- This makes it useful for quick callbacks but dangerous if misused, since too many `nextTick` calls can starve the event loop and delay other tasks.
