// Total possible marks for 4 subjects
var totalMarks = 400;

// Collecting user input for each subject's marks
var sub1 = Number(prompt("Enter Your English Marks (out of 100)"));
var sub2 = Number(prompt("Enter Your Mathematics Marks (out of 100)"));
var sub3 = Number(prompt("Enter Your Chemistry Marks (out of 100)"));
var sub4 = Number(prompt("Enter Your Physics Marks (out of 100)"));

// Calculate total obtained marks
var obtainedMarks = sub1 + sub2 + sub3 + sub4;

// Display grade for each subject
if (sub1 > 90) {
    alert("Your Grade in English is A");
}
if (sub2 > 70) {
    alert("Your Grade in Mathematics is B");
}
if (sub3 > 50) {
    alert("Your Grade in Chemistry is C");
}
if (sub4 < 30) {
    alert("You have failed in Physics");
}

// Check for failure in any subject (marks < 30)
if (sub1 < 30 || sub2 < 30 || sub3 < 30 || sub4 < 30) {
    alert("You have failed in one or more subjects.");
} else {
    alert("You have passed all subjects.");
}

// Calculate percentage of total obtained marks
var percentage = (obtainedMarks / totalMarks) * 100;

// Display the obtained marks and percentage in the console
console.log("Total Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");