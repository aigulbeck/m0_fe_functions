// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?")
}

askForName()
// Modified the code to be readable and more. 
// I think that print out value is more clear when console.log method utilizes separate line.


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
// Added semicolon at the end of the line
// Commented out this line of code `return sum`; Replaced it with console.log method of printing out the value.
  console.log(sum)
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
// func makeFreshPesto(){
  function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
 }

makeFreshPesto();
// In line 33 got typo corrected as well as added syntax between parantheses and curly braces.

//  EX 4:
function average(num1, num2) {
// line 47 was previously used for opening curly braces. Moved it to line above following readibilty rules.
var sum = num1 + num2;
    var avg = sum / 2;

return avg;
  }
console.log(average(3,6));
// Line 54 has been added in order to program print out the final function.