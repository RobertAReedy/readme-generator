/**
 * Creates a list of <a> objects by splitting the strings
 * containing the contributor names and github account names
 * using the special " -!- " separator. 
 */
function renderCreditList(contributorString, githubString) {
  let contributorArr = contributorString.split(" -!- ");
  let githubArr = githubString.split(" -!- ");
  let retVal = "";

  if (contributorArr.length == githubArr.length) {
    for (var i = 0; i < contributorArr.length; i++) {
      retVal += 
      `- <a href="https://github.com/${githubArr[i]}" target="_blank">${contributorArr[i]}</a>\n`;
    }
    return retVal;
  }
  else {
    return "error";
  }
}

function renderTableOfContents(tableConfirm) {
  if (tableConfirm) {
    let retVal;
    retVal = 
    `
## Table of Contents
 - [Description](#description)\n
 - [Installation](#installation)\n
 - [How to Use](#how-to-use)\n
 - [Contributors](#contributors)\n
 - [License](#license)
    `;
    return retVal;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license == "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license == "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data); //OUTDENT EXTENSION
  return `
# ${data.title}
${renderTableOfContents(data.confirmTableOfContents)}
## <h2 id="description">Description</h2>
${data.description}

## <h2 id="installation">Installation</h2>
${data.installation}

## <h2 id="how-to-use">How to Use</h2>
${data.usage}

## <h2 id="contributors">Contributors</h2>
${renderCreditList(data.creditUser, data.creditGithub)}

## <div id="license">${renderLicenseBadge(data.license)}</div>
`;
}

module.exports = generateMarkdown;
