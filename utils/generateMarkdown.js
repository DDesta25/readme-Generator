// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "APACHE 2.0") {
    return `![Static Badge](https://img.shields.io/badge/license-Apache2.0-brightgreen)
    `
  }
  if (license == "MIT") {
    return `![Static Badge](https://img.shields.io/badge/license-mit-brightgreen)
    `
  }
  if (license == "GPL 3.0") {
    return `![Static Badge](https://img.shields.io/badge/license-GPL3.0-brightgreen)
    `
  }
  if (license == "BSD 3") {
    return `![Static Badge](https://img.shields.io/badge/license-BSD3-brightgreen)
    `
  }
  if (license == "None") {
    return ``
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "APACHE 2.0") {
    return `[http://www.apache.org/licenses/](http://www.apache.org/licenses/)`;
  }
  if (license == "MIT") {
    return `[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)`;
  }
  if (license == "GPL 3.0") {
    return`[https://fsf.org/](https://fsf.org/)`
  }
  if (license == "BSD 3") {
    return `[https://opensource.org/license/BSD-3-clause/](https://opensource.org/license/BSD-3-clause/)`
  }
  if (license == "None") {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "APACHE 2.0") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license == "MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license == "GPL 3.0") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  }
  if (license == "BSD 3") {
    return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent.`;
  }
  if (license == "None") {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${
    renderLicenseBadge(data.licenseList)
  }

  ## Description
  
  ${data.projectDescription}
  
  ## Table of Contents 
  
  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
${data.install}
  
  ## Usage
  
  
 ${data.infoUsage}
  
  
  
  ## License
  
${renderLicenseSection(data.licenseList)}
  ${renderLicenseLink(data.licenseList)}

  
  ## How to Contribute
  ${data.contributorInfo}

  
  
  ## Tests
  ${data.testInstruction}
`;
}

module.exports = generateMarkdown;
