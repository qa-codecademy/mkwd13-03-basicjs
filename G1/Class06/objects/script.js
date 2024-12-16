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