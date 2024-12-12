let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (let i = 0; i < days.length; i++) {
    console.log(`i: ${i}`);
    console.log(`day: ${days[i]}`);
}

let numbers = [1, 4, 67, 98, 8];

for(let i =0; i< numbers.length; i++){
    console.log(`i: ${i}`);
    console.log(`number: ${numbers[i]}`);
}

for(let num of numbers){
    console.log(`num: ${num}`);
}
console.log("===========Break==============")
//print until Wed, without Wed
for (let i = 0; i < days.length; i++) {
    if(days[i] == 'Wed'){
        break;
    }
    console.log(`day: ${days[i]}`);
}
console.log("===========Continue==============")

//print all days, except Wed
for (let i = 0; i < days.length; i++) {
    if(days[i] == 'Wed'){
        continue;
    }
    console.log(`day: ${days[i]}`);
}


//BONUS EXAMPLE
while(true){  //this is an infinite while loop
    let input = prompt("Please enter an input, or enter n if you want to exit");

    if(input == 'n'){
        break;        //we will exit the infinite while loop with break once the user enters 'n'
    }

    console.log(input);
}


groceries = ["Bread", "Milk", "Butter", "Salad"];
    function checkForItemInGroceriesList(item){
      for(let listItem of groceries) {
        if(listItem === item){ // Check if the item is the inputted item
          console.log(`The item ${item} was found!`);
          return listItem; // return always goes out of the function
        }
      }
      console.log(`There was no ${item} item in the list!`);
      return null; // Will not execute if the previous return is executed
    }
    // Calling the check item function
    let searchedItem = checkForItemInGroceriesList("Butter"); // "Butter"