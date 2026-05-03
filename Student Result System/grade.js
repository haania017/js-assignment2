let marks = Number(prompt("Enter your marks (out of 500):"));
let percentage = (marks / 500) * 100;
let grade;
let scholarship = "No";

if (percentage >= 90) {
  grade = "A+";
  scholarship = "Yes";
} 
else if (percentage >= 80) {
  grade = "A";
  scholarship = "Yes";
} 
else if (percentage >= 70) {
  grade = "B";
} 
else if (percentage >= 60) {
  grade = "C";
} 
else if (percentage >= 50) {
  grade = "D";
} 
else {
  grade = "Fail";
}

alert("Grade: " + grade + "\nScholarship: " + scholarship);
