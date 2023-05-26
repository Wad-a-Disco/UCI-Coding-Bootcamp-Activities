// Helper function to output text in the terminal in a cyan color
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

// Top 10 Spotify songs in an array
const songs = [
  '1: MONTERO (Call Me By Your Name)',
  '2: Peaches (feat. Daniel Caesar & Giveon)',
  '3: Kiss Me More (feat. SZA)',
  '4: Astronaut In The Ocean',
  '5: Save Your Tears (with Ariana Grande) (Remix)',
  '6. RAPSTAR',
  '7. Levitating (feat. DaBaby)',
  '8. Leave The Door Open',
  '9. Botella Tras Botella',
  '10. Fiel',
];

console.log('Spotify top 10:\n');

// Iterate through each song using a for...of loop
for (const song of songs) {
  // Output each song in a cyan color
  outputCyanText(song);
}

// Bonus Question: Answered
/**
 * To iterate through deeply nested objects, you can use recursion. 
 * Here's an example of how you can implement a recursive function to iterate through nested objects:
// Recursive function to iterate through nested objects
const iterateNestedObjects = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is an object (and not null), recursively call the function
      iterateNestedObjects(obj[key]);
    } else {
      // Perform the desired operation on the value (e.g., logging, manipulation, etc.)
      console.log(obj[key]);
    }
  }
};

// Example deeply nested object
const data = {
  key1: 'value1',
  key2: {
    key3: 'value3',
    key4: {
      key5: 'value5',
      key6: {
        key7: 'value7'
      }
    }
  },
  key8: 'value8'
};

// Call the recursive function to iterate through the nested object
iterateNestedObjects(data);

 * 
 * In this example, the iterateNestedObjects function takes an object as an argument and iterates through its keys using a for...in 
 * loop. For each key, it checks if the corresponding value is an object (and not null). If it is, the function recursively calls 
 * itself with the nested object. This process continues until it reaches the leaf nodes (values that are not objects).
 * 
 * When a leaf node is encountered, you can perform the desired operation on the value. In this example, 
 * the value is logged to the console using console.log(), but you can modify this part to perform any other operation you need.
 * 
 * The provided code demonstrates how to iterate through deeply nested objects using recursion. 
 * You can adapt it to suit your specific requirements and perform the desired actions within the loop.
 */
