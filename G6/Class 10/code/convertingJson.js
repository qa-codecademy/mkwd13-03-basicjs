//javascipt object

let academy = {
    academyName: "Qinshift",
    subject: "BasicJS",
    trainers: ["Tijana", "Murat"],
    numberOfStudents: 18,
    isRemote: true
};


//we pack the object in order to send it to server
//the client and the server understand JSON format
//we need to convert it from js object to json
let jsObjectToJSON = JSON.stringify(academy); //serialization
console.log(jsObjectToJSON);

let jsonToJsObject = JSON.parse(jsObjectToJSON);
console.log(jsonToJsObject);