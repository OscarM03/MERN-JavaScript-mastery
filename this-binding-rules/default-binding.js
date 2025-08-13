// When a function is called with no context and this takes the global object as its value, mostly the window in browsers. The value of this in function is however undefined in strict mode, and when we turn to non strict mode, something called this substitution happens, and thus the value of this becomes the global object.

// Coding practice:
// 1. Write an example of default binding.


// non-strict mode
function printThis () {
    console.log(this)
}

printThis() // gives the global object (window in browsers) or undefined in strict mode.


// strict mode
"use strict"
function printThisStrict () {
    console.log(this)
}

printThisStrict() // gives undefined