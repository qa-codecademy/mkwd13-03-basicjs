// let counter = 0;

// while (counter < 10) {
//     console.log(counter);
//     counter += 1;
// }

// let names = ["Trajan", "Filip", "Bob", "Jill", "Pero"];
// let index = 0;

// while (index < names.length) {
//     console.log(names[index]);
//     index += 1;
// }

// console.log("Outside of the loop");


// let numberOfValues = 10;
// let counter = 0;
// let values = [];

// while (counter < numberOfValues) {
//     let input = prompt("Vnesi vrednost");
//     values.push(input);
//     counter += 1;
// }
// console.log("Finished entering");
// counter = 0;

// while (counter < values.length) {
//     console.log(values[counter]);
//     counter += 1;
// }
// console.log("Finished printing");



// let result = 0;
// let i = 101;
// while (i <= 150) {
//     result += Math.pow(i, 2);
//     //result = result + Math.pow(i, 2);
//     i++;
// }
// console.log(result);

function digitsInNumber(number) {
    console.log(`Input number is: ${number}`);

    while (number > 0) {
        let cifra = number % 10;
        console.log(cifra);

        number = parseInt(number / 10);
        console.log(`Input: ${number}`);
    }
}

digitsInNumber(123456789);
digitsInNumber(1231231423443543);
