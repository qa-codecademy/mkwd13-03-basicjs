let arr = []; // empty array
let arr1 = [1, 2, 3, 4, 5]; // array with numbers
let names = ["Trajan", "Filip"];

// get value
let element = arr1[1];
// console.log(element);

// set value
arr1[1] = 101;
// console.log(arr1[1]);

let lengthOfArray = arr1.length;
// console.log(lengthOfArray);

// console.log(arr[100]);

let numbers = [1, 2, 3, 4, 5];
// adding element using length
numbers[numbers.length] = 6;
numbers[numbers.length] = 10;
// console.log(numbers);

// adding element using push
numbers.push(101);

// adding elements using push
numbers.push(1, 2, 3);
// console.log(numbers);

// adding elements at the beging of the array using unshift
numbers.unshift(1234);
// console.log(numbers);

numbers.unshift(200, 201, 202);
// console.log(numbers);

// removing elements from the end of the array
let lastElement = numbers.pop();
console.log(lastElement);
console.log(numbers);

// removing elements from the begining of the array
let firstElement = numbers.shift();
console.log(firstElement);
console.log(numbers);