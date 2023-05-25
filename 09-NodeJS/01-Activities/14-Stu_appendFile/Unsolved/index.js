// TODO: What are we importing?
const fs = require('fs');

// fs module is being imported. It is a built-in Node.js module used for working with the file system.

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // The appendFile() function is used to append data to a file. It takes three arguments:

  // 1. 'log.txt': The first argument is the name or path of the file to which the data will be appended.

  // 2. `${process.argv[2]}\n`: The second argument is the data to be appended to the file. It uses a template literal (`${}`) to insert the value of `process.argv[2]`, which is the third command-line argument provided when running the script. The `\n` is a newline character added to separate each entry in the log file.

  // 3. (err) => err ? console.error(err) : console.log('Commit logged!'): The third argument is a callback function that gets executed after the data has been appended to the file. It takes an error parameter `err` which will be populated if there was an error during the append operation. The ternary operator is used here to conditionally log either the error message or a success message depending on the presence of an error. If `err` is truthy (an error occurred), it logs the error using `console.error()`. Otherwise, it logs 'Commit logged!' using `console.log()`.

  err ? console.error(err) : console.log('Commit logged!')
);

