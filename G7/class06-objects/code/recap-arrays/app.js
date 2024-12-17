console.log("The great array recap");

let games = ["Counter Strike", "Dota 2", "Path of Exile"];

console.log(games[games.length - 1]);

games.push("Soldier of Fortune");

// console.log(games);

games.pop();

// console.log(games);

games.unshift("Super Mario Bros");

console.log(games);

games.shift();

games[1] = "Counter Strike Source";

games.push(
  "World of Warcraft",
  "The Witcher",
  "Grand Theft Auto V",
  "God of War"
);

console.log(games);

//Loop over games

//while
function loopWhile() {
  let count = 0;
  while (count < games.length) {
    console.log(games[count]);
    count++;
  }
}
// loopWhile();

//for
function loopFor() {
  for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
  }
}
// loopFor();

//for of
function loopForOf() {
  for (let game of games) {
    console.log(game);
  }
}
loopForOf();
