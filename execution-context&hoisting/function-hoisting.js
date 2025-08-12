// 2. Write an example showing Function declaration vs function expression hoisting


console.log(greet()); // This give Hello!, that is the output expected. This happens because the entire function is hoisted therefore being accessible anyhwere on the scope

// function declaration
function greet() {
    console.log("Hello!");
}

sayHi();  // This returns undefined because it behaves like a variable. Here the whole function is not hoisted but the var. It get hoisted and initialized to undefined. Then the value is assigned at runtime.

// function expression
var sayHi = function() {
    console.log("Hi!");
}