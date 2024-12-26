# Objects in JavaScript 👌

## Objects

```js
// Setting an empty object
let emptyObj = {};

// Setting properties on an empty object
let person = {};
person.name = "Bob";
person.age = 55;

// Setting a method on an object
person.sing = function(){
    console.log("TRA LA LA LA LA");
}

// Getting property value from an object
console.log(person.name);

// Calling a method of an object
person.sing();

// Creating an object and setting everything at the same time
let anotherPerson = {
    name: "Jill",
    age: 56,
    sayHello: function(name){
        console.log(`Hello there ${name}!`);
    }
}
console.log(anotherPerson.name);
anotherPerson.sayHello("Bob");

// Targeting object properties in the object it self
let order = {
    street: "Some St.",
    streetNo: 21,
    city: "London",
    price: 100,
    getAddress: function(){
        return `${this.street} No. ${this.streetNo} in ${this.city}`; // this points to the current object
    }
}
order.getAddress();

// Object with another object as a property
let owner = {
    name: "Greg",
    pet: {
        name: "Sparky",
        type: "dog"
    },
    callPet: function(){
        console.log(`Come here ${this.pet.name}!`)
    }
}
console.log(owner.pet.type); // get the pet type of the owner
owner.callPet();
```

## Constructing objects through templates

```js
// constructor function for objects
function Human(first, last, age){
    this.firstName = first; // Names from the constructor parameter and the property does not have to be the same
    this.lastName = last;
    this.age = age; // Example of where the names are the same
    this.fullName = `${this.firstName} ${this.lastName}`; // Generated property from other values

    this.sayHello = function(name){
        console.log(`Hello there ${name}!`);
    }
}

// Creating new objects out of the constructor function
let bob = new Human("Bob", "Bobsky", 24);
let jill = new Human("Jill", "Wayne", 22);

console.log(bob.fullName);
console.log(jill.fullName);
bob.sayHello("Jill");
jill.sayHello("Bob");
```
