// Get the command-line arguments
const args = process.argv.slice(2);
const arg1 = args[0];
const arg2 = args[1];

// Compare the arguments
const areEqual = arg1 === arg2;

// Output the result
console.log(areEqual);

// Hint Question: Answer
/**
 * 1) Using array destructuring:
const [arg1, arg2] = process.argv.slice(2);
const areEqual = arg1 === arg2;
console.log(areEqual);
 * This approach uses array destructuring to directly assign the command-line arguments to 'arg1' and 'arg2' variables.
 * 
 * 2) Using a function: 
function compareArguments(arg1, arg2) {
  return arg1 === arg2;
}

const args = process.argv.slice(2);
const areEqual = compareArguments(...args);
console.log(areEqual);
 * Here, we define a separate function compareArguments that takes two arguments and returns true if they are equal. 
 * We then call this function passing the command-line arguments using the spread operator (...).
 * 
 * 3) Using the process.argv array directly:
const areEqual = process.argv[2] === process.argv[3];
console.log(areEqual);
 * In this approach, we directly compare process.argv[2] and process.argv[3] without using any intermediate variables.
 */

// Bonus Question: Answer
/**
 * In JavaScript, there are two comparison operators for equality: == (loose equality) and === (strict equality). 
 * Here's the difference between them:
 * 
 * == (Loose Equality):
 * The loose equality operator performs type coercion if necessary before comparing the values. 
 * It allows values of different types to be considered equal by converting them to a common type. For example:
console.log(1 == '1'); // true
console.log(true == 1); // true
console.log(null == undefined); // true
 * In the examples above, the loose equality operator converts the operands to a common type (in this case, strings and numbers) 
 * before comparing them. This can sometimes lead to unexpected results if you're not careful.
 * 
 * === (Strict Equality):
 * The strict equality operator, also known as the identity operator, does not perform type coercion. 
 * It requires both the value and the type to be identical for the comparison to be true. For example:
console.log(1 === '1'); // false
console.log(true === 1); // false
console.log(null === undefined); // false
 * In these examples, the strict equality operator compares the values and types of the operands directly. 
 * If either the value or the type is different, the comparison evaluates to false.
 * 
 * In general, it is recommended to use the === operator (strict equality) in JavaScript because it avoids unexpected type coercion. 
 * It provides a more precise and predictable way of comparing values. However, there may be cases where the loose equality operator 
 * (==) is more suitable, depending on the specific requirements of your code.
 * 
 * It's worth noting that both == and === have their use cases, and understanding the differences between them helps in 
 * writing correct and bug-free code.
 */