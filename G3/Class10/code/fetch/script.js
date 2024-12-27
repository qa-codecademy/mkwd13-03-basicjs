// function getJoke() {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       document.getElementById("jokes-container").innerHTML = data.value;
//     })
//     .catch((error) => console.log(error));
// }

// document.getElementById("joke").addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(response);
    console.log(data);

    // if (data.value) {
    //   throw new Error("Ti padna apito");
    // }

    document.getElementById("jokes-container").innerHTML = data.value;
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("joke").addEventListener("click", getJoke);

const URL = "https://swapi.py4e.com/api/people/1";

async function fetchStarwars(url) {
  const response = await fetch(url);
  const data = await response.json();

  document.body.innerHTML = `
    Name: ${data.name}, Height: ${data.height}, Weight: ${data.mass}
  `;

  console.log(data);
}

document.addEventListener("DOMContentLoaded", async () => {
  await fetchStarwars(URL);
});
