console.log("start");

// classic named function definition
function a(param) {
  console.log("normal function " + param);
}
// a function call
a("stef");

// expression function / anonym function
// to use latter on the function you must store it in a variable/constant/parameter
const anonym = function(param) {
  console.log("anonym function " + param);
};

anonym("maria");

// arrow function is a anonymous/expression function
const arrow = (param1, param2) => {
  console.log("First name: " + param1 + "; Last name: " + param2);
};

const arrowFunctionResult = arrow("Diana", "Oprean");
// because the "arrow" function didn't had a the return statement then the result of the function call is "undefined";
console.log(arrowFunctionResult);

// classic function with a return statement
function addFunctionSimple(operator1, operator2) {
  return operator1 + operator2;
}

//arrow function which return something
// if the return expression can be written in one expression like below then by not using curly brackets you can return something from the function without the return key word
const addFunction = (operator1, operator2) => operator1 + operator2;

const addResult = addFunction(2, 3);
console.log(addResult);

// --- below are a couple of variation of how you can write the instructions for taking an array and double its elements
// this example start from the most basic/naive mode of writing to the most compact form

// this is the initial array
const array = [1, 2, 3];

// you will need a empty array were you will store the new array
let arrayResult = [];
//use classic for loop for the iteration through the original array
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  arrayResult[i] = element * 2;
}
console.log(arrayResult);

let arrayResultForOf = [];
// "for of" will iterate through the array an will store every value of the source array in "element" constant at every iteration
// "for of" knows that when the last value is stored in "element" the loop should stop
for (const element of array) {
  //because we don't have the index like in the example above we will use the method on array push to put new results in the new array
  arrayResultForOf.push(element * 2);
}
console.log(arrayResultForOf);

// by using map on array we can achieve same result
// map is method that iterate through a array and result in a new array.
// map takes as an argument as a function that is called upon every iteration
// the result of the function called inside map will be the result value of every new element in the new array

function double(element) {
  return element * 2;
}

// you can declare the function separately and use it in the map method
const arrayResultMap = array.map(double);
console.log(arrayResultMap);

// you can use directly a anonymous function and pass it into the map method
const arrayResultMapAnonym = array.map(function(element) {
  console.log(element);
  return element * 2;
});
console.log(arrayResultMapAnonym);

// you can use an arrow function for the map method parameter
const arrayResultMapArrowCurly = array.map(element => {
  if (element === 2) return element;
  return element * 2;
});
console.log(arrayResultMapArrowCurly);

// this is is the most compact way transforming an array into a new form for this case example
const arrayResultMapArrowNoCurly = array.map(element => element * 2);
console.log(arrayResultMapArrowNoCurly);

// ---- arrow function keeps the "this" context of were it is defined
// the easier way to see the difference is with callback functions
// we will print the "this" with a normal anonymous callback function and one with an arrow function;
// checkout the console for what "this" is when you press a key on the input
class PrintFromInput {
  constructor() {
    this.setEventOnChange();
  }

  setEventOnChange() {
    document.getElementById("input").addEventListener("keydown", function() {
      console.log(this);
    });
    document.getElementById("input").addEventListener("keydown", () => {
      console.log(this);
    });
  }
}

new PrintFromInput();
