console.log("=== Student Grade Calculator ===");

let studentName = "Guddi";
let math = 85;
let science = 78;
let english = 92;

let total = math + science + english;
let average = total / 3;

console.log("Student Name:", studentName);
console.log("Math:", math);
console.log("Science:", science);
console.log("English:", english);

console.log("Total Marks:", total);
console.log("Average Marks:", average);

if (average >= 90) {
    console.log("Grade: A");
}
else if (average >= 75) {
    console.log("Grade: B");
}
else if (average >= 60) {
    console.log("Grade: C");
}
else {
    console.log("Grade: Fail");
}