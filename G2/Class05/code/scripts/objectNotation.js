
let hotel = new Object();

hotel.name = 'Bristol';
hotel.numberOfRooms = 100;
hotel.numberOfStars = 5;
hotel.hasSpaCenter = true;
hotel.bookedRooms = 55;
hotel.getAvailability = function() {
    return this.numberOfRooms - this.bookedRooms;
}

console.log(hotel);
console.log(hotel.name);
console.log(`The hotel ${hotel.name} has ${hotel.getAvailability()} free rooms left.`)


// Delete an object property
delete hotel.numberOfRooms;
console.log(hotel);
console.log(hotel.getAvailability());


hotel.name = 'Alexander Palace';
hotel.bookedRooms = 20;
