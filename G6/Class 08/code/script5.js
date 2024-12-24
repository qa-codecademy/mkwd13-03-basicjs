// One student has 5 exams in the first semester. Student name is Bob Bobsky.
//    His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively.
//    The professor told the students that for passing the first semester they must have average of 8.
//    The student needs to know whether they have passed the semester or not.
//    Alert on screen if the student pass or not! Print on the screen all of the subjects and the student name aswell.

// create function that will take the grades
// calculate the average value of the grades
// check if the result is greater than 8

// not that good approach
function hasPassedSemester(math, english, science, sport, chemistry) {
  let sum = math + english + science + sport + chemistry;
  let average = sum / 5;
  if (average >= 8) {
    return true;
  }
  return false;
}

// better approach
function hasPassedSemesterBetter(exams) {
  let totalSum = 0;
  for (const exam of exams) {
    totalSum += exam;
  }
  let average = totalSum / exams.length;
  console.log("Average:", average);
  if (average >= 8) {
    return true;
  }
  return false;
}

console.log(hasPassedSemester(10, 6, 8, 9, 6));
console.log(hasPassedSemesterBetter([10, 6, 8, 9, 6]));
