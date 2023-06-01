// TODO: Add a comment describing what kind of function this is
// This is a constructor function for creating BlogPost objects
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// The `.prototype` allows adding methods to all instances of the BlogPost constructor efficiently
BlogPost.prototype.addComent = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComent('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
// This will print the comments array of the `post` object, which should contain the comment 'Nice post, I like it!'
console.log(post.comments);

// Bonus Question: Asnwered
/**
 * When adding a method inside the constructor versus adding it to the prototype, 
 * there are some key differences in terms of memory usage and behavior:
 * 1) Memory Usage: 
 *      Adding a method inside the constructor: When a method is defined inside the constructor, a new instance of that method is 
 *      created for each object created using the constructor. This means that each object will have its own copy of the method, 
 *      leading to potentially higher memory usage, especially if the method contains a large amount of code or if a large number 
 *      of objects are created.
 *      Adding a method to the prototype: When a method is added to the prototype, 
 *      it is shared among all instances of the constructor. The method is stored in the prototype object, which is shared by all 
 *      objects created from the constructor. This results in more efficient memory usage since all objects can access the shared 
 *      method without creating separate copies of it.
 * 
 * 2) Behavior:
 *      Adding a method inside the constructor: When a method is defined inside the constructor, each object created from the 
 *      constructor will have its own separate copy of that method. Any changes made to the method for one object will not affect 
 *      other objects created from the same constructor.
 *      Adding a method to the prototype: When a method is added to the prototype, all objects created from the constructor share the
 *      same method. If the method is modified for one object, the change will be reflected in all other objects as well. 
 *      This can be useful when you want to add or modify a method for all instances of the constructor at once.
 * 
 * In summary, adding a method inside the constructor creates a separate copy of the method for each object, while adding a method 
 * to the prototype allows all objects to share the same method. Adding methods to the prototype is more memory-efficient and can 
 * enable changes to propagate across all instances, whereas adding methods inside the constructor can provide object-specific 
 * behavior but may consume more memory. The choice between the two approaches depends on the specific requirements and trade-offs 
 * of the application.
 */