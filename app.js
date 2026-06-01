
console.log("Hello, World!");
// 1 Number
let a = 20 
console.log(a);

// 2 String
let name = "John Doe"
console.log(name);

// 3 Boolean
let isStudent = true
console.log(isStudent);

//4 Undefined
let x;
console.log(x);

//5 Null
let y = null; 
console.log(y);


//const 
const pi = 3.14;
console.log(pi);

const language = "JavaScript";
console.log(language);  

console.warn("This is a warning message.");


console.error("This is an error message.");



// operators
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("Sum:", sum);

let difference = num1 - num2;
console.log("Difference:", difference);

let product = num1 * num2;
console.log("Product:", product);

let quotient = num1 / num2;
console.log("Quotient:", quotient);

let remainder = num1 % num2;
console.log("Remainder:", remainder);


// conditional statements
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
}

//voting eligibility
let voterAge = 20;
if (voterAge >= 18) {   
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}   

let days = 3
switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
        default:
        console.log("Invalid day");
}