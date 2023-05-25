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
