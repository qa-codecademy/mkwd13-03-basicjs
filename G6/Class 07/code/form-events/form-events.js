console.log("=================== FORM EVENTS ===================");


console.log("");
console.log("======== Get Value from Input ========");

const randomTextInput = document.getElementById("random-text-input");
const showValueBtn = document.getElementById("show-value-btn");
const displayTextParagraph = document.querySelector(".display-text");

showValueBtn.addEventListener("click", function () {
    // we get the input value by accessing the inputs object property 'value'
    const inputValue = randomTextInput.value;
    console.log(inputValue);
    displayTextParagraph.style.color = "red";
    displayTextParagraph.textContent = inputValue;
    // after the user submits the entered text, we can reset the input field
    randomTextInput.value = "";
})

// *input* => Event to track what the user is typing in the input field
randomTextInput.addEventListener("input", function (e) {
    console.log(e.target.value);
})


console.log("");
console.log("======== Create User Example (using <form> element) ========");

function addStudentToList(firstName, lastName, listElement) {
    const studentItem = document.createElement("li");
    studentItem.textContent = `${firstName} ${lastName}`;
    listElement.appendChild(studentItem);
}

const form = document.getElementById("users-form");
const usersList = document.getElementById("users-list");

form.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    const firstNameValue = document.getElementById("user-first-name").value;
    const lastNameValue = document.getElementById("user-last-name").value;

    addStudentToList(firstNameValue, lastNameValue, usersList);

    // Clear the input fields in the form
    form.reset();
})
