// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    console.log("Hi there!");
}
greeting();

var greeting = "Hi there!"

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return "Hi there, " + name + "!";
   }
    console.log(customGreeting("Aigul"));


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson() {
 console.log("Aigul " + "J " + "Beck");

}
greetPerson();

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
  var equal = number * number;
  console.log(equal);
}
  square(3, 3); 

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.



function checkStock(stockQuantity, stockName) {
  if (stockQuantity >= 4) {
    return(stockName + " is stocked");

} else if (stockQuantity >= 1 && stockQuantity <= 3) {
    return(stockName + " -" + " running LOW"); 
 
} else {
    return(stockName + " -" + " OUT of stock!");

}
}
 console.log(checkStock(0, "Salsa"));
  


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"