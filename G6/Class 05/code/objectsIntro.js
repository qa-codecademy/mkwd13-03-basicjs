let hotelName = "Our hotel";
let hotelRooms = 20;
let bookedHotelRooms =5;

let hotel = new Object();
hotel.name = "Our hotel";
hotel.numOfRooms = 20;
hotel.bookedRooms = 5;
hotel.numOfStars = 4;
hotel.gym = true;

hotel.greeting = function (){
    alert("Hello from our hotel");
}

// function greeting(){
//     alert("Hello from code");
// }

// greeting();

console.log(`Num of rooms in our hotel ${hotel.numOfRooms}`);

hotel.greeting();

let anotherHotel = {
    name: "Another hotel",
    numOfRooms: 60,
    hasGym: false,
    roomTypes: ['single', 'double', 'suite'],
    printRoomTypes: function(){
        console.log("types of rooms:");
        for(let roomType of this.roomTypes){
            console.log(roomType)
        }
    }
}

console.log(`Welcome to ${anotherHotel.name}`);

anotherHotel.printRoomTypes();