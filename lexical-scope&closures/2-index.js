// coding practice
// Write closure-based examples:
// 2. Function returning another function that logs a message

// We need to have 2 function here, where 1 is returned by another and logs out a message.

function greeting() {
    return function (name) {
        console.log(`Hello, ${name}!`);
    }
}

greeting()("Oscar");