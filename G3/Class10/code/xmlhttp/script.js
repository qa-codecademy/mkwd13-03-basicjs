console.log("Hello I'm here!");

const user = {
  name: "John",
  age: 30,
};
console.log("regular js object", user);

const jsonString = JSON.stringify(user);
console.log("stringified json", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("parsed json", parsedObject);
console.log(parsedObject.name);

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.chucknorris.io/jokes/random");

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    return;
  }

  const joke = JSON.parse(xhr.responseText);
  console.log(joke);

  document.body.innerHTML = `<h1>${joke.value}</h1>
    <img src="${joke.icon_url}">
  `;
};

xhr.onerror = function () {
  console.error("Network Error");
};

xhr.send();
