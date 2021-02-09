// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
if (license === "None"){
  return "None"
}

if(license === "MIT"){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}

if (license === "Apache"){
 return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} 



if(license === "Eclipse"){
  return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
}


function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
