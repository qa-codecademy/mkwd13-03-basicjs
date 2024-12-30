let getDataBtn = document.getElementById("data-btn");
let jokesContainerElement = document.getElementById("container");

function Joke(type, setup, punchline) {
  this.type = type;
  this.question = setup;
  this.answer = punchline;
  this.getJoke = function () {
    return `${this.question} \n${this.answer}`;
  };
}

async function getJokesData() {
  const url = `https://official-joke-api.appspot.com/jokes/programming/ten`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("There is an error with the notwork or server");
    }
    const responseData = await response.json();
    console.log(responseData);
    const transformedData = transformData(responseData);
    displayData(transformedData, jokesContainerElement);
  } catch {
    console.log(error);
  }
}

function transformData(resonseData) {
  let resulArray = [];
  for (let i = 0; i < resonseData.length; i++) {
    let joke = new Joke(
      resonseData[i].type,
      resonseData[i].setup,
      resonseData[i].punchline
    );
    resulArray.push(joke);
  }
  console.log(resulArray);
  return resulArray;
}

function displayData(dataArray, containerElement) {
  containerElement.textContent = "";

  for (let i = 0; i < dataArray.length; i++) {
    let jokeElement = document.createElement("div");
    jokeElement.classList.add("joke-container");

    let questionElement = document.createElement("p");
    questionElement.classList.add("question");
    questionElement.textContent = `${dataArray[i].question}`;

    let answerElement = document.createElement("p");
    answerElement.classList.add("answer");
    answerElement.textContent = `${dataArray[i].answer}`;

    jokeElement.appendChild(questionElement);
    jokeElement.appendChild(answerElement);

    containerElement.appendChild(jokeElement);
  }
}

getDataBtn.addEventListener("click", getJokesData);
