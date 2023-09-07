// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
// This line of code changes the value of string to ALL lower case letter. Empty paranthesis program the print out to go through and return same given value.

"Hello World".includes("Hello");
// This method is being called on string "Hello World" and cheking if it includes "Hello". 
// Since it does contain then `true` will be the return value.

"Hello World".endsWith("Hello");
// Above line of code is checking the "Hello World" string and will assign it to boolean false if string ends with "Hello"

"Hello World".endsWith("rld");
// This method is checking if string is equal to string value. That it will return true or false depending on input.


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// toLowerCAse method is calling varibale ingredient, that stores value "WATER" and printing out ALL Of the string in lower case
var ingredient = "WATER".toLowerCase();
console.log(ingredient);

// Follwoing line of code declaring a variable named address, storing string "Washington" in it. 
// Method endsWith is calling the string data and passing throught the boolean argument.
// If argument passes as true then we ahould be able to print out value true.
var address = "Washington".endsWith(("n"));
console.log(address);

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// Line of code below calls the pop method on the months array and returns last string in the array.
var months = ["April", "December", "March", "June"].pop();
console.log(months);

// Follwoing line of code declaring a variable named months2, calling the shift built in method on array and returning number of strings.
var months2 = ["January", "July", "February", "May"].shift();
console.log(months2);