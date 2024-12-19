console.log("===================== DOM MANIPULATION =====================");
// Changes on the DOM are only reflected in the browser (not in the .html file for example) !


console.log("");
console.log("============= Getting Text from Elements =============");

let mainTitle = document.querySelector(".title");
let subTitle = document.querySelector(".subtitle");

// ===> using textContent (used in most cases)
// => Includes all text, even from hidden elements. Includes the whitespaces
console.log(mainTitle.textContent);

// ===> innerText
// => Does not include the content of hidden elements. Ignores extra whitespace
console.log(mainTitle.innerText);


console.log("");
console.log("============= Changing Text of Elements =============");

// ===> rewriting the whole text
mainTitle.textContent = "DOM Manipulation";
// ===> adding new text to the existing
subTitle.textContent += " and the beauty of changing the DOM"


console.log("");
console.log("============= Changing and adding html elements =============");
let footer = document.querySelector("footer");
console.log(footer.innerHTML); // <p>&copy; 2024 Learn DOM</p>

// ===> change the whole html structure nested in the footer
footer.innerHTML = `<p>Learn how to manipulate the DOM &copy; 2024</p>
                    <p>Another paragraph</p>`;

// ===> append new html code to existing one
footer.innerHTML += `<p>Even another <b>paragraph</b></p>`;
// footer.innerHTML = footer.innerHTML + `<p>Even another <b>paragraph</b></p>` // same thing as above



console.log("");
console.log("============= Students Example =============");
// Example: Get students names from user input (prompt) and render them in an unordered list

function getStudents() {
    let students = [];
    let addMoreStudents = true;

    while (addMoreStudents) {
        let studentName = prompt("Enter student's name (or Cancel to finish)");
        console.log(studentName);
        if (studentName === null) {
            addMoreStudents = false;
            // break;
        } else if (studentName.trim() === "") {
            continue;
        } else {
            students.push(studentName);
        }
    }

    return students;
}

// ===> using innerHTML
function renderStudents(students, container) {
    // => best way is to build the string of the html and then just assign it to the container.innerHTML 
    let htmlContent = "<ul>";
    // debugger
    // container.innerHTML = "<ul>" // => if we use it like this, the browser will generate a self-closing tag automatically, which will break our html structure
    for (const student of students) {
        htmlContent += `<li>${student}</li>`
    }
    htmlContent += "</ul>";
    container.innerHTML = htmlContent;
}

// ===> using document.createElement
function renderStudentsUsingCreateElement(students, container) {
    container.innerHTML = "";

    const ul = document.createElement("ul");

    for (const student of students) {
        const li = document.createElement("li")
        li.textContent = student;
        ul.appendChild(li);
    }

    container.appendChild(ul);
}

let students = getStudents();
console.log(students);

let studentsContainer = document.getElementById("students-container");

renderStudents(students, studentsContainer)
// renderStudentsUsingCreateElement(students, studentsContainer)


console.log("");
console.log("============= Changing CSS & Attributes =============");

let studentsTitle = document.querySelector(".students-title");
console.log(studentsTitle.style);

studentsTitle.style.color = "green";
studentsContainer.style.border = "2px solid green";

console.log(studentsContainer.hasAttribute("class"));
studentsContainer.setAttribute("class", "students-list");
console.log(studentsContainer.hasAttribute("class"));
let classAtributeValue = studentsContainer.getAttribute("id")
console.log(classAtributeValue);
studentsContainer.removeAttribute("class");

studentsContainer.setAttribute("customAttribute", true);