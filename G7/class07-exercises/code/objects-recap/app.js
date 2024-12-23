console.log("it is working");

//Creating an object

//Literal Notation
let playerOne = {
  name: "Dave",
  health: 1200,
  level: 1,
  damage: 543,
  class: null,
  spells: ["Fireball", "Ice Spike"],
  castSpell: function (spell) {
    if (!this.spells.includes(spell)) {
      console.log(`${this.name} doesn't know how to cast this spell`);
      return;
    }
    console.log(`Player ${this.name} casts ${spell}`);
  },
  takeDamage: function (damage) {
    this.health = this.health - damage;
  },
  levelUp() {
    this.level++;
  },
};

playerOne.class = "Mage";

playerOne.castSpell("Fireball");

// delete playerOne.class
playerOne.class = null;

playerOne.takeDamage(120);

console.log(playerOne.health);

//Constructor Notation
// function Monster(name, level, health, damage) {
//     this.name = name;
//     this.level = level;
//     this.health = health;
//     this.damage = damage;

//     this.attackPlayer = function (playerName) {
//       console.log(
//         `The monster ${this.name} attacks ${playerName} for ${this.damage} damage`
//       );
//     };
//   }
class Monster {
  constructor(name, level, health, damage) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.damage = damage;

    this.attackPlayer = function (playerName) {
      console.log(
        `The monster ${this.name} attacks ${playerName} for ${this.damage} damage`
      );
    };
  }

  attackPlayer(playerName) {
    console.log(
      `The monster ${this.name} attacks ${playerName} for ${this.damage} damage`
    );
  }
}

let orcGrunt = new Monster("Orc Grunt", 2, 500, 45);
let goblinMage = new Monster("Goblin Mage", 15, 300, 250);

console.log(orcGrunt, goblinMage);

orcGrunt.attackPlayer("Bob");
goblinMage.attackPlayer("Bob");
