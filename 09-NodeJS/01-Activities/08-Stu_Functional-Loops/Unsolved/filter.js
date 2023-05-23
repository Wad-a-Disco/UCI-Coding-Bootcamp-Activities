const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(function(data) {
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be? 
/**
In this example, the filter method is used on the originalArray to create a new array called primeArray. 
The filter method applies the provided function (callback) to each element of the originalArray. 
The callback function, isPrime, is defined separately..

The isPrime function checks whether a number is prime or not. 
It loops through numbers starting from 2 up to one less than the given number (num). 
If the number is divisible by any of the numbers in that range, it returns false. 
Otherwise, it returns true. So, isPrime acts as a condition for the filter method.

The filter method creates a new array by iterating over each element of originalArray. 
It passes each element to the isPrime function. 
If the callback function returns true for an element (indicating that the number is prime), 
that element is included in the resulting array.

Therefore, the primeArray will contain only the prime numbers from the originalArray, which are [2, 5].
 */
const primeArray = originalArray.filter(isPrime);


// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
/**
In this example, the filter method is used again on the originalArray to create a new array called moreThan5Array. 
The filter method applies an arrow function as the callback.

The arrow function (num => num > 5) acts as a condition for the filter method. It checks whether a number is greater than 5. 
If the condition evaluates to true for an element, that element is included in the resulting array.

Therefore, the moreThan5Array will contain only the numbers from originalArray that are greater than 5, which are [10].

After running the code, the outputs will be as follows:
[2, 10]
[1, 3, 2, 5, 10]
 */
const moreThan5Array = originalArray.filter(num => num > 5);

