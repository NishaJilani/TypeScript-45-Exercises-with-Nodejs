// define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","Banana","Orange"];

// test for equality and unequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");

// Test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

// Test using lowercase function
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//numerical test
console.log("\nIs ten is equal to twenty");
console.log(ten == twenty); 

console.log("\nIs ten is  not equal to twenty");
console.log(ten != twenty); 

// numerical test greater than and less than
console.log("\nIs ten is greater than twenty");
console.log(ten > twenty); 

console.log("\nIs ten is less than twenty");
console.log(ten < twenty); 

// numerical test greater than or equal to, and less than or equal to
console.log("\nIs ten is greater than or equal to twenty");
console.log(ten >= twenty); 

console.log("\nIs ten is less than or equal to twenty");
console.log(ten <= twenty); 

// tests using "and" and "or" operators

// using && (and)
console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10); 

console.log("\nIs twenty is equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30); 

// using || (or)
console.log("\n20 is greater than 50 OR  20 is equal to 20");
console.log(twenty > 50 || twenty == 20); 

console.log("\n20 is greater than 50 OR  20 is not equal to 20");
console.log(twenty > 50 || twenty != 20); 

// Test whether an item is in a array
console.log("\nIs Orange include in my fruits array");
console.log(fruits.includes("orange"));

// not include
console.log("\nIs Orange not include in my fruits array");
console.log(!fruits.includes("orange"));



