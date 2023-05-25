const fs = require('fs');
const inquirer = require('inquirer');

// Ask the user questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you know?',
      choices: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Other'],
    },
    {
      type: 'list',
      name: 'communication',
      message: 'What is your preferred method of communication?',
      choices: ['Email', 'Phone', 'Slack', 'In-person'],
    },
  ])
  .then((answers) => {
    // Write the responses to a file
    const data = `Name: ${answers.name}\nLanguages: ${answers.languages.join(', ')}\nPreferred Communication: ${answers.communication}`;

    fs.writeFile('responses.txt', data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Responses saved to responses.txt');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });


  // Bonus Question: Answered
  /**
   * To format the JSON data in a more structured and organized way, you can modify the code to generate the file name based on user 
   * input. Here's an updated version that includes both formatting the JSON and generating the user-specific file name:
const fs = require('fs');
const inquirer = require('inquirer');

// Ask the user questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you know?',
      choices: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Other'],
    },
    {
      type: 'list',
      name: 'communication',
      message: 'What is your preferred method of communication?',
      choices: ['Email', 'Phone', 'Slack', 'In-person'],
    },
  ])
  .then((answers) => {
    // Format the JSON data
    const jsonData = {
      name: answers.name,
      languages: answers.languages,
      communication: answers.communication,
    };

    // Generate the file name based on user input
    const fileName = `${answers.name.replace(/\s+/g, '_')}.json`;

    // Write the JSON data to a file
    fs.writeFile(fileName, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Responses saved to ${fileName}`);
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });

   * In this updated code, the JSON data is formatted as an object with properties corresponding to the user's responses. 
   * The fileName variable is generated based on the user's name input. Spaces in the name are replaced with underscores (_) to 
   * create a valid file name.
   * 
   * After executing node app.js, the code will prompt the user with questions, format the JSON data, 
   * and write it to a file with the generated file name.
   * 
   * The resulting file will be in JSON format and will contain the user's name, known languages, and preferred method of 
   * communication.
   */