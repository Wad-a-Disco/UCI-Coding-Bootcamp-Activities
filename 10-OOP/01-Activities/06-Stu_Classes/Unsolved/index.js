class BlogPost {
    constructor(authorName, title, text, createdOn) {
      this.authorName = authorName;
      this.title = title;
      this.text = text;
      this.createdOn = createdOn;
      this.comments = [];
    }
  
    printMetaData() {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
  }
  
  class Comment {
    constructor(authorName, text, createdOn, reaction) {
      this.authorName = authorName;
      this.text = text;
      this.createdOn = createdOn;
      this.reaction = reaction;
    }
  
    printMetaData() {
      console.log(`Created by ${this.authorName} on ${this.createdOn} (${this.reaction})`);
    }
  }
  
  // Create a new Comment object
  const comment = new Comment("John", "Great post!", "2023-05-30", "👍");
  
  // Create a new BlogPost object
  const blogPost = new BlogPost("Jane", "My First Blog Post", "Hello, world!", "2023-05-30");
  
  // Add the Comment to the BlogPost's comments array
  blogPost.addComment(comment);
  
  // Print the meta data for the BlogPost
  blogPost.printMetaData();
  
  // Print the meta data for the Comment
  comment.printMetaData();
  

// Hint Question: Answered
/**
 * To initialize the properties of a class in JavaScript, you need to define a constructor method inside the class. 
 * The constructor method is a special method that is automatically called when an object is created from the class. 
 * It allows you to set the initial values of the object's properties.
 * 
 * In the provided user story, the acceptance criteria mention creating class constructors for both the BlogPost and Comment classes. 
 * Here's an example of how to define the constructor method inside a class:
 *class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    // Additional initialization code can be added here
  }
  
  // Other methods of the class
}

 * 
 * 
 * In this example, the BlogPost class has a constructor that takes in the authorName, title, text, and createdOn parameters. 
 * Inside the constructor, this.authorName = authorName; assigns the value of the authorName parameter to the authorName property 
 * of the object created from the class. Similarly, the other properties are initialized using the respective parameters.
 * 
 * You can follow the same pattern to define the constructor method for the Comment class or any other class. 
 * The constructor allows you to initialize the object's properties when it is created.
 */

// Bonus Question: Answered
/**
 * Encapsulation is one of the four fundamental principles of object-oriented programming (OOP). 
 * It refers to the bundling of data (properties) and methods (behavior) within a single unit called an object. 
 * The main goal of encapsulation is to hide the internal workings of an object and provide a well-defined interface for interacting 
 * with it.
 * 
 * Here are the benefits of encapsulation:
 * 1) Data Protection: Encapsulation allows you to control access to the internal data of an object. 
 * By making data private or protected, you can prevent direct external modification and ensure that data is accessed and modified 
 * through defined methods (getters and setters). This protects the integrity and consistency of the object's state.
 * 
 * 2) Modularity and Code Organization: Encapsulation promotes modularity by grouping related data and behavior together within a 
 * single object. This helps in organizing and managing complex systems by dividing them into smaller, more manageable units. 
 * Each object can have its own state and behavior, making the code more modular, reusable, and easier to understand.
 * 
 * 3) Information Hiding: Encapsulation allows you to hide the internal implementation details of an object from the outside world. 
 * By exposing only the necessary methods and properties through an interface, you can hide the complexities and 
 * implementation-specific details. This provides a level of abstraction and simplifies the usage of objects, enabling 
 * changes to the internal implementation without affecting the external code.
 * 
 * 4) Code Maintainability: Encapsulation improves code maintainability by encapsulating related functionality and data into objects. 
 * Changes made to the internal implementation of an object are isolated within the object itself, reducing the impact on other 
 * parts of the codebase. This makes it easier to update, extend, and maintain the system over time, as changes can be localized 
 * to specific objects without affecting the entire system.
 * 
 * Now, let's talk about the "state" of an object. The state of an object refers to the current set of values stored in its 
 * properties or attributes at any given time. It represents the data that defines the object's characteristics or attributes. 
 * For example, a Person object may have properties such as name, age, and gender, which collectively define the state of that 
 * person.
 * 
 * The state of an object can change over time as the object's properties are modified. For instance, if we update the age property 
 * of a Person object from 25 to 26, the state of that object changes accordingly. The behavior (methods) of an object can also be 
 * influenced by its state. The methods may perform different actions based on the current values of the object's properties.
 * 
 * Encapsulation helps in managing and protecting the state of an object by providing controlled access to the object's properties 
 * through methods. This ensures that the state remains consistent and that any changes to the state follow defined rules and 
 * validations defined within the object's methods.
 */
