let person = {
    firstName: "Martin",
    lastName: "Panovski",
    age: 31,
    isEmployeed: true,
    profession: "Software developer",
    programmingLanguages: ['C#', "JS"]
}

// if we want to send data to the server
// we need to pack the data in a json format

// The process of packing the data into JSON string
// to be sent to the server is called 
// SERIALIZATION

let jsonContent = JSON.stringify(person);
console.log(jsonContent);


// if we get a response from the server 
// in a json string format, we need to parse
// the json string into a JavaScript object
// The process of doing this is called
// DESERIALIZATION

let jsObject = JSON.parse(jsonContent);
console.log(jsObject); 

document.getElementById('firstName').innerText 
        = `${jsObject.firstName} ${jsObject.lastName} | Age: ${jsObject.age}`;