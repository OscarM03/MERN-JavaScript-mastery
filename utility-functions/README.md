# Utility Functions in JavaScript

Utility functions are small, reusable pieces of code that perform a single task.  
They help simplify logic, avoid repetition, and make code more readable and maintainable.  

These functions don’t usually hold state by themselves — they just take input, process it, and return output.  
Because of that, they are often general-purpose and can be used in many different parts of an application.  

Utility functions are many and users can even create their own.  
Today let's look at these 3:  

---

## 1. `debounce`

Debounce makes sure a function does not run too many times in quick succession.  
It delays the execution of the function until after a certain amount of time has passed without it being called again.  

---

## 2. `throttle`

Throttle ensures a function runs at most once within a set time frame, no matter how many times it is triggered.  
This prevents over-execution while still allowing it to run at regular intervals.  

---

## 3. `deepClone`

Deep clone is used to create a full copy of an object, including all nested properties.  
This ensures changes to the new object do not affect the original.  
