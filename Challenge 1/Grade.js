// a function called Grading that takes in a parameter called marks
function Grading(marks) {
  // Declare a variable called grade which will hold the final grade
  let grade;
  
  // Check if the input value is between 0 and 100 
  if (marks >= 0 && marks <= 100) {
    // If the input value is greater than 79, assign the grade A
    if (marks > 79 && marks <= 100) {
      grade = "A";
    } 
    // If the input value is between 60 and 79  assign the grade B
    else if (marks <= 79 && marks >= 60) {
      grade = "B";
    } 
    // If the input value is between 59 and 49  assign the grade C
    else if (marks <= 59 && marks >= 49) {
      grade = "C";
    } 
    // If the input value is between 40 and 49 (inclusive), assign the grade D
    else if (marks <= 49 && marks >= 40) {
      grade = "D";
    } 
    // If the input value is less than 40, assign the grade E
    else if (marks < 40) {
      grade = "E";
    } 
  } 
 
  else {
    grade = "invalid input";
  }
  
  // Return the final grade
  return grade;
}

// Prompt the user to enter the student's marks 
let marks = prompt("Enter Students marks");

// Call the Grading function 
console.log(Grading(marks));
