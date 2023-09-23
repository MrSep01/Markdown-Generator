const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'GPL', 'Apache', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Your email address:',
  }
];

function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data);
    console.log('Successfully created README.md');
  } catch (err) {
    console.log(err);
  }
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', generateReadme(answers));
  });
}

init();
