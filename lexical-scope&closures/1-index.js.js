// coding practice
// Write closure-based examples:
// 1. Private counter function


// 1. Private counter function

// We need to have an anonymus function with a private count variable and a method that chenges it, the use public methods to reference it.

const counter = (function () {
    let count = 0; // a private variable
    function changeByAdding(value) {  // A private method to change the count
        count += value;
    }

    // We need public methods to access the private variable and function
    return {
        increment() {      // A public method that increments the private counter
            changeByAdding(5);
        },

        decrement() {   // A public method that decrements the private counter
            changeByAdding(-5);
        },
         getCount() {   // A public method to get the current count
            return count;
         }
    }
})();

console.log(counter.getCount());

counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());