var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// Add "Canis Major" as the first element of constellations array
constellations.unshift("Canis Major");

// Remove "Venus" from the planets array
planets.splice(planets.indexOf("Venus"), 1);

// Join constellations and planets arrays to form a new array named galaxy
var galaxy = constellations.concat(planets);

// Convert the string "polaris" to all capital letters and store in a variable named capitalizedStar
var capitalizedStar = star.toUpperCase();
