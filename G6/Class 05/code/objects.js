//Literal notation 
let rooms = 10;

let hotel = {
    name: "Aleksandar Palace",
    rooms: 100,
    bookedRooms: 50,
    roomTypes: ['single', 'double', 'suite'],
    checkAvailability: function(){
        let globalRooms = rooms;
        return this.rooms - this.bookedRooms;
    }
}

console.log("Hotel name: " + hotel.name);
console.log("How many rooms are booked? - " + hotel.bookedRooms);

console.log(hotel.checkAvailability());

console.log(hotel['name']); //less common way of accessing objects


//Exerrcise 1

let person = {
    firstName: "Petko",
    lastName: "Petkovski",
    age: 25,
    email: "petko@petkovski.com",
    canCode: true
};

console.log(`Hello ${person.firstName} ${person.lastName}`);

//Constructor notation

let newObj = new Object();
console.log(newObj);

newObj.newProperty = "new property";

newObj.newMethod = function(){
    console.log("I am an object method");
}

newObj.newMethod(); //calling the method using the dot and don't forget the ()

//Updating an object
console.log(newObj.newProperty); //"new property";
newObj.newProperty = "updated new property";
console.log(newObj.newProperty); //"updated new property";

//Deleting a property from an object
console.log(newObj);
delete newObj.newProperty;
console.log(newObj);


//Exercise 2

person.firstName = "Viktor";
person.lastName = "Petrovski";
person.age = 25;
person.email = "viktorp@outlook.com";
canCode = true;

console.log(`Hello ${person.firstName} ${person.lastName}`);

//Exercise 3
let trainer = {
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "Qinshift academy",
	lecture: "Objects"
}

delete trainer.lecture;
console.log(trainer);

trainer.age = 30;
console.log(trainer);

trainer.getFullName = function(){
    return `${this.name} ${trainer.lastName}`
}

console.log(trainer.getFullName());

//Constructor function

function Hotel(hotelName, rooms, booked){
    //this.name points to the property of object that we are creating -> the hotelName is the parameter that is sent to this function
    this.name = hotelName;
    this.rooms = rooms;
    this.booked = booked;
}

let hotelContinental = new Hotel("Continental", 100, 20);
console.log(hotelContinental);

let hotelTino = new Hotel("Tino", 150, 50);
console.log(hotelTino);

//Keyword 'this'

//here this is accessing the global object - window, and its properties
//here this is global
function windowSize(){
    let width = this.innerWidth;
    let height = this.innerHeight;
    console.log(width + " " + height)
}

windowSize();

let rectangle = {
    width: 500,
    height: 300,
    getArea: function(){
        return this.width * this.height; //here this is accessing the height and width of the object rectangle (the one that we are in)
    }
}

console.log(rectangle.getArea());