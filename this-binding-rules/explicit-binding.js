// 2. Write an example of explicit binding.
// here a function can use call, apply or bind to set the value of this explicitly.


const student = {
    firstName: "Kelvin",
    lastName: "Kim",
    printFullName: function(country, continent) {
        console.log(this.firstName + " " + this.lastName + " from " + country + ", " + continent);
    }
};

const student2 = {
    firstName: "Martin",
    lastName: "Mat"
};

// use of call - call here allows us to set the value of this to student2 object, thus the function uses student2's firstname and lastname. this is useful when we want to borrow methods from one object and use them on another. Call also takes in arguments.
student.printFullName.call(student2, "Kenya", "Africa");  // "Martin Mat from Kenya, Africa"

// use of apply - apply is similar to call, but it takes an array of arguments
student.printFullName.apply(student2, ["Kenya", "Africa"]);  // "Martin Mat from Kenya, Africa"

// use of bind - bind create a new function with this set to the value of the obj and with the function and the arguments. This allows us to call it anyhwere within our code
const printStudent2Name = student.printFullName.bind(student2, "Kenya", "Africa");
printStudent2Name();  // "Martin Mat from Kenya, Africa"
