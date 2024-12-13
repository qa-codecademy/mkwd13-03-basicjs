# Exercises

# Task 0: Create an array
Create a function that takes an number and creates array with all numbers till that number.
### Examples
```sh
createArray(5) ➞  [1, 2, 3, 4, 5]
createArray(10) ➞  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
createArray(-5) ➞  []
```
### Notes
* Don't forget to return the result.

# Task 1: Return the First Element in an Array
Create a function that takes an array and returns the first element.
### Examples
```sh
getFirstValue([1, 2, 3]) ➞ 1
getFirstValue([80, 5, 100]) ➞ 80
getFirstValue([-500, 0, 50]) ➞ -500
```
### Notes
* Don't forget to return the result.
* The first element in an array always has an index of 0.
* Thry using the build in function [Shift]


# Task 2: Reverse an Array
Write a function to reverse an array.
### Examples
```sh
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
reverse([]) ➞ []
```
### Notes
* Don't forget to return the result.

# Task 3: Find the Index 
Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
### Examples
```sh
search([1, 2, 3, 4], 3) ➞ 2
search([2, 4, 6, 8, 10], 8) ➞ 3
search([1, 3, 5, 7, 9], 11) ➞ -1
```
### Notes
* If the item is not present, return -1.
* Try using the build in function [IndexOf]

# Task 4: Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.
### Examples
```sh
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false
```
### Notes
* Don't forget to return the result.

# Task 5: Negate the Array of Numbers
Given an array of numbers, negate all elements contained within.
* Negating a positive value -+n will return -n, because all +'s are removed.
* Negating a negative value --n will return n, because the first - turns the second minus into a +.
* 
### Examples
```sh
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
negate([]) ➞ []
```
### Notes
* Don't forget to return the result.
* If you get an empty array, return an empty array: []

# Task 6: Difference of Max and Min Numbers in Array
Create a function that takes an array and returns the difference between the biggest and smallest numbers.
### Examples
```sh
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.
```
### Notes
* Don't forget to return the result.
* Try using [Infinity] and [-Infinity]

# Task 7: Multiply by Length
Create a function to multiply all values in an array by the amount of values in that array.
### Examples
```sh
MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
MultiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
MultiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
MultiplyByLength([0]) ➞ ([0])
```
### Notes
* Don't forget to return the result.
* Try using array [Length] as a multiplier

# Task 8: Hurdle Jump
Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
### Examples
```sh
hurdleJump([1, 2, 3, 4, 5], 5) ➞ true
hurdleJump([5, 5, 3, 4, 5], 3) ➞ false
hurdleJump([5, 4, 5, 6], 10) ➞ true
hurdleJump([1, 2, 1], 1) ➞ false
```
### Notes
* Don't forget to return the result.
* Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

# Task 9: Generate a Countdown of Numbers in an Array
Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

### Examples
```sh
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
countdown(1) ➞ [1, 0]
countdown(0) ➞ [0]
```
### Notes
* Don't forget to return the result.
* The argument will always be greater than or equal to zero.

# Task 10: Odd Up, Even Down
Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.
### Examples
```sh
transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]
transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]
transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]
```
### Notes
* Don't forget to return the result.

[Shift]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift>
[IndexOf]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf>
[Infinity]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity>
[-Infinity]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity>
[Length]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length>


