// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// Destructure the object 'nodejs'
const { name, type } = nodejs;

console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// Destructure the nested object 'js'
const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// Destructure the array 'languages'
const [markup, style, scripting] = languages;

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML

// Bonus Question: Answered
/**
 * When destructuring an object, you can assign a property to a variable with a different name using the syntax propertyName: 
 * variableName. Here's an example:
  const person = {
  firstName: 'John',
  lastName: 'Doe',
};

// Destructure the object 'person' and assign the 'firstName' property to a variable with a different name
const { firstName: fName } = person;

console.log(fName); // <= John

 * 
 * In the example above, we're destructuring the person object and assigning the value of the firstName property to a variable named 
 * fName. Now, when we log fName, it outputs John.
 * 
 * By specifying propertyName: variableName during destructuring, you can assign the value of the property to a different variable 
 * name.
 */