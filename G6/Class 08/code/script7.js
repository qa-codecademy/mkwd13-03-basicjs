// 7. Write a simple JavaScript program to join all elements of the an array into a string. The array should have at least 5 elements.
// ["apple", "banana", "orange", "strawberry", "kiwi"]
// ==> "apple banana orange strawberry kiwi"

function joinedArray(array) {
  let joinedString = "";
  for (let i = 0; i < array.length; i++) {
    joinedString += array[i];

    if (i < array.length - 1) {
      joinedString += ", ";
    }
  }
  return joinedString;
}

const fruits = ["apple", "banana", "orange", "strawberry", "kiwi"];
// console.log(joinedArray(fruits));

// By using join() method
let joinedString2 = fruits.join(", "); //add a separator
console.log(joinedString2);
