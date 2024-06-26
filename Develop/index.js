import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fileName = "README.md";

  data = `# ${title}
    
   ## Description
   
   ${description}
    
   ## Installation

   ${installation}

   ## Usage

   ${usage}

   ## How to Contribute

   ${contributing}

   ## License

   ${license}

   ## Questions

   <a href="https://github.com/${github}">GitHub</a>

   If you have further question, <a href="mailto:${email}">shoot me an email</a>
    `;

  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("README file created successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile("README.md", responses);
  });
}

// Function call to initialize app
init();
