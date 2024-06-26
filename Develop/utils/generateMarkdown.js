// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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

   If you have further question, <a href="mailto:${email}">shoot me an email</a>
`;
}

module.exports = generateMarkdown;
