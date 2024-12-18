console.log("====================== OBJECTS RECAP ======================");

// Example: Create persons information

// ===> Without object
let firstName = "John";
let lastName = "Doe";
let age = 23;
let city = "Bitola";

console.log(`Person ${firstName} ${lastName}. Age ${age}. City ${city}`);

// ===> Using object literals 
let personBob = {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 45,
    city: "Veles",
    printInfo: function () {
        // console.log(`Person ${firstName} ${lastName}. Age ${age}. City ${city}`);
        console.log(`Person ${this.firstName} ${this.lastName}. Age ${this.age}. City ${this.city}`);
    }
}

console.log(personBob.firstName);
console.log(personBob["firstName"]);
personBob.printInfo();

// What if we want to create multiple persons ?!

// ===> Using Constructor Functions
function Person(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.printInfo = function () {
        console.log(`Person ${this.firstName} ${this.lastName}. Age ${this.age}. City ${this.city}`);
    }
}

let bob = new Person("Bob", "Bobsky", 23, "Skopje");
// bob.printInfo();
console.log(bob);

let greg = new Person("Greg", "Gregsky", 34, "Tokyo");
// greg.printInfo();
let jill = new Person("Jill", "Wayne", 54, "Tel Aviv");
// jill.printInfo();

let persons = [bob, greg, jill];
console.log(typeof persons);
console.log(persons[1]);

// using for-of loop
for (let human of persons) {
    human.printInfo();
}

// using while loop
let i = 0;
while (i < persons.length) {
    persons[i].printInfo();
    i++;
}