console.log('Connected');

let comedyMovie = "Mr.Bean";
console.log(comedyMovie);

comedyMovie = "Some Comedy"; //RE-ASSIGN THE VALUE OF THE VARIABLE
console.log(comedyMovie);

let FirstName = "Bob";

// WON'T THROW ERROR, BUT IT IS BAD PRACTICE
fullName = "John Doe";
console.log(fullName);

// CONST
const personTwo = "Bob Bobski";
console.log(personTwo);

// IMPORTANT: WE CANNOT RE-DECLARE THE VALUE OF THE VARIABLE
// DECLARED WITH THE KEYWORD CONST;

// personTwo = "Gjorge Dimitrov";
// console.log(personTwo);

/** VERSION 1
 *  ** LETTER COUNTER **
 *  
 * 1. Create new function named letterCounter => DONE
 * 2. Declare a string value in the function named "stringToCount" => DONE
 * 3. the variable stringToCount should have the value "John Wick" => DONE
 * 4. count the letter of the string => DONE
 * 5. log the count => DONE
 * 
 */

function letterCounter(stringToCount){
    let countOfLetter = stringToCount.length;

    console.log(countOfLetter)
}

letterCounter("John Wick")
letterCounter("Harry Potter and the Half blood prince");
letterCounter("Lord of the Rings");

// Sum numbers up to given number (Factoril)
// 5 => 1 + 2 + 3 + 4 + 5 = 15;
// 3 => 1 + 2 + 3 = 6;

/**
 * 1. Create a function named sumToNumber => DONE
 * 2. The function should accept one parameter that will be of type number => DONE
 * 3. Create a variable that will hold the sum result, the initial value will be 0 => DONE
 * 4. Iterate through each number; up to the provided number that is the parameter => DONE
 * 5. On each iteration add to the result variable => DONE
 * 6. Each number of the CURRENT ITERATION SHOULD BE ADDED IN THE RESULT VAR. => DONE
 * 7. Print the result => DONE
 */

// STEP 1 & STEP 2
function sumToNumber(numberToBeCounted){
    // STEP 3
    let sumResult = 0;

    // STEP 4
   // (LET ITERATOR; CONDITION; INCREMENT/DECREMENT ITERATOR){WHAT THIS LOOP WILL DO}
    for(let i = 0; i <= numberToBeCounted; i++ ){
        console.log('Each Number: ', i)
        sumResult += i; // STEP 4, 6

    } // END OF THE LOOP

    // console.log(sumResult)

    return sumResult // STEP 7
}


let resultOne = sumToNumber(5);
console.log(resultOne);

let resultTwo = sumToNumber(3);
console.log(resultTwo);

// WRITE A FUNCTION THAT WILL RETURN A NEW FILTERED ARRAY, AND THE WORDS IN THE NEW ARRAY MUST START WITH VOWEL

// filterVowelsWords([false, true, 4, "orange", "pineapple", "pizza", "oreos", "apple"]) => ["orange, oreos", "apple"]

/**
 * 1. Create a function named filterVowelsWords => DONE
 * 2. Accept 1 parameter that is array of values => DONE
 * 3. create a new variable that will hold the end result (filtered array) => DONE
 * 4. the default value of the variable will be empty array [] => DONE
 * 5. iterate the array, so we will iterate though the values => DONE
 *    5.1 execute the code in the loop only for values of DATA TYPE string => DONE
 * 6. check/validate if the first letter of the ELEMENT OF THAT ITERATION is vowel => DONE
 * 7. if check is valid push the element in the new array => DONE
 * 8. return the final result => DONE
 */


// NON REFACTORED, USED STEP BY STEP
// function filterVowelsWords(arrayOfMixedValues){
//     let filteredArray = []


//     for(let i = 0; i < arrayOfMixedValues.length; i++){
//         if(typeof arrayOfMixedValues[i] === "string"){
//             let firstLetterOfWord = arrayOfMixedValues[i][0]; // PRVATA BUKVA OD ZBOROT
//             // arrayOfMixedValues[i] CONSUMES THE WORD
//             // arrayOfMixedValues[i][0] CONSUMES THE FIRST LETTER OF THE WORD
//             if(firstLetterOfWord.toLowerCase() === "a" 
//             || firstLetterOfWord.toLowerCase() === "e" 
//             || firstLetterOfWord.toLowerCase() === "i" 
//             || firstLetterOfWord.toLowerCase() === "o" 
//             || firstLetterOfWord.toLowerCase() === "u"){
//                 filteredArray.push(arrayOfMixedValues[i])
//             }
//         }
//     }

//     return filteredArray

// }
// let mixedArray = [false, true, 4, "orange", "pineapple", "pizza", "Oreos", "apple"];
// let filteretedValues = filterVowelsWords(mixedArray);
// console.log(filteretedValues)



// THIS IS PART OF REFACTORING
function isLetterVowel(firstLetterOfWord){
    const isVowel = firstLetterOfWord.toLowerCase() === "a" 
    || firstLetterOfWord.toLowerCase() === "e" 
    || firstLetterOfWord.toLowerCase() === "i" 
    || firstLetterOfWord.toLowerCase() === "o" 
    || firstLetterOfWord.toLowerCase() === "u";


    return isVowel
}

function filterVowelsWords(arrayOfMixedValues){
    let filteredArray = []


    for(let i = 0; i < arrayOfMixedValues.length; i++){
        if(typeof arrayOfMixedValues[i] === "string"){
            let firstLetterOfWord = arrayOfMixedValues[i][0]; // PRVATA BUKVA OD ZBOROT
            // arrayOfMixedValues[i] CONSUMES THE WORD
            // arrayOfMixedValues[i][0] CONSUMES THE FIRST LETTER OF THE WORD
            if(isLetterVowel(firstLetterOfWord)){
                filteredArray.push(arrayOfMixedValues[i])
            }
        }
    }

    return filteredArray

}

let mixedArray = [false, true, 4, "orange", "pineapple", "pizza", "Oreos", "apple"];

let filteretedValues = filterVowelsWords(mixedArray);

console.log(filteretedValues);

console.log('*** OBJECTS ***');

let bookOne = {
    // KEY:VALUE (PAIR)
    name: "Harry Potter",
    genre: "Fantasy",

    // 1st WAY (WRONG)
    // movieInfo: function(){
    //     const info = `Movie name is: ${bookOne.name} and of genre: ${bookOne.genre}`;
    //     console.log(info)
    // }

     // 2nd WAY (BEST)
     /**
      * this.name means => NAME PROPERTY OF THIS (OVOJ) OBJECT
      * this.genre means => GENRE PROPERTY OF OVOJ (THIS) OBJECT
      */
    movieInfo: function(){
        const info = `Movie name is: ${this.name} and of genre: ${this.genre}`;
        console.log(info)
    }
};


console.log(bookOne);

// DOT NOTATION
console.log(bookOne.name)

// KEY NOTATION
console.log(bookOne["genre"])

bookOne.movieInfo()

console.log("*** CONSTRUCTOR FUNCTION ***");

// KALAP ZA OBJECT
function Book(nameValue, genreValue){
    this.name = nameValue,
    this.genre = genreValue

    this.movieInfo = function () {
        const info = `Movie name is: ${this.name} and of genre: ${this.genre}`;
        console.log(info)
    }
};

let bookTwo = new Book("Lord of the rings", "Fantaasy");
let bookThree = new Book('The Bible', 'Holy');
let bookFour = new Book('Dune', 'Fantasy/Action');

console.log(bookTwo)
console.log(bookTwo.name)
bookTwo.movieInfo()

console.log(bookThree)

console.log(bookFour)
