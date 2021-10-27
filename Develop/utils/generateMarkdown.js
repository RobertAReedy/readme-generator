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
  return "";
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
${renderTableOfContents(data.confirmTableOfContents)}
## <h2 id="description">Description</h2>
${data.description}

## <h2 id="installation">Installation</h2>
${data.installation}

## <h2 id="how-to-use">How to Use</h2>
${data.usage}

## <h2 id="license">License</h2>
${data.license}

## <h2 id="contributors">Contributors</h2>
${renderCreditList(data.creditUser, data.creditGithub)}
`;
}

module.exports = generateMarkdown;
