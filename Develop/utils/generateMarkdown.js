// Returns a license badge based on the given license, or an empty string if none
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

    case "GPLv3":
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;

    case "Apache 2.0":
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;

    case "BSD 3-Clause":
      return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;

    default:
      return "";
  }
}

// Returns the license link for the given license, or an empty string if none
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";

    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";

    case "BSD 3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";

    default:
      return "";
  }
}

// Returns the license section of the README, or an empty string if none
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "This project is licensed under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the original copyright notice and permission notice are included in all copies or substantial portions of the software.";

    case "GPLv3":
      return "This project is licensed under the GPLv3 License. You are free to use, copy, distribute, and modify the software, provided that any derivative work is also open-source and distributed under the same license.";

    case "Apache 2.0":
      return "This project is licensed under the Apache 2.0 License. You are free to use, copy, modify, and distribute the software, both in open-source and proprietary projects, provided that a copy of the license, a notice of any changes made, and an explicit grant of patent rights are included.";

    case "BSD 3-Clause":
      return "This project is licensed under the BSD 3-Clause License. You are free to use, copy, modify, and distribute the software, provided that minimal attribution is given and the names of the contributors are not used to promote derived products.";

    default:
      return "";
  }
}

// Generates markdown for README using provided data
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

  ${renderLicenseBadge(license)}
    
## Description
   
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
   


\`\`\`sh
${installation}   
\`\`\`

## Usage



\`\`\`sh
${usage}   
\`\`\`

## Contributing

${contributing}

## Tests



\`\`\`sh
${tests}   
\`\`\`

## License

${renderLicenseSection(
  license
)} For more details, see the ${license} [LICENSE](${renderLicenseLink(
    license
  )}) file. 

   
## Questions

If you have any questions about the project, please feel free to contact me directly:

GitHub: <a href="https://github.com/${github}">${github}</a>

Email: <a href="mailto:${email}">${email}</a>
`;
}

export default generateMarkdown;
