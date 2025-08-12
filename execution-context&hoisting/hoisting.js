// Execution context is the enviroment created during execution of JavavScript code where code runs.
// Hoisting is the behavior in JavavScript of processing variables and functions declarations before executing the code, making them accessible earlier in their scope.

// Coding Project

// 1. Write an example of Hoisting differences between var, let and const


console.log(a); // This gives undefined because the variable is hoisted or declared on top of the scope. This means that the   memory is allocated and assigned to undefined before the declaration happens.

console.log(b); // This gives referenceError because the variable is hoisted, but placed in the Temporal Dead Zone where is cannot be accesses before it is declared

console.log(c); // This gives referenceError because the variable is hoisted, but placed in the Temporal Dead Zone where is cannot be accesses before it is declared

var a = 10;
let b = 20;
const c = 30;