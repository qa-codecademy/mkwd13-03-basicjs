let grades = [];
let exams = 5;
let passingAv = 8
for (let index = 0; index < exams; index++) {
	let grade = prompt('Enter the grade');
	let number = parseInt(grade);
	grades.push(number);
}
let sum = 0
for (let i = 0; i < grades.length; i++) {
	sum += grades[i]
}
console.log(grades);
console.log(sum)

let average = sum / exams;
if (average <= passingAv) {
	alert("You failed")

} else {
	alert("You pass")
}