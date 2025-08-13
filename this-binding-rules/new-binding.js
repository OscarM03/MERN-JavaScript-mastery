// 3. create an example of new binding

// When a function is called with new it create a new object and set this to that new object.


function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.printFullName = function(country, continent) {
        console.log(this.firstName + " " + this.lastName + " from " + country + ", " + continent);
    };
}



const student2 = new Student("Pat", "Kelly");
student2.printFullName("USA", "North America");  // "Pat Kelly from USA, North America"
console.log(student2); // { firstName: 'Pat', lastName: 'Kelly', printFullName: [Function] } print the object since this has been set to student2 object.