console.log("==== LITERAL NOTATION ======");

let hotel = {
    name: "VIP Hotel",
    numOfRooms: 50,
    hasGym: false,
    roomTypes: ["single", "double", "suite"],
    printRoomTypes: function(){
        // console.log("Types of rooms: single, double, suite");
        console.log("==========THIS===============")
        console.log(this);
        console.log("==========THIS===============")
        for(let roomType of this.roomTypes){
            console.log(`Types of rooms:${roomType}`)
        }
    },
    printHello: function(firstName){
        console.log(`Hello ${firstName}`);
    }
};

console.log(hotel);

console.log(hotel.name);
console.log(hotel.hasGym);
hotel.printRoomTypes();
hotel.printHello("Stevan");

//ADDING PROPERTY AND METHODS

hotel.numOfBookedRooms = 7;

console.log(hotel);

hotel.canDoExercise = function(){
    console.log("====== This =====");
    console.log(this);
    console.log("====== This =====");
    return this.hasGym === true;
}

console.log(hotel);
console.log(hotel.canDoExercise());

//EDITING PROPERTY

hotel.numOfRooms = 45;
console.log(`Number of rooms: ${hotel.numOfRooms}`);

hotel.printHello = function(){
    console.log(`Hello from VIP Hotel`);
}

hotel.printHello();

//DELETE THE PROPERTY
console.log(`has property numOfBookedRooms: ${hotel.hasOwnProperty("numOfBookedRooms")}`);
delete hotel.numOfBookedRooms;
console.log(`has property numOfBookedRooms: ${hotel.hasOwnProperty("numOfBookedRooms")}`);



console.log("==== THIS ======");

console.log(this); //window object
console.log(this.closed); //window property