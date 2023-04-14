// Create an object to store customer's drink order
var customerDrink = {
  name: "Latte",
  sugars: 2,
  isReady: false
};

// Log the drink name and the number of sugars to the console
console.log("Customer ordered a " + customerDrink.name + " with " + customerDrink.sugars + " sugars.");

// Simulate preparation time with a timer
setTimeout(function() {
  // Set isReady property to true
  customerDrink.isReady = true;
  
  // Check if the drink order is ready
  if (customerDrink.isReady) {
    // If the order is ready, log "Ready for pick-up"
    console.log("Ready for pick-up");
  } else {
    // If the order is not ready, log "Still in order queue"
    console.log("Still in order queue");
  }
}, 5000); // Wait for 5 seconds before setting isReady to true
