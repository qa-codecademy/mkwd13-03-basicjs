console.log("Objects is working");

let student = {
  //Properties
  firstName: "John",
  lastName: "Doe",
  age: 25,
  knowledge: 20,
  isSignedUp: true,
  classes: ["HTML & CSS", "Basic JS", "Adv JS"],
  //Methods
  study: function () {
    console.log("student is studying");
    this.knowledge += 5;
  },
  studyHarder: function () {
    console.log("student is studying harder");
    this.knowledge += 20;
  },
  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

student.studyHarder();
student.studyHarder();
student.studyHarder();
console.log(student.knowledge);

//Accessing properties using . (dot) notation
console.log(student.lastName);
console.log(student.firstName);
student.study();
student.printFullName();

//Accessing properties using [] (bracket) notation
console.log(student["knowledge"]);
console.log(student["age"]);
//Avopid doing this, can make code hard to work with and read
student["studyHarder"]();

//Updating object properties
student.firstName = "Bob";
student.lastName = "Bobski";
student["knowledge"] = 43;

//Adding properties and methods
student.country = "USA";
student.city = "Washington";

student.dontStudy = function () {
  console.log("student is not studying");
  this.knowledge -= 10;
};

student.dontStudy();
student.dontStudy();

//Deleting properties and methods

// delete student.country;
// delete student.city;
//It is a better idea to make the properties emtpy rather than deleting them
student.country = "";
student.city = "";

console.log(student);

/*
Write a JavaScript program to delete the lecture property from the following object. Add a property age to the object. Add a method getFullName that returns the full name ( First Name and Last name )
*/

let trainer = {
  name: "Stefan",
  lastName: "Stefanovski",
  academy: "SEDC",
  lecture: "Objects",
};

// delete trainer.lecture
trainer.lecture = null;

trainer.age = 54;

trainer.getFullName = function () {
  return `${this.name} ${this.lastName}`;
};

console.log(trainer);
console.log(trainer.getFullName());

function createPersonObject(name, yearOfBirth, job) {
  let person = {
    name: name,
    yearOfBirth: yearOfBirth,
    job: job,
  };

  return person;
}

// let john = createPersonObject("Jonh Doe", 1980, "Truck Driver");
// let jane = createPersonObject("Jane Doe", 1993, "Nurse");

// console.log(john, jane);

//Constructor notation
function Person(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  this.calculateAge = function () {
    let currentYear = new Date().getFullYear();

    console.log(`${this.name} is ${currentYear - this.yearOfBirth} years old`);
  };
}

let john = new Person("John Doe", 1980, "Truck Driver");
let jane = new Person("Jane Doe", 1993, "Nurse");
let bob = new Person("Bob Bobsky", 1979, "Bartender");

console.log(john, jane, bob);
