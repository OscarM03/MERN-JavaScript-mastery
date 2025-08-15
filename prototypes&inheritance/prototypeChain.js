// Prototupes are like hidden objects that are attcahed to other objects with their own properties and methods.
// These prototypes can have their own prototypes also, and this goes on thus creating a prototype chain. This goes on untill it finds null

// cooding practice:
// 1. Create prototype chains manually using Object.create

// Object.create helps create a new object where you can specify the prototype object that should be used for the new object. It basically like the new object inheriting the properties and methods of the prototype object.

const human = {
    species: "Homo sapiens",
    breathe: function () {
        console.log("Breathing...");
    },
};

const kenyan = Object.create(human);
kenyan.intro = function () {
    console.log(
        `Hello, I am from the species ${this.species} like every other human, but, I'm from Kenya.`
    );
};

const person = Object.create(kenyan);
person.name = "Oscar";
person.city = "Nairobi";
person.intro = function () {
    console.log(
        `Hello, I am from the species ${this.species} like every other human, but, I'm from Kenya. My name is ${this.name} and I live in ${this.city}.`
    );
};

kenyan.intro(); // Hello, I am from the species Homo sapiens like every other human, but, I'm from Kenya.
person.intro(); // Hello, I am from the species Homo sapiens like every other human, but, I'm from Kenya. My name is Oscar and I live in Nairobi.

// Explanation
// In this prototype chain, the first object inherits from Object.prototype. The second one, kenyan, points to human and can use its properties and methods. Finally, the their object, person, points to kenyan and can use its properties and methods as well. Since this create a chain, the person object has access to the properties of kenyan and human and therefore can use them.
