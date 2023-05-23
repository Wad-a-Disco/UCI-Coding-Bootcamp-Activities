// 1. funnyCase makes each letter in a string the opposite case as the one before
var funnyCase = function (string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }
  return newString;
};

// Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
var map = function (arr, cb) {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubled = map(numbers, function (element) {
  return element * 2;
});

// Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
console.log(doubled);

// --------------------------------------------------------------------------

// 3. filter lets you loop over an array and remove elements
var filter = function (arr, cb) {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

var evenNumbers = filter(numbers, function (currentElement) {
  return currentElement % 2 === 0;
});

// Prints `[ 2, 4, 6, 8, 10 ]`
console.log(evenNumbers);

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your netflix queue
var netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club"
  ],
  watchMovie: function () {
    this.queue.pop();
  },
  addMovie: function (movie) {
    this.queue.unshift(movie);
  },
  printQueue: function () {
    var list = "";
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i];
      list += (this.queue.length - i) + ". " + currentMovie + "\n";
    }
    console.log(list);
  }
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("\nWatched a movie!\n");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();


// Hint Question: Answer 
/**
 * Arrow functions are a powerful feature in JavaScript, but there are certain scenarios where
 * they might not be the best choice. Here are a few examples of when it is generally 
 * recommended not to use arrow functions:
 * 
 * 1) Object Methods: When defining methods in an object, using regular function expressions 
 *    is preferred over arrow functions. This is because arrow functions do not bind their own 
 *    'this' value, so using them as object methods would result in 'this' referring to the
 *    outer context instead of the object itself.
// Not recommended
const obj = {
  name: "John",
  sayHello: () => {
    console.log(`Hello, ${this.name}!`);
  }
};

// Recommended
const obj = {
  name: "John",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};
*
* 2) Event Handlers: In event handlers, using arrow functions may lead to unexpected 
*    behavior. Regular function expressions are typically preferred in this context because 
*    they allow access to the event object and ensure that 'this' refers to the element
*    triggering the event.
// Not recommended
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  console.log(this); // `this` will not refer to the button element
});

// Recommended
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
  console.log(this); // `this` refers to the button element
});
*
* 3) Prototypes: When defining methods on object prototypes, arrow functions are generally 
*    not suitable. Prototypes require their own this binding, which is achieved using regular
*    function expressions.
// Not recommended
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = () => {
  console.log(`Hello, ${this.name}!`); // `this` will not refer to the Person instance
};

// Recommended
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`); // `this` refers to the Person instance
};
*
* These are some common examples where it's advisable to avoid using arrow functions. It's 
* important to consider the context and behavior of arrow functions before deciding to use 
* them in your code.
*/