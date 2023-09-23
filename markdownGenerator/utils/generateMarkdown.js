function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![${license} License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `[License](#license)`;
}

function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} License.`;
}

function generateReadme(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For additional questions, you can visit my [GitHub profile](https://github.com/${data.github}) or email me at [${data.email}](mailto:${data.email}).
  `;
}

module.exports = generateReadme;



