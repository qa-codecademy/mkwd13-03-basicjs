console.log("Ajax Working");

const fetchBtn = document.querySelector("#fetchBtn");

fetchBtn.addEventListener("click", function () {
  console.log("fetch btn clicked");
});

console.log("Below the event listner");
console.log("This is sync javascript");

const student = {
  firstName: "Ron",
  lastName: "Rustemi",
  isStudent: true,
  hobbies: ["Coding", "Gaming", "Skiing"],
  age: 18,
};

console.log("Original Object:", student);

//JSON.stringify(input) is going to turn a valid js object or array into a valid JSON string
const studentJSON = JSON.stringify(student);

console.log("JSON:", studentJSON);

//JSON.parse(inputJson) is going to turn a valid json string into a valid js object
const studentObj = JSON.parse(studentJSON);

console.log("Parsed Object:", studentObj);

const displayEl = document.querySelector(".display");

fetch("https://swapi.py4e.com/api/people/5")
  .then(function (response) {
    console.log(response);
    //Handle and parse the body
    return response.json();
  })
  .then(function (data) {
    //This is where the body data becomes available
    console.log("This is the swapi data");
    console.log(data);
    displayEl.innerText = `Name: ${data.name}, Height: ${data.height}cm, Mass: ${data.mass}kg`;
  });

console.log("This is below the fetch");

fetch("https://jsonplaceholder.typicode.com/posts/12")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
