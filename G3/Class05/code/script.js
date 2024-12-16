console.log("I'm here");

// let firstName = "Ivan";
// const firstName = "Ivan";

// console.log(firstName);

// firstName = "Ane";
// console.log(firstName);

const student = {
  name: "Dejan",
  lastName: "Stojkovski",
  age: 30,
  isAnActiveStudent: true,
  subjects: ["HTML", "CSS", "JavaScript"],

  printSubjects: function () {
    // this.name / this.lastname / this.subjects - "THIS" here points the to objects we're currently itself, this would be the same as accessing the name of the student outside the object like this -> student.name (this would be this.name)

    console.log(`These are ${this.name} ${this.lastName}'s active subjects:`);

    for (const subject of this.subjects) {
      console.log(subject);
    }
  },
};

// console.log("With age:", student);
student.isLeftHanded = false;
console.log(student.isLeftHanded);

student.isLeftHanded = true;
console.log(student.isLeftHanded);

delete student.age;

console.log("Deleted age:", student);

console.log(student);

console.log(student.name);
console.log(`${student.name} ${student.lastName}`);

student.printSubjects();

// const student2 = new Object() -> this is the old way, not really used anymore
const student2 = {};
console.log(student2);

student2.name = "Ivan";
student2.age = 27;
student2.email = "ivan.apostolovski@gmail.com";

console.log(student2);

student2.printNameAndAge = function () {
  console.log(`${this.name} has ${this.age} years.`);
};

student2.printNameAndAge();

console.log(student2["email"]);

// Constructor notation (the old way)

function Student(name, age, skills = [], isEnrolled = true) {
  // Initialize the properties
  this.name = name;
  this.age = age;
  this.skills = skills;
  this.isEnrolled = isEnrolled;

  this.printSkills = function () {
    console.log(`${this.name}'s Skills:`);

    for (const skill of this.skills) {
      console.log(skill);
    }
  };
}

const student3 = new Student("Ivan", 27, ["JavaScript", "TypeScript"], false);

console.log(student3);

student3.printSkills();

function test() {
  console.log(this.Student);
}

test();

// Constructor class (the new way - ES6)

class BootcampStudent {
  constructor(
    studentName,
    studentAge,
    studentSkills = [],
    studentIsEnrolled = true
  ) {
    this.name = studentName;
    this.age = studentAge;
    this.skills = studentSkills;
    this.isEnrolled = studentIsEnrolled;
  }

  printSkills() {
    console.log(`${this.name}'s Skills:`);
    for (const skill of this.skills) {
      console.log(skill);
    }
  }

  addSkill(skill) {
    this.skills.push(skill);
    console.log(`Added skill ${skill} for ${this.name}`);
  }

  addStaticSkill() {
    this.skills.push("TypeScript");
    console.log(`Added skill for ${this.name}`);
  }
}

// function addSkill(skill) {
//   const skills = [];
//   skills.push(skill);
//   return skills;
// }

// console.log(addSkill());

// console.log(addSkill("Test"));

// addSkill();

const student4 = new BootcampStudent("Bob", 55, ["C++", "Rust"]);

console.log(student4);
student4.printSkills();

student4.addSkill("JavaScript");
console.log(student4);

// Exercise Solution

class Car {
  constructor(model, color, year, fuel, fuelConsumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = fuelConsumption;
  }

  calculateFuelForDistance(distance) {
    return distance * (this.fuelConsumption / 100);
  }
}

const citroen = new Car("C5", "White", 2015, 50, 10);

console.log(citroen);

const fuelWasted = citroen.calculateFuelForDistance(50);
console.log(fuelWasted);
