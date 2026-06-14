
/*console.log("Hello, World!");
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
}



// Loops 
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

//Arrays
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); 


// objects
let person = {
    name: "John Doe",
    age: 30,  
    city: "New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

// dot notation
person.name = "Jane Smith";
console.log(person.name);   

// bracket notation 
person["age"] = 25;
console.log(person.age);    

// adding new property
person.country = "USA";
console.log(person.country);

// deleting a property
delete person.city;
console.log(person.city); // undefined  

// iterating over object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
} */

// nested objects
let student = {
    name: "Alice", 
    age: 20,
    address: {
        street: "123 Main St"   
    },
    hobbies: ["Reading", "Traveling", "Cooking"]
};  

console.log(student.name);
console.log(student.age);
console.log(student.address.street);
console.log(student.hobbies[0]);
console.log(student.hobbies[1]);
console.log(student.hobbies[2]); 

// destructuring assignment
let { name, age } = student;
console.log(name);
console.log(age);

// destructuring nested objects
let { address: { street } } = student;
console.log(street);      

// destructuring arrays
let [hobby1, hobby2, hobby3] = student.hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);    

// spread operator
let newStudent = { ...student, grade: "A" };
console.log(newStudent); 
let newHobbies = [...student.hobbies, "Painting"];
console.log(newHobbies);

// rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(5, 10)); 

// regex
let pattern = /hello/i;
let str = "Hello, World!";
console.log(pattern.test(str)); // true

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "kalyan@gmail.com";
console.log(emailPattern.test(email)); // true



