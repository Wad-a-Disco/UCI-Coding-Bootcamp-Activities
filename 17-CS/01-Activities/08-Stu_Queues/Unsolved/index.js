class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Method to add an element to the queue
    enqueue(element) {
      this.queue.push(element);
    }
  
    // Method to remove and return the first element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue.shift();
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Method to get the size of the queue
    size() {
      return this.queue.length;
    }
  
    // Method to view the first element in the queue without removing it
    front() {
      return this.isEmpty() ? null : this.queue[0];
    }
  
    // Method to view the last element in the queue without removing it
    rear() {
      return this.isEmpty() ? null : this.queue[this.queue.length - 1];
    }
  }
  
  module.exports = Queue;
  