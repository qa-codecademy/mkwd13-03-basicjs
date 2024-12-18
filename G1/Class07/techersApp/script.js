let myApp = document.getElementById('app');
let titleDiv = myApp.firstElementChild;
let contentDiv = document.querySelector('#content');

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subject = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "C", "A"];

// Example of how to set proper data
// let studentsObj = [
//     {
//         name: "Bob Bobsky",
//         subjects: ["Math", "Sports"],
//         grades: ["A", "A"]
//     },
//     {
//         name: "Bob Bobsky",
//         subjects: [
//             {
//                 name: "Math",
//                 grade: "A"
//             }
//         ]
//     }
// ]

function printGrades(subject, grades, element) {
    element.innerHTML = '';
    let content = '<ul>';
    for(let i = 0; i < subject.length; i++) {
        content += `<li>${subject[i]}: ${grades[i]}</li>`
    }
    content += '</ul>';
    // console.log(content);
    element.innerHTML = content;
}

//printGrades(subject, grades, contentDiv);

function printStudents(students, element) {
    element.innerHTML = '';
    let content = '<ol>';
    for (let student of students) {
        content += `<li>${student}</li>`;
    }
    content += '</ol>';
    element.innerHTML = content;
}

// printStudents(students, contentDiv);

function academyPanel(person, name) {
    if (person === 'student' && name.length >= 2) {
        titleDiv.innerHTML = `<h1>Hello there ${name}</h1>`;
        titleDiv.innerHTML += `<p>Welcome to you student page</p>`;
        titleDiv.innerHTML += '<h3>Your grades:</h3>';
        printGrades(subject, grades, contentDiv);
    } else if (person === 'teacher' && name.length >= 2) {
        titleDiv.innerHTML = `<h1>Hello ${name}</h1>
            <p>Welcome to teacher page</p>
            <h3>Your students: </h3>`;
        printStudents(students, contentDiv);
    } else {
        titleDiv.innerHTML = "<h1><b>Your login was unsuccessfull</b></h1>";
        titleDiv.innerHTML += "<p>Please try again!</p>";
    }
}

let personType = prompt('Are you a student or teacher?');
let name = prompt('What is your name?');

academyPanel(personType, name);
