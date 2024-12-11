//AND
console.log("==========AND=========");
console.log(true&&true); //true
console.log(true&&false); //false
console.log(false&&true); //false
console.log(false&&false); //false

//OR
console.log("========OR=======");
console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false

//Negation
console.log("======Negation=======")
console.log(!true); //false
console.log(!false); //true

console.log("======Examples=======")
let comp1 = 5 > 4; //true
let comp2 = 3!=3; //false  //this is negation of ==

let andResult = comp1 && comp2; // true && false -> false
console.log(andResult);

let orResult = comp1 || comp2; // true || false -> true
console.log(orResult);

let comp3 = 5 !== "5"; //true  //this is negation of ===
console.log(comp3);

let expression = comp1 || comp2 || comp3; // true || false || true - > true


let negationCat = !"Cat"; //negation of a truthy value returns false
console.log(negationCat); 

let doubleNegationCat = !!"Cat"; //negation of negation a truthy value returns true
console.log(doubleNegationCat); 

let secondNegation = !0; //negation of a falsy value return true
console.log(secondNegation);

console.log("====comparison of strings=====");
console.log("abc" < "cbd"); //alphabetical comparison, a is before c -> true
console.log("4" < "12"); //alphabetical comparison, 4 is after 1 -> false