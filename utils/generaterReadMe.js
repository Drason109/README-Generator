//Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    if (license == '') {
        return '';
    }
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    
}

//returns the license link for the table of content
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license == ''){
        return '';
    }
    return `* [license](#license)`;
}
// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license == ''){
        return '';
    }
    return `## License

    This project is licensed under the ${license} license.`;
}

// Generates the markdown for the README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

 ## Table of Contents

 * [Installation](#installation)

* [Intruction](#rules)
    
${renderLicenseLink(data.license)}

* [Edit](#edit)

* [Tests](#tests)

* [Contact](#Contact)
    
## Installation

To install necessary dependencies, run the following Command:

\`\`\`
${data.installation}
\`\`\`

## Intruction
${data.rules}

${renderLicenseSection(data.license)}

## Edit

${data.edit}

## Tests

\`\`\`
${data.test}
\`\`\`

## Questions

if you have any questions about the repo, open an issue or contact me dirctly at ${data.email}. You can find more of my work at [${data.name}](https://github.com/${data.name}/).

`;
}

//allows generateMarkdown to be called by a different file
module.exports = generateMarkdown;