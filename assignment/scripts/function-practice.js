console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // end hello

// Call the function to test
console.log('Test - should say "Hello World!"', hello());
hello();
// we are simply calling the funciton


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello Alex';
}// end helloName
// Remember to call the function to test
console.log(helloName());
// end helloName


// we are mostly just entering text and calling the function here


// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
   return firstNumber + secondNumber;
}
addNumbers();
console.log('here we are adding two numbers', addNumbers(2222, 3333))
//we defined firstNumber and secondNumber then put them in a function to add them together

// 4. Function to multiply three numbers & return the result

function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
multiplyThree();
console.log('here we are maltiplying three numbers', multiplyThree(2222, 3333, 7777))

//we reused first and second number to save space then defined a third number to maltiply them all together for the funtion

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true
  }
  if (number <= 0)
    return false;
}

isPositive();
console.log('is it posative or is it zero or lower?', isPositive(9283475));
console.log('is it posative or is it zero or lower?', isPositive(-234));
console.log('is it posative or is it zero or lower?', isPositive(0));
// might need to work on 5
// not sure how to make it unreachable code
// might have fixed it



// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));
// I dont yet know how to do this come back to it ******************************************

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0){
    return undefined;
    }  else {
    return array[array.length - 1];
  }
}
// this one may also need some work******************************************

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  return array.includes(value);
} // ill watch a video to try and figure this one out
//I know i used the function includes but its a placeholder for now

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}