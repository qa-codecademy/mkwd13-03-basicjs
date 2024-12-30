// JS object
let obj = {
    name: 'Trajan',
    age: 23,

    showName: function() {
        console.log(this.name);
    }
};

// json object
let json = {
    'name': 'Trajan',
    'age': 22
};

let name = json.name;
let age = json['age'];

// console.log(name, age);


let academy = {
    academyName: 'Qinshift Academy',
    trainer: 'Trajan Stevkovski',
    assistant: 'Filip Zlatanovski',
    stundents: [
        'Ana', 'Marija', 'Dragan'
    ]
};

console.log(academy);

let jsonContent = JSON.stringify(academy);
console.log(jsonContent);

let parsedJson = JSON.parse(jsonContent);
console.log(parsedJson);