// split()
// Use .split() to break a string into an array and .join() to join it back.
const paragraph =
  "JavaScript is amazing. It is varsatile and powerful. Developers love it!";
const sentences = paragraph.split("."); // add separator
console.log(sentences);

// toUpperCase() and toLowerCase()
// Convert strings to uppercase or lowercase.
const greeting = "Hello World";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// length
// Find the length of a string.
const lectureName = "  Basic JavaScript  "; // it counts the whitespaces too
console.log(lectureName.length);

// trim()
// trims the whitespaces at the beginning and at the end of the string
const username = "          myUsername             ";
console.log(username);
const trimmedUsrname = username.trim();
console.log(trimmedUsrname);

// charAt()
// Access a specific character in a string using its index.
const phrase = "My name is Aneta";
console.log(phrase.charAt(0));
console.log(phrase.charAt(5));
console.log(phrase.charAt(100));
