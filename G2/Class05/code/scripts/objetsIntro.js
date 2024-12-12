

// Create an object - Literal Notation
let emptyObject = {};


let person = {
    firstName: 'Martin',
    lastName: 'Panovski',
    age: 31,
    hobbies: ['swimming', 'reading books', 'running'],
    isLazy: false,
    //"is Employeed": true,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },

    showHobbies: function () {
        for (let hobby of this.hobbies) {
            console.log(hobby);
        }
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.age);
console.log(person.getFullName());
person.showHobbies();

// We can change the objects after their creation
// Add property or method after the obejct is created

person.height = 189;
console.log(person);

person.getHeight = function () {
    return this.height;
}

console.log(person.getHeight());

// Access an object property by using ['']
console.log(person['lastName']);
// console.log(person['is Employeed']);
// person["is Employeed"]

