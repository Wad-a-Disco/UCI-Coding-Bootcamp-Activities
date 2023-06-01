// Parent class
class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// Child class BlogPost
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Child class Comment
class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// Creating instances and logging to console
const comment = new Comment("John Doe", "This is a comment.", new Date(), "Like");
const blogPost = new BlogPost("Jane Smith", "My Blog Post", "This is the body of my blog post.", new Date());

console.log(comment);
console.log(blogPost);
