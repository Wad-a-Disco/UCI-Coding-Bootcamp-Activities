// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
const newSongs = [...songs];
// The spread operator (...) is being used here to create a shallow copy of the 'songs' array and assign it to the 'newSongs' variable.

// TODO: What do you expect to be logged in the console?
console.log(newSongs);
// The 'newSongs' array, which is a copy of the 'songs' array, will be logged to the console. It will contain the same elements as the 'songs' array.

// Exercise 2
const addition = (x, y, z) => {
const array = [x, y, z];
// TODO: What does the reduce() method do?
return array.reduce((a, b) => a + b, 0);
};
// The reduce() method is used to apply a function to each element of an array, resulting in a single output value. In this case, it sums up all the elements of the 'array' using the arrow function (a, b) => a + b as the reducing function. The initial value for the reduction is set to 0.

// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));
// The sum of the numbers 1, 2, and 3 will be logged to the console, which is 6.

// TODO: What is this syntax that is being used as the parameter?
const additionSpread = (...array) => {
return array.reduce((a, b) => a + b, 0);
};
// This syntax (...array) is called the rest parameter syntax. It allows the function 'additionSpread' to accept any number of arguments and store them as an array called 'array'.

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));
// The sum of the numbers 1, 2, and 3 will be logged to the console, which is 6.

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
// The sum of the numbers 1, 2, 3, 4, and 100 will be logged to the console, which is 110.

// Bonus Question: Answered
/**
 * The spread operator and rest parameters can be used with various data types in JavaScript, including:
 * 1) Arrays: The spread operator can be used to create a shallow copy of an array or merge multiple arrays together. 
 *    Rest parameters can be used to collect multiple function arguments into an array.
 * Example:
const array1 = [1, 2, 3];
const array2 = [...array1]; // Shallow copy of array1
const mergedArray = [...array1, 4, 5, 6]; // Merge arrays
console.log(array2); // [1, 2, 3]
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

function myFunction(...args) {
  console.log(args);
}

myFunction(1, 2, 3); // [1, 2, 3]

 * 2) Objects: Although the spread operator cannot directly be used on objects, 
 *    it can be used to shallow copy object properties into a new object or merge multiple objects together.
 * Example:
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // Shallow copy of obj1
const mergedObj = { ...obj1, c: 3, d: 4 }; // Merge objects
console.log(obj2); // { a: 1, b: 2 }
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

 * 3) Strings: The spread operator can be used on strings to convert them into an array of characters.
 * Example:
const str = 'Hello';
const chars = [...str]; // Convert string to an array of characters
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

 * 4) Sets and Maps: The spread operator can be used to convert sets and maps into arrays.
 * Example:
const set = new Set([1, 2, 3]);
const arrayFromSet = [...set]; // Convert set to an array
console.log(arrayFromSet); // [1, 2, 3]

const map = new Map([['a', 1], ['b', 2]]);
const arrayFromMap = [...map]; // Convert map to an array
console.log(arrayFromMap); // [['a', 1], ['b', 2]]
 */