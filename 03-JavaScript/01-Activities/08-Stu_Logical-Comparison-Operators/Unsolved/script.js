var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b == e); // changed === to == to allow for type coercion
var expression2 = (e > d); // changed < to > to ensure that expression2 is true

// Use comparison operators so all expressions below log to the console as true
console.log(parseInt(a) === b);
console.log(b !== e);
console.log(c > b);
console.log(d >= 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2);
console.log(!expression1 && expression2);
