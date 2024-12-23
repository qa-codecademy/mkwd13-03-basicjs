//javascript object
let academy = {
    academyName : "SEDC",
    trainer : "Petko Petkovski",
    assistant: "Marko Markovski",
    students: [
        "Ana", "Marija", "Dragan"
    ]
}

//we pack the object in order to send it to server
//the client and server understand json format
let jsonContent = JSON.stringify(academy); //serialization
console.log(jsonContent);

//json string comes from server and has to be parsed
//from json string we get javascript object
let parsedJson = JSON.parse(jsonContent);
console.log(parsedJson);

document.getElementsByTagName("h2")[0].innerText = parsedJson.academyName;