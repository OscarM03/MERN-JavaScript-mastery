// 3. Write a deepclone exmaple

// deepclone allows the copy of something like an object completely where the copy remains independent from the original.
// This deepcloning is a better way to do it than using "="

function deepclone (obj) {
    return JSON.parse(JSON.stringify(obj));
}

const originalObj = {
    name: "Oscar",
    address: {
        city: "Nairobi",
    }
}

// Let's create a shallow copy using "="
const shallowObj = originalObj;

// Let's create a deep copy using deepclone
const deepObj = deepclone(originalObj);

// Now, let's modify the shallow obj
shallowObj.name = "Bob";
shallowObj.address.city = "Mombasa";

// Let's modify the deep clone
deepObj.name = "Alice";
deepObj.address.city = "Kisumu";

console.log(originalObj);
console.log(shallowObj);
console.log(deepObj);


// output:
// { name: 'Bob', address: { city: 'Mombasa' } }
// { name: 'Bob', address: { city: 'Mombasa' } }
// { name: 'Alice', address: { city: 'Kisumu' } }

// Explanation:
// In this example, we have an original object with a name and an address. When we create a shallow copy using "=", both the original and shallow copy point to the same object in memory. Therefore, when we modify the shallow copy, it also modifies the original object.
// However, when we create a deep copy using the deepclone function, it creates a new independent object. Therefore, when we modify the deep copy, it does not affect the original object or the shallow copy. This demonstrates how deep cloning allows for independent copies of objects, while shallow copying does not.

// This however is the simplest way to show deepclone since some like Date objects or functions may not be cloned correctly with this method. To read more about this, visit: https://medium.com/@rajat29gupta/mastering-deep-cloning-in-javascript-beyond-the-basics-b1bdf370448b