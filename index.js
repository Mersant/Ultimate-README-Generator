const inquirer = require('inquirer');
const fs = require('fs');

const CLS = () => console.log('\033c'); // Clears terminal and resets cursor position to (0,0), you could say it's a pretty BASIC keyword... Haha... MS BASIC joke.

const SETPOS = (L,C) => console.log('\033['+L+';'+C+'H'); // Set cursor position, note that 0,0 is the top left corner of page, not bottom left.
const RST =  () => console.log('\033[0m'); // Reset text colors to default

// ---------------------------------  Colors  ----------------------------------- //
// Foreground
const FRED = () => console.log('\x1B[31m');
const FGRN = () => console.log('\033[32m');
const FYEL = () => console.log('\033[33m');
const FBLU = () => console.log('\033[34m');
const FCYN = () => console.log('\033[36m');
const FWHT = () => console.log('\033[37m');
// Background
const BRED = () => console.log('\033[41m');
const BGRN = () => console.log('\033[42m');
const BYEL = () => console.log('\033[43m');
const BBLU = () => console.log('\033[44m');
const BCYN = () => console.log('\033[46m');
const BWHT = () => console.log('\033[47m');

CLS();


/* module.exports = generatedHTML
//* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Where do you live? Asking for a friend.',
      name: 'userLocation',
    },
    {
      type: 'input',
      message: 'Write a bio about yourself.',
      name: 'userBio',
    },
    {
      type: 'input',
      message: 'Gimme your LinkedIn URL',
      name: 'linkedInURL',
    },
    {
      type: 'input',
      message: 'Now gimme your GitHub URL',
      name: 'gitHubURL',
    }
    ])
    .then((response) =>
        fs.appendFile('output.html', 
        
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>FS Output</title>
        </head>
        <body>
            <h2>Name:</h2>
            <p>${response.username}</p>
            <h2>Location:</h2>
            <p>${response.userLocation}</p>
            <h2>Bio:</h2>
            <p>${response.userBio}</p>
            <h2>LinkedIn URL:</h2>
            <p>${response.linkedInURL}</p>
            <h2>GitHub URL:</h2>
            <p>${response.gitHubURL}</p>
        </body>
        </html>`,

        function (err) {
            if (err) throw err;
            console.log('Saved!');
        })
);
*/