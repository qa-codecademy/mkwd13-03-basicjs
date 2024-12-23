console.log("App Online!");

//Select all starting html elements
let appEl = document.getElementById("app");
let titleEl = document.querySelector("#title");
let contentEl = document.querySelector("#content");

console.log(appEl, titleEl, contentEl);

//Declare our data
let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

function printGrades(subjectsArr, gradesArr, element) {
  let listHTML = "";

  for (let i = 0; i < subjectsArr.length; i++) {
    listHTML += `<li>${subjectsArr[i]}: ${gradesArr[i]}</li>`;
  }

  element.innerHTML += `<ul>${listHTML}</ul>`;
}

function printStudents(studentsArr, element) {
  let listHTML = "";

  for (let student of studentsArr) {
    listHTML += `<li>${student}</li>`;
  }

  element.innerHTML += `<ol>${listHTML}</ol>`;
}

function renderAcademyPanel(userType, name) {
  //Student logic
  if (userType === "student") {
    //Show student html on screen
    titleEl.innerHTML = `
        <h1>Hello there ${name}</h1>
        <p>Welcome to your student page</p>`;
    contentEl.innerHTML = `<h3>Your Grades:</h3>`;
    printGrades(subjects, grades, contentEl);
    return;
  }

  //Trainer logic
  if (userType === "trainer") {
    //Show trainer html on screen
    titleEl.innerHTML = `
        <h1>Hello there ${name}</h1>
        <p>Welcome to your trainer page</p>`;
    contentEl.innerHTML = `<h3>Your Students:</h3>`;
    printStudents(students, contentEl);
    return;
  }

  //Show invalid userType on the screen
  titleEl.innerHTML = `<h1>Your login was unsuccessful, invalid user type!</h1>`;
}

renderAcademyPanel("student", "John");
// renderAcademyPanel("trainer", "Jane");
// renderAcademyPanel("plumber", "Jane");

// let userTypeInput = prompt("Are you a student or a trainer?");
// let usernameInput = prompt("What is your name?");

// renderAcademyPanel(userTypeInput, usernameInput);

//Changing styles of elements through javascript
console.log(titleEl.style);

appEl.style.backgroundColor = "lightblue";
appEl.style.padding = "20px";
titleEl.style.color = "darkblue";
contentEl.style.borderTop = "1px solid darkblue";
