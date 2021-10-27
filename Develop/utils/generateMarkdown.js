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
  // console.log(data); //OUTDENT EXTENSION
  return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## How to Use
${data.usage}

## License
${data.license}

## Contributors
${renderCreditList(data.creditUser, data.creditGithub)}
`;
}

module.exports = generateMarkdown;
