// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables
// Exercise 1. Simply declare a variable named 'emptyVariable'

let emptyVariable 
console.log(emptyVariable);

// Exercise 2. Declare a variable called 'myName'

let myName

// Exercise 3. Assign your name as the value for 'myName'

myName = "Whitney-Rene";
console.log(myName);

// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.

let dreamDestination = "Spain";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10

let num1 = 8;
let num2 = 10;


// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?

// The value of num 2 can include numbers 1 & 10.  The value of num 1 cannot inlcude numbers 1 & 10.

// Exercise 7. Now we will try some addition.
// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.

num1 = 4;
num2 = 6; 
let theSum = num1 + num2;
console.log(theSum);

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.

let theProduct = num1 * num2;
console.log(theProduct);

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"

let statement = "Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination + "!";
console.log(statement);

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

const myAnswerForExercise10 = "string";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

const myAnswerForExercise11 = "number";

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "undefined";

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";
let thirteen = B + C;
console.log(thirteen);

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";
let fourteen = A + "n" + D;
console.log(fourteen);

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";
//Not sure how that happens?
let fifteen = A + B * 2 + D + C / 2;
console.log(fifteen);

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN/Not a Number";

// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "boolean";

// Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";

// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";

// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";
console.log(1<2<3);

// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "false";
//I do not understand why this is "true" and not "false"?
console.log(2<1<3)

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//gI found these exercises quite easy.  For exercises 15 & 22, I could not make sense of why the answer.  
//I will ask my mentor.  I used google and console.log.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
