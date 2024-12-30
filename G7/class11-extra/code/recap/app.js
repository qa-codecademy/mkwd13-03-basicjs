console.log("working");

//STUDENTS EXAMPLE
const studentListEl = document.querySelector(".student-list");
const getStudentsBtn = document.querySelector("#getStudentsBtn");

//Form
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const countryInput = document.querySelector("#country");
const addStudentBtn = document.querySelector("#addStudentBtn");

console.log(
  studentListEl,
  getStudentsBtn,
  firstNameInput,
  lastNameInput,
  ageInput,
  countryInput,
  addStudentBtn
);

const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 31,
    country: "Macedonia",
  },
  {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 54,
    country: "USA",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 23,
    country: "Macedonia",
  },
  {
    firstName: "Rob",
    lastName: "Robson",
    age: 66,
    country: "England",
  },
];

function renderStudentList(students) {
  let studentsHTML = "";

  for (let student of students) {
    console.log(student.lastName);

    studentsHTML += `
    <li class='student-item'>
        <span>${student.firstName} ${student.lastName}</span> 
        <span>Age: ${student.age}</span>
        <span>Country: ${student.country}</span>
    </li>`;
  }

  studentListEl.innerHTML = `<ul>${studentsHTML}</ul>`;
}

addStudentBtn.addEventListener("click", function () {
  console.log("Add student btn clicked");

  //Get the values from the inputs
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const ageValue = ageInput.value;
  const countryValue = countryInput.value;

  console.log(firstNameValue, lastNameValue, ageValue, countryValue);

  const newStudent = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    age: Number(ageValue),
    country: countryValue,
  };

  students.push(newStudent);

  //Clear inputs
  firstNameInput.value =
    lastNameInput.value =
    ageInput.value =
    countryInput.value =
      "";

  //Whenever we update the data taht is shown on screen, we have to call the render function to update the html so that the user can see the latest version
  renderStudentList(students);
  console.log(students);
});

getStudentsBtn.addEventListener("click", function () {
  console.log("student btn clicked");
  renderStudentList(students);
});

// renderStudentList(students);

//POSTS EXAMPLE
const postsListEl = document.querySelector(".posts-list");
const getPostsBtn = document.querySelector("#getPostsBtn");
console.log(postsListEl, getPostsBtn);

function renderPostsList(posts) {
  let postsHTML = "";

  for (let post of posts) {
    postsHTML += `
    <li class="post-item">
        <div><strong>ID: ${post.id}. ${post.title}</strong></div>
        <div>${post.body}</div>
    </li>`;

    postsListEl.innerHTML = `<ul>${postsHTML}</ul>`;
  }
}

// renderPostsList();

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      console.log(posts);
      renderPostsList(posts);
    });
}

getPostsBtn.addEventListener("click", function () {
  console.log("posts btn clicked");
  fetchPosts();
});
