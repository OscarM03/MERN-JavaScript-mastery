# JavaScript `this` Binding Rules

This document explains the four main rules for how `this` is bound in JavaScript.

---

## 1. Default Binding
When a function is called with no context, `this` takes the global object as its value (mostly the `window` in browsers).  
In strict mode, the value of `this` is `undefined`.  
In non-strict mode, something called *this substitution* happens, and the value of `this` becomes the global object.

---

## 2. Implicit Binding
When a function is called as a method of an object, the value of `this` is the object itself.  

If the function is an arrow function, it goes back to default binding because arrow functions are not enclosed in their own lexical context.  
In that case, `this` takes the value of the lexical context it is in. If it is under global scope, then it adopts that.  
If the arrow function is nested inside a method, the arrow function's `this` will take the value of the function, which is the object.

---

## 3. Explicit Binding
A function can use `call`, `apply`, or `bind` to set the value of `this` explicitly.  

`call` allows us to set the value of `this` to another object and takes arguments directly. This is useful when we want to borrow methods from one object and use them on another.  

`apply` is similar to `call`, but it takes an array of arguments.  

`bind` creates a new function with `this` set to the value of the object and with the function and the arguments. This allows us to call it anywhere within our code.

---

## 4. New Binding
When a function is called with `new`, it creates a new object and sets `this` to that new object.  

The object returned contains the properties and methods defined in the function, since `this` has been set to that new object.
