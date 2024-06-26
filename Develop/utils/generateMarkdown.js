// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      break;

    case "GPLv3":
      `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
      break;

    case "Apache 2.0":
      `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
      break;

    case "BSD 3-Clause":
      `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
      break;

    case "None":
      "";
      break;

    default:
      console.log("Ensure license badge link is correct");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      `[![License: MIT](https://opensource.org/licenses/MIT)`;
      break;

    case "GPLv3":
      `[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    case "Apache 2.0":
      `[![License](https:](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case "BSD 3-Clause":
      `[![License](https:](https://opensource.org/licenses/BSD-3-Clause)`;
      break;

    case "None":
      "";
      break;

    default:
      console.log("Ensure license link is correct");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    github,
    email,
  } = data;

  return `
  # ${title}
    
   ## Description
   
   ${description}
    
   ## Installation

   ${installation}

   ## Usage

   ${usage}

   ## How to Contribute

   ${contributing}

   ## License

   This project is licensed under the ${license} License 

   ## Questions

   <a href="https://github.com/${github}">GitHub</a>

   If you have further questions, <a href="mailto:${email}">shoot me an email</a>
`;
}

module.exports = generateMarkdown;
