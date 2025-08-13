// 2. Write an example of implicit binding.

// Here the function is now called as a method of an object and the value of this is the object itself. 


// Implicit Binding Example
const student = {
    firstName: "Kelvin",
    lastName: "Kim",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

student.printFullName(); // "Kelvin Kim" if we were to console log (this) we would get the object itself.

// However if the function in an arrow function, it goes back to default binding. This is because arrow function are not enclosed in their own lexical context thus result to this taking the value of the lexical context it is in. If it under global then it adopts that. If the arrow function is nexted inside a method, the the arrow function's this will take the value of the function which is the object.


// Arrow function
const studentArrow = {
    firstName: "Kelvin",
    lastName: "Kim",
    printFullName: () => {
        console.log(this.firstName + " " + this.lastName);
    }
};

studentArrow.printFullName(); // this is undefined in browsers (this = global object in non-strict mode)