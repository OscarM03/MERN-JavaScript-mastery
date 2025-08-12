Execution context is the enviroment created during execution of JavavScript code where code runs.

Hoisting is the behavior in JavavScript of processing variables and functions declarations before executing the code, making them accessible earlier in their scope.

Function declarations are hoisted with their full definition, so you can call them before they appear in the code.

Variables declared with var are hoisted but only initialized with undefined. Accessing them before their assignment gives undefined.

let and const are also hoisted, but placed in the Temporal Dead Zone (TDZ), meaning you cannot access them before the declaration line — doing so throws a ReferenceError.

Example 1: Hoisting with var
```javascript
console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10


Example 2: Hoisting with Function Declarations
greet(); // Hello!

function greet() {
    console.log("Hello!");
}


### Example 3: Hoisting with`
```javascript
console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;


### Example 4: Mixed Case
sayHi(); // "Hi there!"
console.log(x); // undefined

var x = 5;

function sayHi() {
    console.log("Hi there!");
}

Order doesn’t matter for function declarations, but it does for variable initializations.