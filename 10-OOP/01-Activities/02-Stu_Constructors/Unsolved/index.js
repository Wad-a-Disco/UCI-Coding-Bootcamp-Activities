// Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text', and 'createdOn'
function BlogPost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
  
    // Include a method called 'printMetaData()' that prints a message in the console
    // saying 'Created by (authorName) on (createdOn)'
    this.printMetaData = function () {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    };
  }
  
  // Create a new object using the 'BlogPost' constructor with custom values
  var myBlogPost = new BlogPost(
    "John Doe",
    "My First Blog Post",
    "This is the content of my first blog post.",
    new Date()
  );
  
  // Call the 'printMetaData()' method on the new object
  myBlogPost.printMetaData();
  

// Hint Question: Answered
/**
 * To use template literals and include the formatted date in the introduction message, 
 * you can modify the printMetaData() method in the BlogPost constructor as follows:
  this.printMetaData = function () {
  const formattedDate = this.createdOn.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  console.log(`Created by ${this.authorName} on ${formattedDate}`);
};

 * 
 * In this updated code, we use the toLocaleDateString() method to format the createdOn date in a readable format. 
 * The options object passed to toLocaleDateString() specifies that we want the date to be in the format of the full month 
 * name, day, and year.
 * 
 * Now, when you call the printMetaData() method, it will display an introduction message like 
 * "Created by John Doe on December 5th, 2022" in the console, with the date formatted according to the specified options.
 */