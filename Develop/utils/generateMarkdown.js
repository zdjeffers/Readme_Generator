// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "None"
  }

  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "ISC") {
    return `[![License](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)`
  }

  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  if (license === "MPL 2.0") {
    return `[![License](https://img.shields.io/badge/License-MPL%202.0-red.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

   ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
  
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contributors}
  ## License:

  ${renderLicenseLink(data.license)}

  ## Github Username: ${data.github}

  ## Email: ${data.email}
`;
}

module.exports = generateMarkdown;
