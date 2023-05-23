const addGreetingMessage = (name) => {
  let message = 'How are you?';

  if (name.length > 0) {
    let greeting = 'Hello ' + name;
    console.log(greeting);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

const calloutCounter = () => {
  const callout = 'Outside of the loop';
  let counter = 5;

  while (counter > 0) {
    let innerCallout = 'Inside the loop';
    console.log(counter, innerCallout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for (let j = 0; j < line.length; j++) {
      const element = line[j];
      console.log(element);
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);


// Hint Question: Answer
/**
 * When a variable is block-scoped, it means that the variable is only accessible within the 
 * block of code where it is defined. A block is typically defined by a pair of curly braces '{}'
 * and can include statements, functions, loops, conditional statements, etc.
 * 
 * In JavaScript, variables declared with 'let' and 'const' are block-scoped. This means that  
 * their scope is limited to the block of code in which they are declared. Once you exit the block,
 * the variable is no longer accessible or visible.
 * 
 * Here's an example to illustrate block scope:
 * function exampleFunction() {
  if (true) {
    let blockScopedVariable = 'Inside the block';
    console.log(blockScopedVariable);  // Output: Inside the block
  }

  console.log(blockScopedVariable);  // Error: blockScopedVariable is not defined
}

exampleFunction();
 * In the above example, the variable 'blockScopedVariable' is declared inside the 'if'
 * block. It is only accessible within that block. If we try to access it outside the block, as shown 
 * in the second 'console.log' statement, it will result in an error because the variable is out 
 * of scope.
 * 
 * Block scoping is beneficial as it helps to prevent variable name clashes and allows for better 
 * control over variable access and visibility. It encourages writing more maintainable and 
 * reliable code by reducing the chances of accidental variable pollution or unintended side 
 * effects.
 */

// Bonus Question: Answer
/**
 * Function scope and block scope are two different ways in which variables can be scoped in JavaScript.
 * 1) Function Scope:
 *      Function scope means that variables are accessible within the function in which they are defined, 
 *      as well as any nested functions.
 *      Variables declared with 'var' keyword or declared without any explicit keyword 
 *      (creating an implicit global variable) have function scope.
 *      Variables with function scope are not accessible outside the function or nested 
 *      functions in which they are defined.
 *      Example:
 *      function exampleFunction() {
          var functionScopedVariable = 'Inside the function';

          function nestedFunction() {
            console.log(functionScopedVariable);  // Accessible here
          }

          nestedFunction();
          console.log(functionScopedVariable);  // Accessible here
        }

exampleFunction();
console.log(functionScopedVariable);  // Error: functionScopedVariable is not defined

 * 
 * 2) Block Scope:
 *      Block scope means that variables are accessible within the block of code in which they 
 *      are defined.
 *      Variables declared with 'let' and 'const' keywords have block scope.
 *      Block scope is more fine-grained than function scope as it allows for variable visibility 
 *      within blocks such as loops, conditional statements, and any other blocks defined by 
 *      curly braces '{}'.
 *      Variables with block scope are not accessible outside the block in which they are 
 *      defined.
 *      Example:
 *      function exampleFunction() {
        if (true) {
          let blockScopedVariable = 'Inside the block';
          console.log(blockScopedVariable);  // Accessible here
        }

        console.log(blockScopedVariable);  // Error: blockScopedVariable is not defined
}

exampleFunction();

 * 
 * In summary, function scope pertains to variables that are accessible within the function and 
 * any nested functions, while block scope pertains to variables that are accessible within the
 * specific block of code where they are defined, such as loops, conditional statements, or any 
 * other blocks defined by curly braces.
 */