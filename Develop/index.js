import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Provide a description of your project:",
  "Provide installation instructions:",
  "Provide usage information:",
  "Provide contribution guidelines:",
  "Provide test instructions:",
  "Choose a license for your project:",
  "What is your GitHub username?",
  "What is your email address?",
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
function init() {}

// Function call to initialize app
init();
