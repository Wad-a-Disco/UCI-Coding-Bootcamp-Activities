// 1) Where is carNoise stored?
/**
 * The variable carNoise is stored in the global scope.  
 * It is declared using the const keyword and assigned the string value 'Honk'.
 * Being declared in the global scope means that it can be accessed and used throughout the entire code.
 * 
 * In this specific code, carNoise is accessible within the goFast function (inside the makeNoise function as well) and the if 
 * statement because both of these are within the global scope.
 */
const carNoise = 'Honk';
// 2) Where is goFast stored?
/**
 * The variable goFast is also stored in the global scope. It is declared using the const keyword and assigned an arrow function. 
 * The arrow function takes a parameter speed, which means it is a function with a single argument.
 * 
 * Since it is declared in the global scope, the goFast function can be accessed and used throughout the entire code.
 * 
 * In this specific code, the goFast function is called within the if statement on line 19 when the user confirms the prompt. 
 * This will execute the function and any code within its body.
 */
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // 
  
  // 5) Where is makeNoise stored?
  //
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
/**
 * In this statement, the code uses the confirm function, which is a built-in JavaScript function that displays a dialog box with a 
 * message and "OK" and "Cancel" buttons. The message shown in the dialog box is "Do you want to go fast?".
 * 
 * If the user clicks the "OK" button, the confirm function returns true, and the code inside the if block will be executed.
 * If the user clicks the "Cancel" button, the confirm function returns false, and the code inside the if block will be skipped.
 * 
 * Inside the if block, the function goFast is called with an argument of 80. This means the goFast function will be executed with 
 * the value 80 passed as the speed parameter. As a result, the function body of goFast will run.
 */
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
