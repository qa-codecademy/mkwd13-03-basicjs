
// Create an object using Constructor Function

function Person(firstName, lastName, birthYear, isEmployeed){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.isEmployeed = isEmployeed;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }

    this.calculateAge = function(currentYear){
        return currentYear - this.birthYear;
    }
}

let martin = new Person('Martin', 'Panovski', 1993, true);
let frose = new Person('Frosina', 'Stamenkovska', 1993, true);

martin.isLazy = false;

console.log(martin);
console.log(frose);

console.log(frose.calculateAge(2024));
console.log(martin.calculateAge(2024));


function windowSize(){
    let width = this.innerWidth;
    let height = this.innerHeight;
    return [width, height];
}

console.log(windowSize());

martin.someFunc = windowSize;
console.log(this);