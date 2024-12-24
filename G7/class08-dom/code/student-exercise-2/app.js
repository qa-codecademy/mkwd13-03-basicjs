console.log("Chicken calculator online");
// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph

const resultEl = document.querySelector("#result");
console.log(resultEl);
resultEl.style.padding = "10px";

function weightInChickens(weight) {
  return weight * 2;
}

function displayChickenWeight(userWeight) {
  if (Number.isNaN(userWeight) || userWeight < 0) {
    resultEl.innerHTML = `<h3>Invalid input, do not hide your weight!</h3>`;
    resultEl.style.backgroundColor = "lightpink";
    resultEl.style.color = "darkred";

    console.log("nan check");
    return;
  }

  resultEl.innerHTML = `<h3>Your weight: ${userWeight} in chickens is: ${weightInChickens(
    userWeight
  )}`;
  resultEl.style.backgroundColor = "lightgreen";
  resultEl.style.color = "darkgreen";
}

const userWeight = Number(prompt("What is your weight?"));

displayChickenWeight(userWeight);
