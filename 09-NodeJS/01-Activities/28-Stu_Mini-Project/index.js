const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you located?'
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Write a short bio:'
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'What is your LinkedIn URL?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub URL?'
    }
  ])
  .then((answers) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
  
          h1 {
            color: #333;
          }
  
          p {
            margin-bottom: 1em;
          }
  
          .info {
            margin-bottom: 2em;
          }
  
          .info p {
            font-weight: bold;
          }
  
          .link {
            margin-right: 1em;
          }
        </style>
      </head>
      <body>
        <h1>Portfolio</h1>
  
        <div class="info">
          <p>Name: ${answers.name}</p>
          <p>Location: ${answers.location}</p>
          <p>Bio: ${answers.bio}</p>
          <p>
            Links:
            <a href="${answers.linkedin}" class="link">LinkedIn</a>
            <a href="${answers.github}" class="link">GitHub</a>
          </p>
        </div>
      </body>
    </html>
    `;

    fs.writeFile('portfolio.html', htmlContent, (err) => {
      if (err) throw err;
      console.log('Portfolio generated successfully!');
    });
  })
  .catch((error) => {
    console.error(error);
  });
