# JavaScript Prototypes

Prototypes are like hidden objects that are attached to other objects with their own properties and methods.  
These prototypes can have their own prototypes also, and this goes on, thus creating a **prototype chain**.  
This chain continues until it finds `null`.

---

## Object.create
`Object.create` helps create a new object where you can specify the prototype object that should be used for the new object.  
It’s basically like the new object inheriting the properties and methods of the object prototype. (Like a parent-child relationship)

---

## What happens when you use `new`
When you create an object with `new`, JavaScript does two things:

1. Creates a new object.  
2. Sets that object’s `__proto__` to point to the constructor’s `.prototype`.  
