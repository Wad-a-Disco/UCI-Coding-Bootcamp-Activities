const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
/**
The map() function is used to create a new array called tripledArray by iterating over each element in the originalArray and applying 
an arrow function to it. The arrow function multiplies each number by 3 and returns the result. The map() function collects all the 
returned values and creates a new array with those values. Therefore, the value of tripledArray will be [3, 9, 6, 15, 30].
 */
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
/**
The map() function is used to create a new array called oddOrEven by iterating over each element in the originalArray and applying 
an arrow function to it. The arrow function checks if each number is divisible by 2 (i.e., even) or not. If the number is even, the
function returns the string 'even', and if it's odd, the function returns the string 'odd'. The map() function collects all the 
returned values and creates a new array with those values. Therefore, the value of oddOrEven will be 
['odd', 'odd', 'even', 'odd', 'even'].
 */
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
