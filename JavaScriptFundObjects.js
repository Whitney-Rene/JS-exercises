// TASK 1: Write the code, one line for each action:

// Create an empty object user.
let user = new Object();
console.log(user);
// Add the property name with the value John.
user.name = "John";
console.log(user);
// Add the property surname with the value Smith.
user.surname = "Smith";
console.log(user);
// Change the value of the name to Pete.
user.name = "Pete";
console.log(user);
// Remove the property name from the object.
delete user.name;
console.log(user);

// TASK 2: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.


function isEmpty(obj){
   for(let key in obj){
    if(key in obj === undefined){
        return false
    }
   }
   return true
}

function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


//TASK 3:We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

function getSum(obj){
    let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }
    return sum
}
console.log(getSum(salaries));

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390

// const sum = salaries.John + salaries.Ann + salaries.Pete;
// console.log(sum);
// If salaries is empty, then the result must be 0.

//TASK 4: Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj){
    for(let key in obj){
    if(typeof obj[key] === "number"){
        obj[key] *= 2;
    }
}
}

//For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
//P.S. Use typeof to check for a number here.