
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

// marks
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
}else if (score >= 60) {
    console.log("Grade: D");
}else{
    console.log("Grade: F");
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


//Atm machine
let amount = 5000;
let widthdrawAmount = 2000;
if (widthdrawAmount <= amount) {
    console.log("Transaction successful. Please collect your cash.");
} else {
    console.log("Insufficient funds. Transaction failed.");
}*/



/*// Loops 
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//decending order
for(let i = 10; i >= 1; i--) {
    console.log(i)
}

// while loop 
let count = 1;
while(count <= 5) {
    console.log(count);
    count++;
}

// do while loop
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5); 

// table of 4 
let number = 4;
for (let i = 1; i <= 10; i++) {
    console.log(number * i);
}

// table of 4  in literactre 
let num = 5;
for(let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

//functions 
//function 
function add(a, b) {
    return a+b;
}
console.log(add(5,10)); 

function greet(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript programming.`);
}
greet("Alice");

// function to calculate the area of a circle
function calculateArea(radius) {
    const pi = 3.14;
    return pi * radius * radius;
}
console.log(calculateArea(5)); 

// function to check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {    
        console.log(`${num} is an even number.`);
    } else {
        console.log(`${num} is an odd number.`);
    }   
}
checkEvenOdd(10);
checkEvenOdd(7); 

// function to find prime numbers
function isPrime(num) {
    if (num <= 1) { 
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }   

    }
    return true;
}   
console.log(isPrime(11));
console.log(isPrime(15)); 


