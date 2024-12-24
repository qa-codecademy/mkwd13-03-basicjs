// 9. Write a function to reverse an array.
// [1, 2, 3, 4, 5] ==> [5, 4, 3, 2, 1]

// create function that will accept an array as a parameter
// create a new empty array
// iterate the input array starting drom the last element
// push evry element to the new array

function reverseArray(array) {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
