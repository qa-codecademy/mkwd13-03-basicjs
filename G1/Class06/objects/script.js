let obj = {}; // empty object literal
let hotel = {
    name: "Quay",
    rooms: 30,
    booked: 25,
    hasGym: true,
    roomTypes: ["single", "double", "suite"],

    checkAvailability: function() {
        console.log("soory we are booked");
    } 
};


// console.log(hotel.booked);
// hotel.checkAvailability();


let name = hotel.name;
let rooms = hotel["rooms"];
// console.log(rooms);
// hotel['checkAvailability']();

let propertiesForReview = ['name', 'hasGym', 'roomTypes'];

for (let prop of propertiesForReview) {
    console.log(`Key: ${prop} Value: ${hotel[prop]}`);
}



let hotel1 = {
    name: 'Another hotel',
}

let hotel3 = {};
let hotel2 = new Object();

hotel2.name = 'Quay';
hotel2.rooms = 50;
hotel2.hasGym = false;
hotel2.roomTypes = ['single']
hotel2.checkAvailability = function() {
    console.log("Only single rooms available");
}

hotel2['pricePerNight'] = 100;
hotel2.propertyForDelete = true;

// delete hotel2.propertyForDelete;
// delete hotel2['pricePerNight'];

//console.log(hotel2.propertyForDelete);

// console.log(hotel2);
// console.log(hotel3);

let person = {
    firstName: "Trajan",
    lastName: "Stevkovski"
};

// seting property to a new value
person.firstName = "Filip";
person['lastName'] = "Zlatanovski";
// adding new property and assinging value
person.age = 23;

// console.log(person);
// console.log(person.firstName);


let student = {
    name: ""
};

let hotel4 = new Object();

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}

let hotel5 = new Hotel('Holiday Inn', 100, 89);
let hotel6 = new Hotel('Meriot', 200, 200);
let hotel7 = new Hotel('Park', 20, 10);

console.log(hotel5);
console.log(hotel6);
console.log(hotel7);

console.log(hotel5.checkAvailability());
console.log(hotel6.checkAvailability());
console.log(hotel7.checkAvailability());
