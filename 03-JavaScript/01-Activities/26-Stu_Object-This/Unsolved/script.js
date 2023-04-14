// TODO: What does 'this' refer to?
console.log(this); // 'this' refers to the global object, which is the window object in the browser and the global object in Node.js.

// TODO: What does 'this' refer to?
function helloThis() {
console.log("Inside this function, this is " + this);
}
// 'this' inside the helloThis function will refer to the global object in non-strict mode, and undefined in strict mode.

// TODO: What will this log?
var child = {
age: 10,
ageTenYears: function() {
console.log(this.age + 10);
}
};
// This will log 20 because this.age inside the ageTenYears function refers to the age property of the child object.

// TODO: What will this log?
var investor = {
name: "Cash Saver",
investment: {
initialInvestment: 5000,
investmentGrowth: function() {
console.log(this.initialInvestment * 1.15)
}
}
};
// This will log 5750, which is the result of multiplying the initialInvestment property by 1.15.

// TODO: After commenting, check your results!
helloThis(); // logs "Inside this function, this is [object Window]" in the browser, or "Inside this function, this is [object global]" in Node.js.

// TODO: After commenting, check your results!
child.ageTenYears(); // logs 20

investor.investment.investmentGrowth(); // logs 5750
