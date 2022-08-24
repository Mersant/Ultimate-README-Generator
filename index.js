const inquirer = require('inquirer');
const fs = require('fs');

// Simply a list of a bunch of licenses you can automatically apply to your repo
const licenseArray = [
    "Academic Free License v3.0",
    "Apache License 2.0",
    "Artistic License 2.0",
    "Boost Software License 1.0",
    "BSD 2-clause \"Simplified\" license",
    "BSD 3-clause \"New\" or \"Revised\" license",
    "BSD 3-clause Clear license",
    "Creative Commons license family",
    "Creative Commons Zero v1.0 Universal",
    "Creative Commons Attribution 4.0",
    "Creative Commons Attribution Share Alike 4.0",
    "Do What The F*ck You Want To Public License",
    "Educational Community License v2.0",
    "Eclipse Public License 1.0",
    "Eclipse Public License 2.0",
    "European Union Public License 1.1",
    "GNU Affero General Public License v3.0",
    "GNU General Public License Family",
    "GNU General Public License v2.0",
    "GNU General Public License v3.0",
    "GNU Lesser General Public License v2.1",
    "GNU Lesser General Public License v3.0",
    "ISC license",
    "LaTeX Project Public License v1.3c",
    "Microsoft Public License",
    "MIT license",
    "Mozilla Public License 2.0",
    "Open Software License 3.0",
    "PostgreSQL License",
    "SIL Open Font License 1.1",
    "University of Illinois/NCSA Open Source License",
    "The Unlicense",
    "zLib License"
];

// Add badge: https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR> i.e.
// https://img.shields.io/badge/license-zLib License-blue

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your GitHub project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What email should users use to contact you?',
      name: 'userEmail',
    },
    {
      type: 'input',
      message: 'Please enter a description of your project:',
      name: 'projectDesc',
    },
    {
      type: 'input',
      message: 'Please enter instructions to install your application:',
      name: 'projectInstall',
    },
    {
      type: 'input',
      message: 'Please describe what your application is intended to be used for:',
      name: 'projectUsage',
    },
    {
      type: "list",
      message: "What license is your project available under?",
      choices: licenseArray,
      default: "Academic Free License v3.0",
      name: "licenseChoice",
    },
    {
        type: 'input',
        message: 'Please enter guidlines for contributing to your project:',
        name: 'projectContributing',
    },
    {
        type: 'input',
        message: 'Please enter guidlines for testing your project:',
        name: 'projectTesting',
    }
    
    ])
    .then((response) => {
        fs.appendFile('Generated_README.md', 
        
`# Ultimate-README-Generator
[![License](https://img.shields.io/badge/license-${response.licenseChoice.replace(/\s/g,'%20')}-blue)](./LICENSE)
#### Table of Contents
- [Ultimate-README-Generator](#ultimate-readme-generator)
        - [Table of Contents:](#table-of-contents-)
    * [Description](#description)
    * [Installation Instructions](#installation-instructions)
    * [Usage](#usage)
    * [Guidelines for Testing](#guidelines-for-testing)
    * [Guidlines for Contributing](#guidlines-for-contributing)
    * [License](#license)


## Description
${response.projectDesc}
## Installation Instructions
${response.projectInstall}
## Usage
${response.projectUsage}
## Guidelines for Testing
${response.projectTesting}
## Guidlines for Contributing
${response.projectContributing}
## Questions
This project is managed by ${response.username}
You can find me on GitHub at https://github.com/${response.username}
Additional questions? You can email me at ${response.userEmail}
### License`,

        function (err) {
            if (err) throw err;
            console.log('Saved!');
        })
    }
);



//module.exports = generatedHTML
// Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.
/*
# Ultimate-README-Generator
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
#### Table of Contents
- [Ultimate-README-Generator](#ultimate-readme-generator)
      - [Table of Contents:](#table-of-contents-)
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage)
  * [Guidelines for Testing](#guidelines-for-testing)
  * [Guidlines for Contributing](#guidlines-for-contributing)
  * [License](#license)


## Description

## Installation Instructions

## Usage

## Guidelines for Testing

## Guidlines for Contributing

### License
*/