console.log("Objects is working");

let studentTwo = {
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

studentTwo.studyHarder();
studentTwo.studyHarder();
studentTwo.studyHarder();
console.log(studentTwo.knowledge);

//Accessing properties using . (dot) notation
console.log(studentTwo.lastName);
console.log(studentTwo.firstName);
studentTwo.study();
studentTwo.printFullName();

//Accessing properties using [] (bracket) notation
console.log(studentTwo["knowledge"]);
console.log(studentTwo["age"]);
//Avopid doing this, can make code hard to work with and read
console.log(studentTwo["studyHarder"]());

//Updating object properties
//Adding properties and methods
//Deleting properties and methods
