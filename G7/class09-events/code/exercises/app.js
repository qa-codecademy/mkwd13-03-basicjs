console.log("Exercises is working");
//Exercise #2
const paragraphBtn = document.querySelector("#paragraphBtn");
const paragraphEl = document.querySelector(".paragraph");

console.log(paragraphBtn, paragraphEl);

paragraphBtn.addEventListener("click", function () {
  console.log("Paragraph button clicked");

  paragraphEl.style.color = "darkblue";
  paragraphEl.style.backgroundColor = "lightblue";
  paragraphEl.style.fontSize = "20px";
});

//Exercise #3
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

//An array of all the inputs
const inputs = document.querySelectorAll("input");

const submitBtn = document.querySelector("#submitBtn");
const displayEl = document.querySelector(".display");

console.log(
  firstNameInput,
  lastNameInput,
  emailInput,
  passwordInput,
  submitBtn,
  displayEl
);

function printPersonInfo() {
  firstNameValue = firstNameInput.value;
  lastNameValue = lastNameInput.value;
  emailValue = emailInput.value;
  passwordValue = passwordInput.value;

  firstNameInput.value =
    lastNameInput.value =
    emailInput.value =
    passwordInput.value =
      "";

  return `User: ${firstNameValue}, ${lastNameValue}, ${emailValue}, ${passwordValue} is registered.`;
}

submitBtn.addEventListener("click", function () {
  console.log("i am clicked");
  displayEl.textContent = printPersonInfo();
});
